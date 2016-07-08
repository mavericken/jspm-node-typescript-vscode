var System = require('./jspm_packages/system.js');
var fs = require('fs');
eval(fs.readFileSync('./jspm.config.js',"utf8"));
System.import(process.argv[2]).then(function(item){
}).catch((err)=>{
  console.error(err);
});
