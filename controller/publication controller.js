const axios = require("axios");
const { XMLParser } = require("fast-xml-parser");

/**
 * GET /api/publications
 * q=term&page=1&year=2023&journal=Nature
 */
exports.getPublications = async (req, res) => {
  let { q, page = 1, year, journal } = req.query;

  if (!q) return res.status(400).json({ error: "Query required homie." });

  try {
    const retmax = 10;
    const retstart = (page - 1) * retmax;

    // 🧠 BUILD SEARCH TERM
    let searchTerm = q;

    if (year) {
      if (year === "older") {
        searchTerm += ` 1900:2020[PDAT]`;
      } else {
        searchTerm += ` ${year}:${year}[PDAT]`;
      }
    }

    if (journal) {
      searchTerm += ` ${journal}[Journal]`;
    }

    // 1️⃣ SEARCH PMIDS
    const searchRes = await axios.get(
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi",
      {
        params: {
          db: "pubmed",
          term: searchTerm,
          retmax,
          retstart,
          retmode: "json",
        },
      }
    );

    const ids = searchRes.data.esearchresult?.idlist || [];
    if (!ids.length) {
      return res.json({
        page,
        results: [],
        hasMore: false,
        total: 0,
      });
    }

    // 2️⃣ FETCH SUMMARY DATA
    const summaryRes = await axios.get(
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi",
      {
        params: {
          db: "pubmed",
          id: ids.join(","),
          retmode: "json",
        },
      }
    );

    const summaryData = summaryRes.data.result;

    // 3️⃣ FETCH ABSTRACTS (TEXT)
    const abstractsRes = await axios.get(
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi",
      {
        params: {
          db: "pubmed",
          id: ids.join(","),
          rettype: "abstract",
          retmode: "text",
        },
      }
    );

    const abstractList = abstractsRes.data.split(/\n\n+/);

    // 4️⃣ FETCH MESH (XML)
    const meshRes = await axios.get(
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi",
      {
        params: {
          db: "pubmed",
          id: ids.join(","),
          rettype: "full",
          retmode: "xml",
        },
      }
    );

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
    });

    const xmlData = parser.parse(meshRes.data);

    const articles = xmlData?.PubmedArticleSet?.PubmedArticle || [];

    const meshMap = {};

    articles.forEach((art) => {
      const pmid = art?.MedlineCitation?.PMID;
      const meshList =
        art?.MedlineCitation?.MeshHeadingList?.MeshHeading || [];

      meshMap[pmid] = meshList
        .map((m) => m?.DescriptorName)
        .filter(Boolean)
        .map((d) => d?.["#text"] || d) // clean format
        .slice(0, 4); // MAX 4
    });

    // 5️⃣ BUILD FINAL
    const final = ids.map((id, idx) => {
      const item = summaryData[id] || {};
      const authors = item?.authors || [];

      // Extract ORCIDs
      const orcids = authors
        .filter((a) => a?.identifier?.includes("ORCID"))
        .map((a) => ({
          name: a.name,
          orcid: a.identifier.replace("ORCID:", "").trim(),
        }));

      return {
        id,
        title: item.title || "",
        authors: authors.map((a) => a.name),
        pubDate: item.pubdate,
        journal: item.source,
        url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
        abstract: abstractList[idx] || "No abstract available",
        orcidAuthors: orcids,
        topics: meshMap[id] || [],
      };
    });

    // Pagination
    const totalCount = parseInt(searchRes.data.esearchresult.count || "0");
    const hasMore = totalCount > retstart + retmax;

    res.json({
      page: Number(page),
      results: final,
      hasMore,
      total: totalCount,
      nextPage: hasMore ? Number(page) + 1 : null,
      prevPage: page > 1 ? Number(page) - 1 : null,
    });
  } catch (err) {
    console.error("PubMed ERROR:", err);
    res.status(500).json({ error: "Server choked, dawg." });
  }
};
