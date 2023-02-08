/**
 * @file Contiene el modelo de la aplicación
 * @author Miguel Hidalgo Castro <<miguelhidalgocastro.guadalupe@alumnado.fundacionloyola.net>>
 */
import { Idb } from '../servicios/idb.js';
/**
 * Clase Modelo
 */
export class Modelo {
    /**
     * Constructor del modelo, inicializa la conexion a la bbdd
     * @param {Constrolador} controlador 
     */
    constructor(controlador, callback) {
        this.controlador = controlador
        this.idb = new Idb(callback)
    }
    /**
     * Función que le pasa los datos al Idb para que inserte el objeto en la bbdd
     * @param {Object} objeto 
     * @param {Function} callback 
     */
    insertar(objeto, callback) {
        this.idb.insertar(objeto, callback)
    }
    /**
     * Función que le pasa los datos al Idb para que busque un objeto en la bbdd
     * @param {string} marca 
     * @param {Function} callback 
     */
    buscar(marca, callback) {
        this.idb.buscar(marca, callback)
    }
    /**
     * Función que le pasa los datos al Idb para que borre el objeto en la bbdd
     * @param {int} id 
     * @param {Function} callback 
     */
    borrar(id, callback) {
        this.idb.borrar(id, callback)
    }
    /**
     * Función que le pasa los datos al Idb para que obtenga el objeto en la bbdd
     * @param {int} id 
     * @param {Function} callback 
     */
    buscarPorID(id, callback) {
        this.idb.buscarPorID(id, callback)
    }
    /**
     * Función que le pasa los datos al Idb para que modifique el objeto en la bbdd
     * @param {int} id 
     * @param {Object} coche 
     * @param {Function} callback 
     */
    insertarCochePorID(id, coche, callback) {
        this.idb.insertarCochePorID(id, coche, callback)
    }
    /**
     * Funcion que llama al leerFicheroJSON al acabar de leer los coches de la bbdd
     * @param {Function} callback 
     */
    leerFicheroJSON(callback) {
        this.idb.leerFicheroJSON(callback)
    }
}