module.exports={
    getHouses: (req,res,next) => {
        const dbInstance = req.app.get('db');
        dbInstance.getHouses().then(houses => res.status(200).send(houses))
        .catch(err => {console.log(err);res.status(500).send(err)})
    }
}