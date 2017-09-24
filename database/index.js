const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  owner: String,
  forks: Number,
  url: String

});

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
    //Repo.save();
  //);
}

module.exports.save = save;
