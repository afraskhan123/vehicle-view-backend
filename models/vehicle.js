module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    make: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    vin: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    vccNo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    vccStatus: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    vccGenerationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },
    chassisNo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    engineNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    yearOfBuilt: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    vehicleDrive: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    countryOfOrigin: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    engineCapacity: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    carriageCapacity: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    passengerCapacity: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    vehicleModel: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    vehicleBrandName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    vehicleType: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    vehicleColor: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    specificationStandardName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    declarationNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    declarationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },
    ownerCode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    ownerName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    printRemarks: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    }
  });
  return Vehicle;
}; 