import Tweet from './models/Tweet';
import User from './models/User';

User.hasMany(Tweet, { as: 'Tweets', foreignKey: 'userId' });
Tweet.belongsTo(User, { as: 'User', foreignKey: 'userId' });

export default async function mock() {
  try {
    const user = await User.create({ username: 'TestOne', password: 'PasswordOne' });
    await Tweet.create({ userId: user.id, content: 'ContentOne' });
    const users = await User.findAll({ where: { username: 'TestOne' }, include: [ { model: Tweet, as: 'Tweets' } ] });
    console.log('TestOne Tweets: ', users);
  } catch(exception) {
    console.error(exception);
  }
}
