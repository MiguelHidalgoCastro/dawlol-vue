/**
 * @file Contiene el modelo de la clase coche
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */
export class Coche {
    /**
     * Constructor de un Coche
     * @param {string} marca 
     * @param {string} modelo 
     * @param {string} fecha 
     * @param {string} enFab 
     * @param {string} descripcion 
     * @param {Array} extras 
     * @param {string} imagen 
     * @param {float} precio
     */
    constructor(marca, modelo, fecha, enFab, descripcion, extras, imagen, precio) {
        //this.idMarcaModelo; //para la segunda versión
        this.marca = marca
        this.modelo = modelo
        this.fechaFabricacion = fecha
        this.descripcion = descripcion
        this.precio = precio
        this.enFabricacion = enFab
        this.extras = extras
        this.imagen = imagen
    }



}