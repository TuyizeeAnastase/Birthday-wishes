module.exports = (sequelize, DataTypes) => {
  const User=sequelize.define(
    "User",
    {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    role_id: DataTypes.INTEGER,
    birth_day: DataTypes.DATEONLY,
    password:DataTypes.STRING
  }, {});
  User.associate=function(models){
    User.hasOne(models.Role,{
      foreignKey: "role_id",
      as: "role",
      onDelete: "CASCADE",
    })
  }
  return User;
};