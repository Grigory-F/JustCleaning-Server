import db from './db.js'
import fileService from './FileService.js'


class Controller {

    async getArticles(req, res) {
        try {
            const getArticles = await db.query('SELECT * FROM articles')
            console.log(getArticles);
            res.json(getArticles.rows)
        } catch (error) {
            res.status(500).send('Some wrong')
            console.log(error);
        }
    }

    async createOrder(req, res) {
        const { order_comp, order_status, execurot_id, client_id } = req.body
        try {
            const fileNames = await fileService.saveFile(req.files.order_images);
            const newOrder = await db.query(
                
                'INSERT INTO orders (order_comp, order_status, execurot_id, client_id, order_images) values ($1, $2, $3, $4, $5) RETURNING *', [order_comp, order_status, execurot_id, client_id, JSON.stringify(fileNames)]
                )
            res.status(200).json(newOrder.rows[0])
        } catch (error) {
            res.status(500).send(error)
        }
    }




    async getClient(req, res) {
        const name = req.query.name
        /* console.log(name)
        res.send(name) */
        try {
            const getClients = await db.query('SELECT * FROM clients', )
            res.json(getClients.rows)
        } catch (error) {
            res.status(500).send('Some wrong')
            console.log(error);
        }
    }
    async createClient(req, res) {
        const { name, surname, last_name, telephone, address, status } = req.body
        try {
            const newPerson = await db.query('INSERT INTO clients (name, surname, last_name, telephone, address, status) values ($1, $2, $3, $4, $5, $6) RETURNING *', [name, surname, last_name, telephone, address, status])
            res.json(newPerson.rows[0])
        } catch (error) {
            res.status(500).send(error)
        }
    }







    async updateClient() {
        const { surname, last_name, id_client } = req.body
        try {
            const udateClient = await db.query('UPDATE clients SET surname = $1, last_name = $2 WHERE id_client = $3 RETURNING *', [surname, last_name, id_client])
            res.json(udateClient.rows[0])
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
}


export default new Controller()