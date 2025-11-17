 const medicalExperts = [
  {
    "id": 1,
    "name": "Charlotte Sharma",
    "degree": "PhD",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Charlotte Sharma is an experienced Neurology specialist with over 27 years of clinical and research experience. Known for their work in Lupus, they have contributed extensively to global health advancements.",
    "specialties": [
      "Rheumatology",
      "Cardiology"
    ],
    "researchInterests": [
      "Immunotherapy",
      "Drug Development",
      "Medical Imaging"
    ],
    "location": "Paris, France"
  },
  {
    "id": 2,
    "name": "Alexander Taylor",
    "degree": "DO",
    "college": "Yale School of Medicine",
    "bio": "Dr. Alexander Taylor is an experienced Pediatrics specialist with over 28 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Gastroenterology",
      "Endocrinology"
    ],
    "researchInterests": [
      "Stem Cell Research",
      "Telemedicine",
      "Neuroscience"
    ],
    "location": "London, UK"
  },
  {
    "id": 3,
    "name": "Harper Patel",
    "degree": "MD-PhD",
    "college": "Cambridge University",
    "bio": "Dr. Harper Patel is an experienced Nephrology specialist with over 9 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Oncology"
    ],
    "researchInterests": [
      "Drug Development",
      "Immunotherapy",
      "Medical Imaging"
    ],
    "location": "Berlin, Germany"
  },
  {
    "id": 4,
    "name": "Ava Johnson",
    "degree": "DO",
    "college": "University of Toronto",
    "bio": "Dr. Ava Johnson is an experienced Immunology specialist with over 30 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Rheumatology",
      "Pulmonology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "AI in Healthcare",
      "Stem Cell Research"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 5,
    "name": "Elijah Smith",
    "degree": "MD",
    "college": "Yale School of Medicine",
    "bio": "Dr. Elijah Smith is an experienced Hematology specialist with over 10 years of clinical and research experience. Known for their work in Heart Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Oncology",
      "Gastroenterology"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Public Health",
      "Gene Therapy"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 6,
    "name": "Liam Scott",
    "degree": "DO",
    "college": "Oxford University",
    "bio": "Dr. Liam Scott is an experienced Cardiology specialist with over 25 years of clinical and research experience. Known for their work in Arthritis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Orthopedics",
      "Rheumatology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Neuroscience",
      "Public Health"
    ],
    "location": "New York, USA"
  },
  {
    "id": 7,
    "name": "Lucas Johnson",
    "degree": "MBBS",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Lucas Johnson is an experienced Rheumatology specialist with over 20 years of clinical and research experience. Known for their work in Alzheimer\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Dermatology",
      "Pediatrics"
    ],
    "researchInterests": [
      "Immunotherapy",
      "Molecular Biology",
      "Gene Therapy"
    ],
    "location": "Berlin, Germany"
  },
  {
    "id": 8,
    "name": "Liam Johnson",
    "degree": "DO",
    "college": "University of Toronto",
    "bio": "Dr. Liam Johnson is an experienced Endocrinology specialist with over 16 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Nephrology",
      "Cardiology"
    ],
    "researchInterests": [
      "Stem Cell Research",
      "Gene Therapy",
      "Cancer Genomics"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 9,
    "name": "Noah Thomas",
    "degree": "DO",
    "college": "Yale School of Medicine",
    "bio": "Dr. Noah Thomas is an experienced Endocrinology specialist with over 22 years of clinical and research experience. Known for their work in COVID-19, they have contributed extensively to global health advancements.",
    "specialties": [
      "Orthopedics",
      "Immunology"
    ],
    "researchInterests": [
      "Drug Development",
      "Cancer Genomics",
      "Clinical Trials"
    ],
    "location": "London, UK"
  },
  {
    "id": 10,
    "name": "Amelia Anderson",
    "degree": "DO",
    "college": "Johns Hopkins University",
    "bio": "Dr. Amelia Anderson is an experienced Endocrinology specialist with over 20 years of clinical and research experience. Known for their work in Parkinson\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Infectious Disease",
      "Dermatology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Stem Cell Research",
      "Public Health"
    ],
    "location": "Delhi, India"
  },
  {
    "id": 11,
    "name": "Noah Scott",
    "degree": "DO",
    "college": "Johns Hopkins University",
    "bio": "Dr. Noah Scott is an experienced Oncology specialist with over 11 years of clinical and research experience. Known for their work in Epilepsy, they have contributed extensively to global health advancements.",
    "specialties": [
      "Oncology",
      "Pediatrics"
    ],
    "researchInterests": [
      "Public Health",
      "AI in Healthcare",
      "Neuroscience"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 12,
    "name": "Ethan Sharma",
    "degree": "MD",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Ethan Sharma is an experienced Immunology specialist with over 29 years of clinical and research experience. Known for their work in Arthritis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Gastroenterology",
      "Neurology"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Gene Therapy",
      "Neuroscience"
    ],
    "location": "Berlin, Germany"
  },
  {
    "id": 13,
    "name": "Harper Anderson",
    "degree": "PhD",
    "college": "University of Toronto",
    "bio": "Dr. Harper Anderson is an experienced Gastroenterology specialist with over 26 years of clinical and research experience. Known for their work in Parkinson\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Psychiatry",
      "Pediatrics"
    ],
    "researchInterests": [
      "Public Health",
      "Molecular Biology",
      "Drug Development"
    ],
    "location": "New York, USA"
  },
  {
    "id": 14,
    "name": "Mia Scott",
    "degree": "PhD",
    "college": "University of Toronto",
    "bio": "Dr. Mia Scott is an experienced Infectious Disease specialist with over 15 years of clinical and research experience. Known for their work in Epilepsy, they have contributed extensively to global health advancements.",
    "specialties": [
      "Orthopedics",
      "Neurology"
    ],
    "researchInterests": [
      "Drug Development",
      "Telemedicine",
      "Medical Imaging"
    ],
    "location": "Paris, France"
  },
  {
    "id": 15,
    "name": "Henry Taylor",
    "degree": "DO",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Henry Taylor is an experienced Hematology specialist with over 23 years of clinical and research experience. Known for their work in Lymphoma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Rheumatology",
      "Pediatrics"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Neuroscience",
      "Telemedicine"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 16,
    "name": "Elijah Wright",
    "degree": "PhD",
    "college": "AIIMS Delhi",
    "bio": "Dr. Elijah Wright is an experienced Dermatology specialist with over 17 years of clinical and research experience. Known for their work in COVID-19, they have contributed extensively to global health advancements.",
    "specialties": [
      "Endocrinology",
      "Gastroenterology"
    ],
    "researchInterests": [
      "Immunotherapy",
      "Molecular Biology",
      "Drug Development"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 17,
    "name": "Charlotte Scott",
    "degree": "MD-PhD",
    "college": "AIIMS Delhi",
    "bio": "Dr. Charlotte Scott is an experienced Immunology specialist with over 14 years of clinical and research experience. Known for their work in Cancer, they have contributed extensively to global health advancements.",
    "specialties": [
      "Pulmonology",
      "Psychiatry"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Drug Development",
      "Neuroscience"
    ],
    "location": "Chicago, USA"
  },
  {
    "id": 18,
    "name": "Ethan Singh",
    "degree": "DO",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Ethan Singh is an experienced Pediatrics specialist with over 11 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Cardiology",
      "Dermatology"
    ],
    "researchInterests": [
      "Telemedicine",
      "Medical Imaging",
      "Gene Therapy"
    ],
    "location": "Berlin, Germany"
  },
  {
    "id": 19,
    "name": "Alexander King",
    "degree": "MD-PhD",
    "college": "Yale School of Medicine",
    "bio": "Dr. Alexander King is an experienced Endocrinology specialist with over 10 years of clinical and research experience. Known for their work in Leukemia, they have contributed extensively to global health advancements.",
    "specialties": [
      "Neurology",
      "Endocrinology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "AI in Healthcare",
      "Public Health"
    ],
    "location": "Paris, France"
  },
  {
    "id": 20,
    "name": "Benjamin Smith",
    "degree": "MBBS",
    "college": "Stanford University",
    "bio": "Dr. Benjamin Smith is an experienced Rheumatology specialist with over 21 years of clinical and research experience. Known for their work in Cancer, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Nephrology"
    ],
    "researchInterests": [
      "Cancer Genomics",
      "Molecular Biology",
      "Stem Cell Research"
    ],
    "location": "London, UK"
  },
  {
    "id": 21,
    "name": "Mason Brown",
    "degree": "MD-PhD",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Mason Brown is an experienced Hematology specialist with over 16 years of clinical and research experience. Known for their work in Cancer, they have contributed extensively to global health advancements.",
    "specialties": [
      "Orthopedics",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Immunotherapy",
      "Cancer Genomics",
      "Neuroscience"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 22,
    "name": "Mia Khan",
    "degree": "MD",
    "college": "University of Toronto",
    "bio": "Dr. Mia Khan is an experienced Pediatrics specialist with over 25 years of clinical and research experience. Known for their work in Multiple Sclerosis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Pediatrics",
      "Immunology"
    ],
    "researchInterests": [
      "Cancer Genomics",
      "Neuroscience",
      "Clinical Trials"
    ],
    "location": "Chicago, USA"
  },
  {
    "id": 23,
    "name": "Amelia Singh",
    "degree": "PhD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Amelia Singh is an experienced Rheumatology specialist with over 10 years of clinical and research experience. Known for their work in COVID-19, they have contributed extensively to global health advancements.",
    "specialties": [
      "Neurology",
      "Nephrology"
    ],
    "researchInterests": [
      "Telemedicine",
      "Public Health",
      "Molecular Biology"
    ],
    "location": "Paris, France"
  },
  {
    "id": 24,
    "name": "Olivia Scott",
    "degree": "MD",
    "college": "Cambridge University",
    "bio": "Dr. Olivia Scott is an experienced Gastroenterology specialist with over 13 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Dermatology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "AI in Healthcare",
      "Medical Imaging"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 25,
    "name": "Henry Walker",
    "degree": "MD",
    "college": "University of Toronto",
    "bio": "Dr. Henry Walker is an experienced Pulmonology specialist with over 13 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Oncology",
      "Nephrology"
    ],
    "researchInterests": [
      "Drug Development",
      "Stem Cell Research",
      "Telemedicine"
    ],
    "location": "Berlin, Germany"
  },
  {
    "id": 26,
    "name": "Harper Thomas",
    "degree": "DO",
    "college": "Cambridge University",
    "bio": "Dr. Harper Thomas is an experienced Immunology specialist with over 11 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Dermatology",
      "Hematology"
    ],
    "researchInterests": [
      "Molecular Biology",
      "Stem Cell Research",
      "Medical Imaging"
    ],
    "location": "London, UK"
  },
  {
    "id": 27,
    "name": "Liam Khan",
    "degree": "PhD",
    "college": "AIIMS Delhi",
    "bio": "Dr. Liam Khan is an experienced Pediatrics specialist with over 11 years of clinical and research experience. Known for their work in Lymphoma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Hematology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Stem Cell Research",
      "Medical Imaging",
      "Drug Development"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 28,
    "name": "Aarav Thomas",
    "degree": "MD-PhD",
    "college": "AIIMS Delhi",
    "bio": "Dr. Aarav Thomas is an experienced Pediatrics specialist with over 16 years of clinical and research experience. Known for their work in Heart Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Psychiatry",
      "Rheumatology"
    ],
    "researchInterests": [
      "Telemedicine",
      "AI in Healthcare",
      "Stem Cell Research"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 29,
    "name": "Abigail Sharma",
    "degree": "MD",
    "college": "University of Toronto",
    "bio": "Dr. Abigail Sharma is an experienced Immunology specialist with over 19 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Cardiology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Immunotherapy",
      "Stem Cell Research",
      "Public Health"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 30,
    "name": "Lucas Anderson",
    "degree": "MD-PhD",
    "college": "Harvard Medical School",
    "bio": "Dr. Lucas Anderson is an experienced Gastroenterology specialist with over 19 years of clinical and research experience. Known for their work in Multiple Sclerosis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Pulmonology"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Drug Development",
      "Public Health"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 31,
    "name": "Mia Wright",
    "degree": "PhD",
    "college": "Harvard Medical School",
    "bio": "Dr. Mia Wright is an experienced Dermatology specialist with over 13 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Nephrology",
      "Endocrinology"
    ],
    "researchInterests": [
      "Telemedicine",
      "Neuroscience",
      "Cancer Genomics"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 32,
    "name": "Mia Thomas",
    "degree": "PhD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Mia Thomas is an experienced Pulmonology specialist with over 29 years of clinical and research experience. Known for their work in Multiple Sclerosis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Nephrology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Medical Imaging",
      "AI in Healthcare"
    ],
    "location": "London, UK"
  },
  {
    "id": 33,
    "name": "Elijah Garcia",
    "degree": "MBBS",
    "college": "University of Toronto",
    "bio": "Dr. Elijah Garcia is an experienced Gastroenterology specialist with over 14 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Psychiatry",
      "Neurology"
    ],
    "researchInterests": [
      "Stem Cell Research",
      "Cancer Genomics",
      "Molecular Biology"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 34,
    "name": "Liam Martinez",
    "degree": "MD",
    "college": "AIIMS Delhi",
    "bio": "Dr. Liam Martinez is an experienced Nephrology specialist with over 9 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Hematology",
      "Oncology"
    ],
    "researchInterests": [
      "Neuroscience",
      "Medical Imaging",
      "Telemedicine"
    ],
    "location": "Paris, France"
  },
  {
    "id": 35,
    "name": "Amelia Singh",
    "degree": "MBBS",
    "college": "Stanford University",
    "bio": "Dr. Amelia Singh is an experienced Rheumatology specialist with over 9 years of clinical and research experience. Known for their work in COVID-19, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Hematology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Immunotherapy",
      "Neuroscience"
    ],
    "location": "Paris, France"
  },
  {
    "id": 36,
    "name": "Evelyn King",
    "degree": "MD",
    "college": "Johns Hopkins University",
    "bio": "Dr. Evelyn King is an experienced Hematology specialist with over 19 years of clinical and research experience. Known for their work in Lupus, they have contributed extensively to global health advancements.",
    "specialties": [
      "Rheumatology",
      "Endocrinology"
    ],
    "researchInterests": [
      "Public Health",
      "Immunotherapy",
      "Medical Imaging"
    ],
    "location": "New York, USA"
  },
  {
    "id": 37,
    "name": "Ava Brown",
    "degree": "MD-PhD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Ava Brown is an experienced Endocrinology specialist with over 20 years of clinical and research experience. Known for their work in Parkinson\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Oncology",
      "Pediatrics"
    ],
    "researchInterests": [
      "Cancer Genomics",
      "Clinical Trials",
      "Public Health"
    ],
    "location": "New York, USA"
  },
  {
    "id": 38,
    "name": "Liam Taylor",
    "degree": "MBBS",
    "college": "Oxford University",
    "bio": "Dr. Liam Taylor is an experienced Cardiology specialist with over 30 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Oncology",
      "Immunology"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Clinical Trials",
      "Drug Development"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 39,
    "name": "Mason Sharma",
    "degree": "MD-PhD",
    "college": "AIIMS Delhi",
    "bio": "Dr. Mason Sharma is an experienced Hematology specialist with over 9 years of clinical and research experience. Known for their work in Heart Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Oncology"
    ],
    "researchInterests": [
      "Drug Development",
      "Immunotherapy",
      "Gene Therapy"
    ],
    "location": "London, UK"
  },
  {
    "id": 40,
    "name": "Alexander Thomas",
    "degree": "PhD",
    "college": "AIIMS Delhi",
    "bio": "Dr. Alexander Thomas is an experienced Endocrinology specialist with over 19 years of clinical and research experience. Known for their work in Alzheimer\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Pulmonology",
      "Neurology"
    ],
    "researchInterests": [
      "Public Health",
      "Immunotherapy",
      "AI in Healthcare"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 41,
    "name": "Olivia Young",
    "degree": "MD-PhD",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Olivia Young is an experienced Hematology specialist with over 26 years of clinical and research experience. Known for their work in Parkinson\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Orthopedics",
      "Gastroenterology"
    ],
    "researchInterests": [
      "Stem Cell Research",
      "Telemedicine",
      "Molecular Biology"
    ],
    "location": "London, UK"
  },
  {
    "id": 42,
    "name": "Abigail Young",
    "degree": "MD-PhD",
    "college": "University of Toronto",
    "bio": "Dr. Abigail Young is an experienced Hematology specialist with over 9 years of clinical and research experience. Known for their work in Parkinson\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Psychiatry",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Drug Development",
      "Telemedicine"
    ],
    "location": "Delhi, India"
  },
  {
    "id": 43,
    "name": "Olivia Scott",
    "degree": "DO",
    "college": "Harvard Medical School",
    "bio": "Dr. Olivia Scott is an experienced Rheumatology specialist with over 19 years of clinical and research experience. Known for their work in Leukemia, they have contributed extensively to global health advancements.",
    "specialties": [
      "Orthopedics",
      "Rheumatology"
    ],
    "researchInterests": [
      "Neuroscience",
      "AI in Healthcare",
      "Clinical Trials"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 44,
    "name": "Olivia Brown",
    "degree": "PhD",
    "college": "Oxford University",
    "bio": "Dr. Olivia Brown is an experienced Orthopedics specialist with over 27 years of clinical and research experience. Known for their work in Multiple Sclerosis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Oncology",
      "Nephrology"
    ],
    "researchInterests": [
      "Molecular Biology",
      "Clinical Trials",
      "Stem Cell Research"
    ],
    "location": "Sydney, Australia"
  },
  {
    "id": 45,
    "name": "Henry Khan",
    "degree": "DO",
    "college": "Johns Hopkins University",
    "bio": "Dr. Henry Khan is an experienced Nephrology specialist with over 10 years of clinical and research experience. Known for their work in Arthritis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Psychiatry",
      "Rheumatology"
    ],
    "researchInterests": [
      "Telemedicine",
      "Drug Development",
      "Neuroscience"
    ],
    "location": "London, UK"
  },
  {
    "id": 46,
    "name": "Benjamin Wright",
    "degree": "MD-PhD",
    "college": "University of Toronto",
    "bio": "Dr. Benjamin Wright is an experienced Endocrinology specialist with over 16 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Orthopedics",
      "Hematology"
    ],
    "researchInterests": [
      "Medical Imaging",
      "Public Health",
      "Gene Therapy"
    ],
    "location": "Paris, France"
  },
  {
    "id": 47,
    "name": "Elijah Smith",
    "degree": "MD",
    "college": "Harvard Medical School",
    "bio": "Dr. Elijah Smith is an experienced Pediatrics specialist with over 12 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Infectious Disease",
      "Dermatology"
    ],
    "researchInterests": [
      "Telemedicine",
      "Public Health",
      "Clinical Trials"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 48,
    "name": "Liam Allen",
    "degree": "DO",
    "college": "Stanford University",
    "bio": "Dr. Liam Allen is an experienced Dermatology specialist with over 15 years of clinical and research experience. Known for their work in Epilepsy, they have contributed extensively to global health advancements.",
    "specialties": [
      "Endocrinology",
      "Nephrology"
    ],
    "researchInterests": [
      "Public Health",
      "Telemedicine",
      "Immunotherapy"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 49,
    "name": "Amelia Lee",
    "degree": "MBBS",
    "college": "Stanford University",
    "bio": "Dr. Amelia Lee is an experienced Psychiatry specialist with over 11 years of clinical and research experience. Known for their work in COVID-19, they have contributed extensively to global health advancements.",
    "specialties": [
      "Psychiatry",
      "Cardiology"
    ],
    "researchInterests": [
      "Telemedicine",
      "Neuroscience",
      "Cancer Genomics"
    ],
    "location": "New York, USA"
  },
  {
    "id": 50,
    "name": "Mason Lee",
    "degree": "MD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Mason Lee is an experienced Gastroenterology specialist with over 16 years of clinical and research experience. Known for their work in Lupus, they have contributed extensively to global health advancements.",
    "specialties": [
      "Nephrology",
      "Orthopedics"
    ],
    "researchInterests": [
      "Telemedicine",
      "Public Health",
      "Clinical Trials"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 51,
    "name": "Evelyn Khan",
    "degree": "PhD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Evelyn Khan is an experienced Gastroenterology specialist with over 26 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Endocrinology",
      "Rheumatology"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Clinical Trials",
      "Stem Cell Research"
    ],
    "location": "New York, USA"
  },
  {
    "id": 52,
    "name": "Isabella Thomas",
    "degree": "PhD",
    "college": "University of Toronto",
    "bio": "Dr. Isabella Thomas is an experienced Endocrinology specialist with over 27 years of clinical and research experience. Known for their work in Alzheimer\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Nephrology",
      "Neurology"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Gene Therapy",
      "Cancer Genomics"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 53,
    "name": "Amelia Singh",
    "degree": "PhD",
    "college": "Oxford University",
    "bio": "Dr. Amelia Singh is an experienced Hematology specialist with over 23 years of clinical and research experience. Known for their work in Epilepsy, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Hematology"
    ],
    "researchInterests": [
      "Public Health",
      "Clinical Trials",
      "Gene Therapy"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 54,
    "name": "Henry Wright",
    "degree": "DO",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Henry Wright is an experienced Nephrology specialist with over 24 years of clinical and research experience. Known for their work in Lymphoma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Oncology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Drug Development",
      "Cancer Genomics",
      "Telemedicine"
    ],
    "location": "Chicago, USA"
  },
  {
    "id": 55,
    "name": "Olivia Scott",
    "degree": "MBBS",
    "college": "Oxford University",
    "bio": "Dr. Olivia Scott is an experienced Orthopedics specialist with over 13 years of clinical and research experience. Known for their work in Epilepsy, they have contributed extensively to global health advancements.",
    "specialties": [
      "Pediatrics",
      "Hematology"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Telemedicine",
      "Cancer Genomics"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 56,
    "name": "Isabella Smith",
    "degree": "MD-PhD",
    "college": "AIIMS Delhi",
    "bio": "Dr. Isabella Smith is an experienced Nephrology specialist with over 21 years of clinical and research experience. Known for their work in Asthma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Cardiology",
      "Immunology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Stem Cell Research",
      "Molecular Biology"
    ],
    "location": "Delhi, India"
  },
  {
    "id": 57,
    "name": "Benjamin Thomas",
    "degree": "MD",
    "college": "Yale School of Medicine",
    "bio": "Dr. Benjamin Thomas is an experienced Gastroenterology specialist with over 21 years of clinical and research experience. Known for their work in HIV, they have contributed extensively to global health advancements.",
    "specialties": [
      "Nephrology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Telemedicine",
      "Drug Development",
      "Molecular Biology"
    ],
    "location": "Chicago, USA"
  },
  {
    "id": 58,
    "name": "Evelyn Lopez",
    "degree": "MBBS",
    "college": "Cambridge University",
    "bio": "Dr. Evelyn Lopez is an experienced Rheumatology specialist with over 17 years of clinical and research experience. Known for their work in COVID-19, they have contributed extensively to global health advancements.",
    "specialties": [
      "Dermatology",
      "Hematology"
    ],
    "researchInterests": [
      "Molecular Biology",
      "Cancer Genomics",
      "Immunotherapy"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 59,
    "name": "Ava Young",
    "degree": "MBBS",
    "college": "Harvard Medical School",
    "bio": "Dr. Ava Young is an experienced Neurology specialist with over 23 years of clinical and research experience. Known for their work in COVID-19, they have contributed extensively to global health advancements.",
    "specialties": [
      "Pulmonology",
      "Immunology"
    ],
    "researchInterests": [
      "Drug Development",
      "Gene Therapy",
      "AI in Healthcare"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 60,
    "name": "Charlotte Allen",
    "degree": "MD",
    "college": "Harvard Medical School",
    "bio": "Dr. Charlotte Allen is an experienced Nephrology specialist with over 16 years of clinical and research experience. Known for their work in HIV, they have contributed extensively to global health advancements.",
    "specialties": [
      "Dermatology",
      "Pediatrics"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Telemedicine",
      "Neuroscience"
    ],
    "location": "New York, USA"
  },
  {
    "id": 61,
    "name": "Mia Brown",
    "degree": "PhD",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Mia Brown is an experienced Orthopedics specialist with over 30 years of clinical and research experience. Known for their work in Multiple Sclerosis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Rheumatology"
    ],
    "researchInterests": [
      "Stem Cell Research",
      "Telemedicine",
      "Neuroscience"
    ],
    "location": "Delhi, India"
  },
  {
    "id": 62,
    "name": "Harper Thomas",
    "degree": "PhD",
    "college": "Cambridge University",
    "bio": "Dr. Harper Thomas is an experienced Orthopedics specialist with over 22 years of clinical and research experience. Known for their work in Multiple Sclerosis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Gastroenterology",
      "Rheumatology"
    ],
    "researchInterests": [
      "Gene Therapy",
      "Neuroscience",
      "Immunotherapy"
    ],
    "location": "Paris, France"
  },
  {
    "id": 63,
    "name": "Benjamin Singh",
    "degree": "MD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Benjamin Singh is an experienced Orthopedics specialist with over 21 years of clinical and research experience. Known for their work in Leukemia, they have contributed extensively to global health advancements.",
    "specialties": [
      "Neurology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Gene Therapy",
      "Stem Cell Research",
      "Public Health"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 64,
    "name": "Charlotte Garcia",
    "degree": "MD",
    "college": "University of Toronto",
    "bio": "Dr. Charlotte Garcia is an experienced Oncology specialist with over 18 years of clinical and research experience. Known for their work in Lupus, they have contributed extensively to global health advancements.",
    "specialties": [
      "Oncology",
      "Gastroenterology"
    ],
    "researchInterests": [
      "Immunotherapy",
      "Drug Development",
      "Molecular Biology"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 65,
    "name": "Olivia Smith",
    "degree": "PhD",
    "college": "University of Toronto",
    "bio": "Dr. Olivia Smith is an experienced Neurology specialist with over 20 years of clinical and research experience. Known for their work in Cancer, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Nephrology"
    ],
    "researchInterests": [
      "Molecular Biology",
      "Neuroscience",
      "Medical Imaging"
    ],
    "location": "Chicago, USA"
  },
  {
    "id": 66,
    "name": "Elijah Wright",
    "degree": "MBBS",
    "college": "AIIMS Delhi",
    "bio": "Dr. Elijah Wright is an experienced Pediatrics specialist with over 23 years of clinical and research experience. Known for their work in Lymphoma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Pediatrics",
      "Gastroenterology"
    ],
    "researchInterests": [
      "Drug Development",
      "Molecular Biology",
      "Clinical Trials"
    ],
    "location": "Delhi, India"
  },
  {
    "id": 67,
    "name": "Isabella Brown",
    "degree": "MBBS",
    "college": "Cambridge University",
    "bio": "Dr. Isabella Brown is an experienced Pulmonology specialist with over 20 years of clinical and research experience. Known for their work in Lupus, they have contributed extensively to global health advancements.",
    "specialties": [
      "Dermatology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Public Health",
      "Gene Therapy",
      "Clinical Trials"
    ],
    "location": "Chicago, USA"
  },
  {
    "id": 68,
    "name": "Isabella Patel",
    "degree": "DO",
    "college": "AIIMS Delhi",
    "bio": "Dr. Isabella Patel is an experienced Gastroenterology specialist with over 20 years of clinical and research experience. Known for their work in HIV, they have contributed extensively to global health advancements.",
    "specialties": [
      "Dermatology",
      "Psychiatry"
    ],
    "researchInterests": [
      "Stem Cell Research",
      "Telemedicine",
      "Neuroscience"
    ],
    "location": "Sydney, Australia"
  },
  {
    "id": 69,
    "name": "Ava Lopez",
    "degree": "MBBS",
    "college": "Stanford University",
    "bio": "Dr. Ava Lopez is an experienced Rheumatology specialist with over 15 years of clinical and research experience. Known for their work in Arthritis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Hematology",
      "Gastroenterology"
    ],
    "researchInterests": [
      "Gene Therapy",
      "Clinical Trials",
      "Neuroscience"
    ],
    "location": "London, UK"
  },
  {
    "id": 70,
    "name": "Abigail King",
    "degree": "MBBS",
    "college": "Oxford University",
    "bio": "Dr. Abigail King is an experienced Hematology specialist with over 11 years of clinical and research experience. Known for their work in Cancer, they have contributed extensively to global health advancements.",
    "specialties": [
      "Gastroenterology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Stem Cell Research",
      "Molecular Biology",
      "Public Health"
    ],
    "location": "New York, USA"
  },
  {
    "id": 71,
    "name": "Ethan King",
    "degree": "MBBS",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Ethan King is an experienced Hematology specialist with over 12 years of clinical and research experience. Known for their work in Lymphoma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Cardiology",
      "Dermatology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Medical Imaging",
      "Public Health"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 72,
    "name": "Benjamin Allen",
    "degree": "PhD",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Benjamin Allen is an experienced Endocrinology specialist with over 30 years of clinical and research experience. Known for their work in Leukemia, they have contributed extensively to global health advancements.",
    "specialties": [
      "Dermatology",
      "Orthopedics"
    ],
    "researchInterests": [
      "Immunotherapy",
      "Stem Cell Research",
      "Molecular Biology"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 73,
    "name": "Sophia Young",
    "degree": "MD-PhD",
    "college": "Oxford University",
    "bio": "Dr. Sophia Young is an experienced Hematology specialist with over 26 years of clinical and research experience. Known for their work in Leukemia, they have contributed extensively to global health advancements.",
    "specialties": [
      "Cardiology",
      "Nephrology"
    ],
    "researchInterests": [
      "Cancer Genomics",
      "Stem Cell Research",
      "Telemedicine"
    ],
    "location": "London, UK"
  },
  {
    "id": 74,
    "name": "Amelia Taylor",
    "degree": "PhD",
    "college": "Yale School of Medicine",
    "bio": "Dr. Amelia Taylor is an experienced Oncology specialist with over 16 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Hematology",
      "Nephrology"
    ],
    "researchInterests": [
      "Telemedicine",
      "Neuroscience",
      "Gene Therapy"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 75,
    "name": "Harper Anderson",
    "degree": "MD-PhD",
    "college": "Cambridge University",
    "bio": "Dr. Harper Anderson is an experienced Rheumatology specialist with over 27 years of clinical and research experience. Known for their work in Alzheimer\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Dermatology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Immunotherapy",
      "Neuroscience"
    ],
    "location": "Berlin, Germany"
  },
  {
    "id": 76,
    "name": "Mason Young",
    "degree": "MBBS",
    "college": "Oxford University",
    "bio": "Dr. Mason Young is an experienced Infectious Disease specialist with over 25 years of clinical and research experience. Known for their work in Epilepsy, they have contributed extensively to global health advancements.",
    "specialties": [
      "Nephrology",
      "Oncology"
    ],
    "researchInterests": [
      "Stem Cell Research",
      "Drug Development",
      "Immunotherapy"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 77,
    "name": "Ethan Smith",
    "degree": "MD",
    "college": "Harvard Medical School",
    "bio": "Dr. Ethan Smith is an experienced Endocrinology specialist with over 22 years of clinical and research experience. Known for their work in Lupus, they have contributed extensively to global health advancements.",
    "specialties": [
      "Pediatrics",
      "Orthopedics"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Clinical Trials",
      "Medical Imaging"
    ],
    "location": "New York, USA"
  },
  {
    "id": 78,
    "name": "Harper Sharma",
    "degree": "MBBS",
    "college": "Harvard Medical School",
    "bio": "Dr. Harper Sharma is an experienced Immunology specialist with over 19 years of clinical and research experience. Known for their work in Leukemia, they have contributed extensively to global health advancements.",
    "specialties": [
      "Nephrology",
      "Cardiology"
    ],
    "researchInterests": [
      "Drug Development",
      "Gene Therapy",
      "AI in Healthcare"
    ],
    "location": "Sydney, Australia"
  },
  {
    "id": 79,
    "name": "Elijah Walker",
    "degree": "MD-PhD",
    "college": "Stanford University",
    "bio": "Dr. Elijah Walker is an experienced Infectious Disease specialist with over 30 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Pediatrics",
      "Pulmonology"
    ],
    "researchInterests": [
      "Neuroscience",
      "Cancer Genomics",
      "Molecular Biology"
    ],
    "location": "Berlin, Germany"
  },
  {
    "id": 80,
    "name": "Liam King",
    "degree": "PhD",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Liam King is an experienced Dermatology specialist with over 14 years of clinical and research experience. Known for their work in Stroke, they have contributed extensively to global health advancements.",
    "specialties": [
      "Hematology",
      "Psychiatry"
    ],
    "researchInterests": [
      "Drug Development",
      "Immunotherapy",
      "Gene Therapy"
    ],
    "location": "Delhi, India"
  },
  {
    "id": 81,
    "name": "Benjamin Thomas",
    "degree": "MD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Benjamin Thomas is an experienced Rheumatology specialist with over 20 years of clinical and research experience. Known for their work in Lymphoma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Psychiatry",
      "Pulmonology"
    ],
    "researchInterests": [
      "Immunotherapy",
      "Medical Imaging",
      "Public Health"
    ],
    "location": "London, UK"
  },
  {
    "id": 82,
    "name": "Elijah Scott",
    "degree": "MD",
    "college": "Yale School of Medicine",
    "bio": "Dr. Elijah Scott is an experienced Oncology specialist with over 17 years of clinical and research experience. Known for their work in Multiple Sclerosis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Endocrinology",
      "Hematology"
    ],
    "researchInterests": [
      "Molecular Biology",
      "Gene Therapy",
      "Cancer Genomics"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 83,
    "name": "Alexander King",
    "degree": "PhD",
    "college": "University of Toronto",
    "bio": "Dr. Alexander King is an experienced Nephrology specialist with over 9 years of clinical and research experience. Known for their work in Stroke, they have contributed extensively to global health advancements.",
    "specialties": [
      "Nephrology",
      "Neurology"
    ],
    "researchInterests": [
      "Telemedicine",
      "Cancer Genomics",
      "Immunotherapy"
    ],
    "location": "Sydney, Australia"
  },
  {
    "id": 84,
    "name": "Mia King",
    "degree": "MD",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Mia King is an experienced Orthopedics specialist with over 18 years of clinical and research experience. Known for their work in HIV, they have contributed extensively to global health advancements.",
    "specialties": [
      "Infectious Disease",
      "Psychiatry"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Stem Cell Research",
      "Medical Imaging"
    ],
    "location": "Berlin, Germany"
  },
  {
    "id": 85,
    "name": "Alexander Patel",
    "degree": "MD-PhD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Alexander Patel is an experienced Gastroenterology specialist with over 20 years of clinical and research experience. Known for their work in COVID-19, they have contributed extensively to global health advancements.",
    "specialties": [
      "Endocrinology",
      "Cardiology"
    ],
    "researchInterests": [
      "Telemedicine",
      "Cancer Genomics",
      "Immunotherapy"
    ],
    "location": "London, UK"
  },
  {
    "id": 86,
    "name": "Evelyn Taylor",
    "degree": "DO",
    "college": "Yale School of Medicine",
    "bio": "Dr. Evelyn Taylor is an experienced Psychiatry specialist with over 11 years of clinical and research experience. Known for their work in Arthritis, they have contributed extensively to global health advancements.",
    "specialties": [
      "Hematology",
      "Pediatrics"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Immunotherapy",
      "Stem Cell Research"
    ],
    "location": "Paris, France"
  },
  {
    "id": 87,
    "name": "Abigail Martinez",
    "degree": "DO",
    "college": "Cambridge University",
    "bio": "Dr. Abigail Martinez is an experienced Oncology specialist with over 19 years of clinical and research experience. Known for their work in Parkinson\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Clinical Trials",
      "Cancer Genomics"
    ],
    "location": "New York, USA"
  },
  {
    "id": 88,
    "name": "Benjamin Patel",
    "degree": "MD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Benjamin Patel is an experienced Psychiatry specialist with over 28 years of clinical and research experience. Known for their work in HIV, they have contributed extensively to global health advancements.",
    "specialties": [
      "Rheumatology",
      "Pediatrics"
    ],
    "researchInterests": [
      "Medical Imaging",
      "Drug Development",
      "Neuroscience"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 89,
    "name": "Isabella Martinez",
    "degree": "MBBS",
    "college": "Johns Hopkins University",
    "bio": "Dr. Isabella Martinez is an experienced Immunology specialist with over 25 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Cardiology",
      "Immunology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Neuroscience",
      "Stem Cell Research"
    ],
    "location": "Tokyo, Japan"
  },
  {
    "id": 90,
    "name": "Sophia Taylor",
    "degree": "MBBS",
    "college": "Cambridge University",
    "bio": "Dr. Sophia Taylor is an experienced Cardiology specialist with over 30 years of clinical and research experience. Known for their work in HIV, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Dermatology"
    ],
    "researchInterests": [
      "Public Health",
      "Stem Cell Research",
      "Gene Therapy"
    ],
    "location": "London, UK"
  },
  {
    "id": 91,
    "name": "Alexander Garcia",
    "degree": "DO",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Alexander Garcia is an experienced Hematology specialist with over 19 years of clinical and research experience. Known for their work in Alzheimer\u2019s Disease, they have contributed extensively to global health advancements.",
    "specialties": [
      "Gastroenterology",
      "Pulmonology"
    ],
    "researchInterests": [
      "Cancer Genomics",
      "Telemedicine",
      "Stem Cell Research"
    ],
    "location": "Mumbai, India"
  },
  {
    "id": 92,
    "name": "Isabella Thomas",
    "degree": "DO",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Isabella Thomas is an experienced Endocrinology specialist with over 24 years of clinical and research experience. Known for their work in Lymphoma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Pulmonology",
      "Psychiatry"
    ],
    "researchInterests": [
      "Drug Development",
      "Stem Cell Research",
      "Clinical Trials"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 93,
    "name": "Ethan Johnson",
    "degree": "MD",
    "college": "UCLA David Geffen School of Medicine",
    "bio": "Dr. Ethan Johnson is an experienced Nephrology specialist with over 16 years of clinical and research experience. Known for their work in Leukemia, they have contributed extensively to global health advancements.",
    "specialties": [
      "Psychiatry",
      "Endocrinology"
    ],
    "researchInterests": [
      "Drug Development",
      "Neuroscience",
      "Molecular Biology"
    ],
    "location": "New York, USA"
  },
  {
    "id": 94,
    "name": "Alexander Brown",
    "degree": "MD-PhD",
    "college": "Harvard Medical School",
    "bio": "Dr. Alexander Brown is an experienced Rheumatology specialist with over 25 years of clinical and research experience. Known for their work in Epilepsy, they have contributed extensively to global health advancements.",
    "specialties": [
      "Endocrinology",
      "Dermatology"
    ],
    "researchInterests": [
      "Molecular Biology",
      "Clinical Trials",
      "Immunotherapy"
    ],
    "location": "Toronto, Canada"
  },
  {
    "id": 95,
    "name": "Lucas Smith",
    "degree": "MBBS",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Lucas Smith is an experienced Rheumatology specialist with over 18 years of clinical and research experience. Known for their work in Stroke, they have contributed extensively to global health advancements.",
    "specialties": [
      "Endocrinology",
      "Nephrology"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Immunotherapy",
      "Telemedicine"
    ],
    "location": "Sydney, Australia"
  },
  {
    "id": 96,
    "name": "Liam Lopez",
    "degree": "MD",
    "college": "Oxford University",
    "bio": "Dr. Liam Lopez is an experienced Pediatrics specialist with over 19 years of clinical and research experience. Known for their work in Stroke, they have contributed extensively to global health advancements.",
    "specialties": [
      "Immunology",
      "Gastroenterology"
    ],
    "researchInterests": [
      "AI in Healthcare",
      "Drug Development",
      "Clinical Trials"
    ],
    "location": "Sydney, Australia"
  },
  {
    "id": 97,
    "name": "Alexander Young",
    "degree": "PhD",
    "college": "Stanford University",
    "bio": "Dr. Alexander Young is an experienced Dermatology specialist with over 18 years of clinical and research experience. Known for their work in Lymphoma, they have contributed extensively to global health advancements.",
    "specialties": [
      "Endocrinology",
      "Pulmonology"
    ],
    "researchInterests": [
      "Clinical Trials",
      "Molecular Biology",
      "Drug Development"
    ],
    "location": "Sydney, Australia"
  },
  {
    "id": 98,
    "name": "Benjamin Scott",
    "degree": "PhD",
    "college": "Johns Hopkins University",
    "bio": "Dr. Benjamin Scott is an experienced Hematology specialist with over 24 years of clinical and research experience. Known for their work in Diabetes, they have contributed extensively to global health advancements.",
    "specialties": [
      "Cardiology",
      "Dermatology"
    ],
    "researchInterests": [
      "Immunotherapy",
      "Telemedicine",
      "AI in Healthcare"
    ],
    "location": "Sydney, Australia"
  },
  {
    "id": 99,
    "name": "Lucas Allen",
    "degree": "PhD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Lucas Allen is an experienced Nephrology specialist with over 30 years of clinical and research experience. Known for their work in Stroke, they have contributed extensively to global health advancements.",
    "specialties": [
      "Rheumatology",
      "Orthopedics"
    ],
    "researchInterests": [
      "Public Health",
      "Clinical Trials",
      "Medical Imaging"
    ],
    "location": "Paris, France"
  },
  {
    "id": 100,
    "name": "Evelyn Khan",
    "degree": "MD-PhD",
    "college": "Mayo Clinic Alix School of Medicine",
    "bio": "Dr. Evelyn Khan is an experienced Oncology specialist with over 18 years of clinical and research experience. Known for their work in Lupus, they have contributed extensively to global health advancements.",
    "specialties": [
      "Hematology",
      "Infectious Disease"
    ],
    "researchInterests": [
      "Drug Development",
      "Medical Imaging",
      "Public Health"
    ],
    "location": "London, UK"
  }
]
module.exports = medicalExperts;