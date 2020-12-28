import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

export default sequelize.define('tweet', {
  id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  content: { type: DataTypes.STRING(300), allowNull: false }
});
