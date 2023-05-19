
const {escribirJSON,leerJSON} = require("../autos/index")
const autos = require("../autos/autos.json")
const Autos = require("../autos/Autos")
const Vendidos = require("../autos/Autos")
module.exports = {   
    autos: autos,  
listar : function(autos = leerJSON()){   //lista de autos
   
    autos.forEach(({marca,modelo,color,anio,km,patente,precio,cuotas,vendido})=> {
        console.log(`
        marca: ${marca} 
        modelo: ${modelo}
        color: ${color}
        año: ${anio}
        km: ${km}
        patente: ${patente}
        precio: ${precio}
        cuotas: ${cuotas}
        vendido: ${vendido}`);

    }) 
        
    },

    buscarAutos : function(marca){   // buscar por marca
       
       for (let i = 0; i < autos.length; i++) {
         if (autos[i].marca === marca) {
            console.log(autos[i]);
        
       }
  
    }
    
   
    },

    agregarAuto : function(marca,modelo,color,anio,km,patente,precio,cuotas){   // agregar un auto
        
       
        let auto = new Autos(marca,modelo,color,anio,km,patente,precio,cuotas)
        autos.push(auto)
        escribirJSON(autos)
        console.log(`se agrego el auto nuevo`);


  

},

 vender : function(marca,modelo){
        
    

           

           
        }
    
     }


 



