const { getConnection } = require('../connection');
const { Sequelize } = require('sequelize');


class ImageController {
    static async getAllImages(req, res){
        try{
            const db = await getConnection();
            if (!db) {
                return res.status(500).send({message: 'DB failed to connect'});
            }
            const response = await db.query("Select * from test", { type: Sequelize.QueryTypes.SELECT })
            return res.send(response)
        }
        catch(err){
            return res.status(500).send({message: 'Something went wrong'});
        }
       
    }
}

module.exports = ImageController;