module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
      defaultValue: false
    }
  },
    {
      // We're saying that we want our Customer to have Burger
      classMethods: {
        associate: function(models) {
          // An Customer (foreignKey) is required or a burger can't be made
          Burger.belongsTo(models.Customer, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Burger;
};