import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624743448254 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({ 
                name: "compliments",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"user_sender",
                        type: "uuid"
                    },
                    {
                        name:"user_receiver",
                        type: "uuid"
                    },
                    {
                        name:"tag_id",
                        type:"uuid"
                    },
                    {
                        name:"message",
                        type: "varchar"
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys:[
                    {
                        name:"FKUserSenderCompliments", //nome da chave
                        referencedTableName:"users", //nome da tabela com a qual se relaciona - Tabela users
                        referencedColumnNames:["id"], //coluna da tabela com a qual se relaciona - Coluna id da tabela users
                        columnNames:["user_sender"], // coluna desta tabela que se relaciona com a tabela users
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name:"FKUserReceiverCompliments", //nome da chave
                        referencedTableName:"users", //nome da tabela com a qual se relaciona - Tabela users
                        referencedColumnNames:["id"], //coluna da tabela com a qual se relaciona - Coluna id da tabela users
                        columnNames:["user_receiver"], // coluna desta tabela que se relaciona com a tabela users
                        onDelete: "SET NULL",
                        onUpdate: "SET NUL"
                    },
                    {
                        name:"FKUserTagCompliments", //nome da chave
                        referencedTableName:"tags", //nome da tabela com a qual se relaciona - Tabela tags
                        referencedColumnNames:["id"], //coluna da tabela com a qual se relaciona - Coluna id da tabela tags
                        columnNames:["tag_id"], // coluna desta tabela que se relaciona com a tabela tags
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        )
        // await queryRunner.createForeignKey(
        //     "compliments",
        //     new TableForeignKey(
        //         {
        //                     name:"FKUserSenderCompliments", //nome da chave
        //                 referencedTableName:"users", //nome da tabela com a qual se referencia - Tabela users
        //                 referencedColumnNames:["id"], //coluna da tabela com a qual se referencia - Coluna id da tabela users
        //                 columnNames:["user_sender"], // coluna desta tabela que se referencia com a tabela users
        //                 onDelete: "SET NULL",
        //                 onUpdate: "SET NULL"
        //         })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
