module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    name: DataTypes.STRING
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Customer to have Burger
      classMethods: {
        associate: function(models) {
          // Associating Customers with Burgers
          // When an customer is deleted, also delete any associated Burgers
          Customer.hasMany(models.Burger, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Customer;
};
