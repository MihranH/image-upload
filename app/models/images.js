module.exports = function(sequelize, DataTypes) {
    const Image = sequelize.define('images', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        url: {
            type: DataTypes.STRING(250),
            allowNull: false,
            field: 'url'
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
        tableName: 'images'
      });      
      Image.associate = function (models) {
        Image.hasMany(models.logs, {onDelete: 'CASCADE'}); 
    };
    return Image;
};