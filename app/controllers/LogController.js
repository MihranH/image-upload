const db = require('../models');

class LogController {
    static async getImageLogs(req, res){
        try{
            const { image_id } = req.params;
            const logs = await db.logs.findAll({
                where: { image_id }
              });
            
            if (!logs || !logs.length) {
                return res.status(404).send({message: 'Logs not found for the given image'});
            } 

            const result  = logs.map(log => log.dataValues) 
            return res.send(result)
        }
        catch(err){
            return res.status(500).send({message: 'Something went wrong'});
        }
       
    }
}

module.exports = LogController;