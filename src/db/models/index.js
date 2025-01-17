import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { fileURLToPath, pathToFileURL } from 'url';

const basename = path.basename(import.meta.url);
const env = process.env.NODE_ENV || 'development';
const db = {};

let sequelize;
sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  dialectOptions: {
    connectTimeout: 60000,
  },
});
const modelsDir = fileURLToPath(new URL('.', import.meta.url));

async function initializeModels() {
  const files = fs
    .readdirSync(modelsDir)
    .filter(file => {
      return (
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file.indexOf('.test.js') === -1
      );
    });

  await Promise.all(
    files.map(async file => {
      const model = (await import(pathToFileURL(path.join(modelsDir, file)).href)).default(
        sequelize,
        Sequelize.DataTypes
      );
      db[model.name] = model;
    })
  );

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
}

await initializeModels();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
