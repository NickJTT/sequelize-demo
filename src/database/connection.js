import { Sequelize } from 'sequelize';

const DATABASE = 'socialnetwork';
const USERNAME = 'postgres';
const PASSWORD = 'postgres';
const OPTIONS = { host: '127.0.0.1', dialect: 'postgres' };

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, OPTIONS);

export default sequelize;
