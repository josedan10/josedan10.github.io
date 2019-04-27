var ghpages = require('gh-pages');
 
ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/josedan10/josedan10.github.io.git'
}, function(err) {});