const conectionMongoose = require('mongoose')

/*const URI = `mongodb+srv://Jones007:${process.env.DB_PASSWORD}@cluster0.ps9ahah.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`*/
const URI = `mongodb+srv://tamandua:${process.env.DB_PASSWORD}@cluster0.ps9ahah.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

conectionMongoose.connect(URI)
    .then(() => console.log('DB is connected'))
    .catch(err => console.log(err))

    module.exports = {conectionMongoose}