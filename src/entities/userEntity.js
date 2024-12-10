import { EntitySchema } from 'typeorm'

export const User = new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true
        },
        username: {
            type: 'varchar',
            length: 100
        },
        email: {
            type: 'varchar',
            length: 100
        },
        password: {
            type: 'varchar',
            length: 255
        },
        credits: {
            type: 'int',
            default: 0
        },
        createdAt: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP'
        },
        updatedAt: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP'
        }
    },
    relations: {
        credit_payments: {
            type: 'one-to-many',
            target: 'UserCreditPayment',
            inverseSide: 'user',
            cascade: true
        },
    }
})