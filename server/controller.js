module.exports={
    getHouses: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.getHouses().then(houses => res.status(200).send(houses))
        .catch(err => {console.log(err);res.status(500).send(err)})
    },
    // id, pname, address, img, city, state, zip, mortgage, rent>
    addHouse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { name, address, city, state, zipcode } = req.body
        dbInstance.houses.save({
            pname: name,
            address: address,
            city: city,
            state: state,
            zip: zipcode
        }).then(resp => res.status(200).send('ok'))
        // console.log('added a house')
        // res.status(200).send('ok')
    },
    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.deleteHouse(req.params.id).then(resp => res.status(200).send('deleted it'))
    }
}