require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 8888,
  },
  db: {
   // url: process.env.DB_URL || "mongodb://localhost:27017/userDemoDB",
    url: "mongodb://localhost:27017/userDemoDB",
  },
};

module.exports = dev;