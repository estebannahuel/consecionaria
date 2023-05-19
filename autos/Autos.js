const Autos = function(marca,modelo,color,anio,km,patente,precio,cuotas){
  
    this.marca = marca,
    this.modelo = modelo,
    this.color = color,
    this.anio = anio,
    this.km = km,
    this.patente = patente,
    this.precio = precio,
    this.cuotas = cuotas
    this.vendido =  false
    
    
}


const Vendidos = function(){
    this.marca = this.marca
    this.modelo = this.modelo,
    this.color = this.color,
    this.anio = this.anio,
    this.km = this.km,
    this.patente = this.patente,
    this.precio = this.precio,
    this.cuotas = this.cuotas
    this.vendido =  true

}


module.exports = 
{
    Autos,
    Vendidos
}