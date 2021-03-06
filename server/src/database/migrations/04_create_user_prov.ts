import Knex from 'knex';


export async function up(knex: Knex){
    //criar a tabela
    return knex.schema.createTable('user_prov', table =>{
        table.increments('id_user_prov').primary();        
        table.integer('id_user')
        .notNullable()
        .references('id_user').inTable('user');
        table.integer('id_prov').notNullable()
        .references('id_prov').inTable('prov');

    });
}
export async function down(knex: Knex){
    //voltar atras(delatar)contrario do up
 return knex.schema.dropTable('user_prov');
 

}