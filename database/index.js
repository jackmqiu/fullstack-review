const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected!')
});
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  handle: String
  // name: String,
  // owner: String,
  // forks: Number,
  // url: String

});
repoSchema.methods.speak = function () {
  var greeting = this.handle
    ? "Meow name is " + this.handle
    : "I don't have a name";
  console.log(greeting);
}

let Repo = mongoose.model('Repo', repoSchema);

let save = (...args) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //args.forEach(
    // Repo.create(args, function(err){
    //   console.log(err);
    // });
    console.log('for each arg: ', args);
    var user = new Repo(args[0]);
    user.save(function(err, user){
      if(err) return console.log(err);
      user.speak();
    })
    //Repo.save();
  //);
}

module.exports.save = save;
