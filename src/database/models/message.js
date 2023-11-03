module.exports = (sequelize, DataTypes) => {
  const Message=sequelize.define(
    "Message",
    {
    title: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});
  return Message;
};