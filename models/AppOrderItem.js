module.exports = (sequelize, DataTypes) => {
    const AppOrderItem = sequelize.define("AppOrderItem", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        image_url: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        selectedColor: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    }, {
        tableName: "apporder_items",
        timestamps: false,
    });

    AppOrderItem.associate = (models) => {
        AppOrderItem.belongsTo(models.AppOrder, {
            foreignKey: 'order_id',
            as: 'order',
        });
    };

    return AppOrderItem;
};
