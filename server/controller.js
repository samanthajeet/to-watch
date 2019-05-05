module.exports = {
    addToList: async (req, res) => {
        const db = req.app.get('db');
        const {imdbID} = req.params
        await db.add_to_list({imdbID})
        res.sendStatus(200)
    },
    getList: async (req, res) => {
        const db = req.app.get('db')
        let response = await db.get_list()
        res.status(200).send(response)
    },
    deleteItem: async (req,res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        await db.delete_item({id})
        res.sendStatus(200)
    }
}