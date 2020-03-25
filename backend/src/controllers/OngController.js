const crypto = require('crypto');
const connection = require('../database/connection');

//exporta um objeto com os metodos
module.exports = {
    
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body; //request body

        const id = crypto.randomBytes(4).toString('HEX'); //criação que uma id criptografada

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};