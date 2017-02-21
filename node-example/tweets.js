var jsonfile = require('jsonfile');
const file = 'tweets.json';

var tweets;

jsonfile.readFile(file, function(err, obj) {
  if(err) {
    console.log("ERROR:\n" + err);
  } else {
    console.dir(obj);
    tweets = obj;
  }
})
