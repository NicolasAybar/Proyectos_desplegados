const {validacionString,validacionLongitud,validacionStock,validacionCodigo,validarIngresoProducto} = require("../../helpers/validation.helper")

const validacionProducto = (producto) =>{
    if(!validarIngresoProducto(producto)){
        throw {message: 'Property is required', status: 400}
    }
    if(!validacionString(producto.titulo)){
        throw {message: 'Title incorrect, The title must be sring and must be more than 3 characters', status: 400}
    } 
    if(!validacionStock(producto.stock)){
        throw {message: 'Stock incorrect, value must be numeric and must be more than 1 characters', status: 400}
    }
    if(!validacionLongitud(producto.descripcion)){
        throw {message: 'Description incorrect, must be more than 20 characters', status: 400}
    }
    if(!validacionCodigo(producto.codigo)){
        throw {message: 'Code incorrect, must be more than 1 characters', status: 400}
    }
    if(!validacionFecha(producto.fecha)){
        throw {message: 'Date incorrect, must be more than 1 characters', status: 400}
    }

}
module.exports = {validacionProducto}