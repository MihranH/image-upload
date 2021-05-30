const { Sequelize } = require('sequelize');
const CLEARDB_DATABASE_URL = 'mysql://b3d568bb5eaa36:a233f72f@us-cdbr-east-04.cleardb.com/heroku_769c54bba69963b';
const sequelize = new Sequelize(CLEARDB_DATABASE_URL);

async function getConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return sequelize;
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return null;
      }
}

module.exports = {
    getConnection
}