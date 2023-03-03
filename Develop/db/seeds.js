const {Model, DataTypes} = require('sequelize');
const sequelize = require('../connect');

class Notes extends Model{}

Notes.init(
    {
        noteTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        noteBody: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'notes'
    }
);

module.exports = Notes;