var fs = require('fs');
var path = require('path');

module.exports.getExternsAsListOfResolvedPaths = function() {
  var externsPath = path.join(__dirname, 'externs');
  var paths = fs.readdirSync(externsPath).map(function(filePath) {
    return path.join(externsPath, filePath);
  });
  return paths;
};