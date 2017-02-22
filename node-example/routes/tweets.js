var tweets = require('../public/javascripts/tweets');

function load() {
  var students = {};
  for(var i=0; i<tweets.length; i++) {
    var name = tweets[i].user.name;
    var text = tweets[i].text;
    if(!(name in students) && !tweets[i].retweeted_status) {
      students[name] = {
        "name" : name,
        "image" : tweets[i].user.profile_image_url,
        "handle" : tweets[i].user.screen_name,
        "tweets" : []
      };
      students[name].tweets.push(text);
    }
  }
  return students;
}

module.exports = load();
