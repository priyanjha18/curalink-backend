const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const MongoDbStore = require("connect-mongodb-session")(session);
const authRoutes = require("../backend/routes/auth");
const cors = require("cors");
const trialRoutes=require("./trial")
const publicationRoute=require("../backend/routes/pub")
const expertRoute=require("../backend/routes/experts")
const postRoute=require("./routes/post")
const app = express();

// --------------------------
//  MONGODB URI
// --------------------------
const MONGODB_URI =
  "mongodb+srv://priyan18:uW153jr24jFAJcwz@cluster0.j0yybjj.mongodb.net/curalink";

// --------------------------
//  SESSION STORE
// --------------------------
const store = new MongoDbStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

// --------------------------
//  CORS SETUP
// --------------------------
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,               // allow cookies
  })
);

// --------------------------
//  MIDDLEWARE
// --------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// --------------------------
//  EXPRESS SESSION SETUP
// --------------------------
const isProduction = process.env.NODE_ENV === "production";

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      httpOnly: true,
      secure: isProduction,        // true in prod, false in dev
      sameSite: isProduction ? "none" : "lax", // "none" + secure:true for prod
    },
  })
);

// --------------------------
//  ROUTES
// --------------------------
app.use(trialRoutes)
app.use("/user", authRoutes);
app.use(publicationRoute)
app.use(expertRoute)
app.use("/forum",postRoute)
const PORT = process.env.PORT || 3000;
//  MONGO CONNECTION
// --------------------------
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected.");
    app.listen(PORT, () => console.log(`server running on ${PORT}`));
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// --------------------------
//  ERROR HANDLING
// --------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});
