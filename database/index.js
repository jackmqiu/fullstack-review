const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  owner: String,
  forks: Integer,
  url: String

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (Repos/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  arguments.forEach(
    Repo.save(function(err) {
      if (err) {
        console.log(err);
      }
    });
  );
}

module.exports.save = save;
