console.clear()
const {argv} = require("process")
const dataBase = require("./data")

const accion = argv[2]

switch (accion) {
    case "listar":
        
    dataBase.listar()
        break;

        case "buscar":
            dataBase.buscarAutos(argv[3])

            break;

        case "crear":
            
        dataBase.agregarAuto(argv[3],argv[4],argv[5],+argv[6],+argv[7],argv[8],+argv[9],+argv[10])
 
        break;

        case "comprar":
            dataBase.vender(argv[3],argv[4])
    default:
        break;
}