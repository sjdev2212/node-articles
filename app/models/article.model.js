module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("articles_posted", {
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
        

      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Article;
  };
  