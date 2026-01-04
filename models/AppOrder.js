module.exports = (sequelize, DataTypes) => {
    const AppOrder = sequelize.define("AppOrder", {
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        receipt_url: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        subtotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        shipping_charges: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        total_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'In Progress',
        },
        source: {
            type: DataTypes.ENUM('Web', 'APP'),
            allowNull: false,
            defaultValue: 'Web',
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        tableName: "apporders",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    AppOrder.associate = (models) => {
        AppOrder.hasMany(models.AppOrderItem, {
            foreignKey: 'order_id',
            as: 'items',
        });
    };

    return AppOrder;
};
