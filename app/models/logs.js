module.exports = function(sequelize, DataTypes) {
    const Log = sequelize.define('logs', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        type: {
            type: DataTypes.ENUM('crop', 'resize', 'blur'),
            allowNull: false,
            field: 'type'
        },
        params: {
            type: DataTypes.STRING(500),
            allowNull: false,
            field: 'params'
        },
        imageId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'images',
                key: 'id'
            },
            field: 'image_id'
        },
        createdAt: {
            type: 'TIMESTAMP',
            allowNull: true,
            field: 'created_at'
        },
        updatedAt: {
          type: 'TIMESTAMP',
          allowNull: true,
          field: 'updated_at'
      }
      }, {
        tableName: 'logs'
      });
      Log.associate = function (models) {
        Log.belongsTo(models.images, {foreignKey: 'image_id'}); 
    };
    return Log;
};