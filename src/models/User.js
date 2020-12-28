import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

export default sequelize.define('user', {
  id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING(64), allowNull: false, unique: true },
  password: { type: DataTypes.STRING(64), allowNull: false }
});
