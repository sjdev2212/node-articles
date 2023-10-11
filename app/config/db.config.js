module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "313131",
    DB: "articles",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  