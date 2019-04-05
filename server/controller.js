module.exports = {
    getAllHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses()
        .then(houses => {
            res.status(200).send(houses)
        }).catch(err => {
            res.status(500).send(err, 'get all error')
        })
    },
    createHouse: (req, res) => {
        const {house_name, address, city, state, zip} = req.body
        const db = req.app.get('db')
         
        db.create_house([house_name, address, city, state, zip])
        .then(() => {
            res.status(200).send()
        }).catch((err)=> {
            res.status(500).send(err, 'create error')
        })
    },
    deleteHouse: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_house(id)
        .then(() => {
            res.status(200).send(id)
        }).catch(err => {
            res.status(500).send(err, 'delete error')
        })
    }

    
}