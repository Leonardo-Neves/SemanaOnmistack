
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
  	table.increments();

  	table.string('title').notNullable();
  	table.string('description').notNullable();
  	table.decimal('value').notNullable();


  	// Criando o campo para a chave estrangeira
  	table.string('ong_id').notNullable();

  	// Referenciando como chave estrangeira
  	table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
