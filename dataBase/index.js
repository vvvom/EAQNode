let sequelize = require('sequelize');
let fs = require('fs');
let resolve = require('path').resolve;

 module.exports = (() => {
    let instance;

    function initConnection() {
        let client = new sequelize('cafeproject', 'root', 'donaldblym0710', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
        });
        let models = {};

        function getModels() {
            fs.readdir('./dataBase/models', (err, files) => {
                files.forEach(file => {
                    const modelName = file.split('.')[0];
                    models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`));
                });
            });
        }

        return {
            getModel: (modelName) => models[modelName],
            setModels: () => {
                return getModels();
            }
        };
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    }
})();