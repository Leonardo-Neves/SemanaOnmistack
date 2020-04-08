const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

	async index(request, response) {
		const ongs = await connection('ongs').select('*');

		return response.json(ongs);
	},

	// Esse metodo é assincrono, pois a inserção no banco é lendo
	// Precisa que a inserção seja feita para continuar
	async create(request, response) {
		
		// Pegando os dados do Formulário
		const { name, email, whatsapp, city, uf } = request.body;

		// Criando um id aleatorio
		const id = crypto.randomBytes(4).toString('HEX');

		await connection('ongs').insert({
			id, 
			name, 
			email, 
			whatsapp,
			city,
			uf,
		})

		// Esse codigo de baixo só vai ser executado depois que essa linha com 
		// o await terminar de executar.

	    return response.json({ id });
	}
};