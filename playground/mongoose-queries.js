const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { User } = require('./../server/models/user');

//const id = '5a521ed8819c264d2dbebdf9';
const id = "5a7d03880343f98e291b862e";

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log('ERROR *****', e));
