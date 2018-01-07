
Notes
=====


In this README file, I will write notes about the different challenges in this sections and
other stuff that I consider imprtant to note out.

### 54. VALIDATORS, TYPES AND DEFAULTS

#### - Challenge N°1 :

1. Create new user model.
2. Set email property: 
  -> require it 
  -> trim it 
  -> set type to string  
  -> set min lenght of 1
3. Create new user. Test it.


### 77. QUERIS

1. Query by id
1. Grab Id
3. Loas User mongoose model
4. user.findById;

### 78. GETTING AN INDIVIDUAL RESOURCE

1. Validate th ID using isValid
  - If is not valit : 404. Send back empty body

2. Queryng the databas
3. Succes: 
  - If todo sent it back.
  - If no todo send back 404 with empty body.
4. Error: 
  - 400 - and send empty body back.