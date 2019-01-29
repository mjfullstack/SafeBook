const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require( 'bcrypt-nodejs' );

const usersSchema = new Schema({
    first_name: { type: String, required: true },
    middle_name: { type: String, default: null },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, default: null},
    user_pic: { type: String, default: null},
    birthdate: { type: String, default: null},
    age: { type: Number, default: null},
    created_date: { type: Date, default: Date.now },
    last_modified_date: { type: Date, default: Date.now }
});

const Users = mongoose.model("Users", usersSchema);



// on every save, add the date
usersSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;
    console.log("SAW usersSchema.pre('save'...)!! updated at DATE: ", this.updated_at);

  next();
});

// Execute before each user.save() call
usersSchema.pre( 'save', function ( callback ) {
  var user = this;
  
  // if created_at doesn't exist, add to that field
  if (!user.created_at)
    user.created_at = currentDate;

  // Break out if the password hasn't changed
  if ( !user.isModified( 'password' ) ) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt( 5, function ( err, salt ) {
    if ( err ) return callback( err );

    bcrypt.hash( user.password, salt, null, function ( err, hash ) {
      if ( err ) return callback( err );
      user.salt = salt;
      user.password = hash;
      callback();
    } );

    console.log("SAW usersSchema.pre('save'...)!! GENSALT: ", user.salt, "password: ", user.password);
  } );
} );






module.exports = Users;