const mongoose = require('mongoose');
const username = process.env.ATLAS_USERNAME;
const password = process.env.ATLAS_PASSWORD;
const cluster = process.env.ATLAS_CLUSTER
const dbName = process.env.ATLAS_DB;
const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the database: ${dbName}`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));