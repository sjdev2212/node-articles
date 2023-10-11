module.exports = {
    HOST: "postgres://ezplzmns:BLIiKufL3a4Pd-XJ08IYnQTrYNLslWkB@peanut.db.elephantsql.com/ezplzmns",
    USER: "ezplzmns ",
    PASSWORD: "BLIiKufL3a4Pd-XJ08IYnQTrYNLslWkB",
    DB: "articles",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  