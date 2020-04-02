const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

//exporta um objeto com os metodos
module.exports = {
    
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body; //request body

        const id = generateUniqueId(); //criação que uma id criptografada

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