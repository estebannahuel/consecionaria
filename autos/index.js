const {readFileSync,writeFileSync} = require("fs");
const path = require("path");


module.exports = {
   
   leerJSON : () => JSON.parse(readFileSync(path.join(__dirname,"autos.json"), "utf-8")),

escribirJSON : (autos) => writeFileSync(path.join(__dirname,"autos.json"), JSON.stringify(autos, null, 3),"utf-8")


}