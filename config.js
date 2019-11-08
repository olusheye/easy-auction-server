const config = {
  environment: process.env.NODE_ENV || "dev",
  server: {
    port: process.env.PORT || 8080,
  },
  mongo: {
    url:
      process.env.MONGO_DB_URI ||
      "mongodb+srv://me:1%40Omoleye@cluster0-ueck4.azure.mongodb.net/ea_db?retryWrites=true&w=majority",
  },
};

module.exports = config;
//"mongodb+srv://me:1%40Omoleye@cluster0-ueck4.azure.mongodb.net/ea_db?retryWrites=true&w=majority",

//url: process.env.MONGO_DB_URI || 'mongodb://localhost/easy_auction_db'
