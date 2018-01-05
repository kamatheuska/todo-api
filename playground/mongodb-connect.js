// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert to do', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

//  Insert new doc into Users (name, age, location)
//  Use insertOne()

  db.collection('Users').insertOne({
    name: 'Nicolas',
    age: 27,
    location: 'Barcelona'
  }, (err, result) => {
    if (err) {
      return console.log("Unable to insert user", err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });   

  db.close();
});