var mongoose = require('mongoose')
/* the database name is stored in a private variable instead of being 'hard-coded' so it can be replaced using the 'rewire' module. This avoids the need for the unit tests to run against the 'live' database. */
var database = 'api'
/* the server connections string includes both the database server IP address and the name of the database. */
const server = 'mongodb://'+process.env.IP+'/'+database
console.log(server)
/* the mongoose drivers connect to the server and return a connection object. */
mongoose.connect(server)
const db = mongoose.connection

/* all documents in a 'collection' must adhere to a defined 'schema'. Here we define a new schema that includes a mandatory string and an array of strings. */
const listSchema = new mongoose.Schema({
    q: { type: Array, required: true },
   
})
/* the schema is associated with the 'List' collection which means it will be applied to all documents added to the collection. */
const List = mongoose.model('List', listSchema)
/* END OF MONGOOSE SETUP */

/* notice we are using the 'arrow function' syntax. In this example there are more than one parameter so they need to be enclosed in brackets. */
exports.addList = (data, callback) => {
  
  /* now we have extracted the data we can use it to create a new 'List' object that adopts the correct schema. */
  const q = data[0]
  const newList = new List({q})
  newList.save( (err, data) => {
    if (err) {
      callback('error: '+err)
    }
    callback('added: '+data)
  })
}

exports.getAll = callback => {
  /* the List object contains several useful properties. The 'find' property contains a function to search the MongoDB document collection. */
  List.find( (err, data) => {
    if (err) {
      callback('error: '+err)
    }
    const list = data.map( item => {
      return {id: item._id, name: item.name}
    })
    callback(list)
  })
}

exports.getById = (id, callback) => {
  /* the 'find' property function can take a second 'filter' parameter. */
  List.find({_id: id}, (err, data) => {
    if (err) {
      callback('error: '+err)
    }
    callback(data)
  })
}

exports.clear = (callback) => {
  /* the 'remove()' function removes any document matching the supplied criteria. */
  List.remove({}, err => {
    if (err) {
      callback('error: '+err)
    }
    callback('lists removed')
  })
}