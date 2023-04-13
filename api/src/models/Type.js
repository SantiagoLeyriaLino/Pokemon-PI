const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Type", {
    
        id:{
          type:DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true,
        },
        name: {
          type: DataTypes.ENUM("normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow",),
          defaultValue:"unknown"
        },    
      });  
    };