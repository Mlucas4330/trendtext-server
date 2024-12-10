import { EntitySchema } from 'typeorm'

export const UserVideo = new EntitySchema({
    name: 'UserVideo',
    tableName: 'user_videos',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true
        },
        title: {
            type: 'varchar'
        },
        data: {
            type: 'longblob'
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
        user: {
            type: 'many-to-one',
            target: 'User',
            inverseSide: 'videos',
            nullable: false
        },
    }
})