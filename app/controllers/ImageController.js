const db = require('../models');
const randomstring = require('randomstring')
const ActionService = require('../services/ActionService');

class ImageController {
    static async getAllImages(req, res){
        try{
            const images = await db.images.findAll(
                {
                    order: [
                        ['id', 'DESC'],
                ]
            });
            if (!images || !images.length) {
                return res.status(404).send({message: 'Images not found'});
            }        

            const result  = images.map(img => img.dataValues)  
            return res.send(result)
        }
        catch(err){
            return res.status(500).send({message: 'Something went wrong'});
        }       
    }

    static async uploadImgToS3(req, res){
        try{
            // Assume we uploaded to S3 Bucket and got the url
            return res.send(`mock-path-s3/test-image-${randomstring.generate().substring(0, 5)}`)
        }
        catch(err){
            return res.status(500).send({message: 'Something went wrong'});
        }       
    }

    static async addImage(req, res){
        try{
            const { url, actions } = req.body;          

            if (!url) {
                return res.status(400).send({message: 'Url is not specified'});
            }

            const maxId = await db.images.max('id');
            const id = isNaN(maxId) ? 1 : maxId + 1;

            const imageRecord = await db.images.build({ id, url }).save();
            const insertedImgId = imageRecord.dataValues.id;
           
            let maxLogId = await db.logs.max('id');
            actions.forEach(action => {
                const idToInsert = isNaN(maxLogId) ? 1 : maxLogId + 1;
                action.id = idToInsert;
                action.image_id = insertedImgId;
                action.params = JSON.stringify(action.params);
                maxLogId = action.id;
                ActionService.handleAction(action.type, action.params, url);
            })       

            await db.logs.bulkCreate(actions, {individualHooks:true}) 

            return res.send('Added')
        }
        catch(err){
            return res.status(500).send({message: 'Something went wrong'});
        }       
    }

    static async deleteImage(req, res) {
        try {
            const { id } = req.params;
            await db.images.destroy({
                where: { id }
            })

            return res.send('Deleted')
        } catch (error) {
            return res.status(500).send({message: 'Something went wrong'});
        }
    }
}

module.exports = ImageController;  