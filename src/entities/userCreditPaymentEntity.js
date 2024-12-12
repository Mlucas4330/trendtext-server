const { EntitySchema } = require('typeorm')

const UserCredityPayment = new EntitySchema({
    name: 'UserCreditPayment',
    tableName: 'user_credit_payments',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true
        },
        title: {
            type: 'varchar',
            length: 50
        },
        price: {
            type: 'decimal',
            precision: 10,
            scale: 2
        },
        createdAt: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
        },
        updatedAt: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP'
        }
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            inverseSide: 'credit_payments',
            nullable: false
        },
    }
})

module.exports = {
    UserCredityPayment
}