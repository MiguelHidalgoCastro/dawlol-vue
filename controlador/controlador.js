import { Menu } from '../vista/menu.js'
import { VistaLista } from '../vista/vistalista.js'
import { VistaFormulario } from '../vista/vistaformulario.js'
import { VistaFormularioContacto } from '../vista/vistaformulariocontacto.js'
import { VistaDatosEmpresa } from '../vista/vistadatosempresa.js'
import { VistaTerminos } from '../vista/vistaterminos.js'
import { Footer } from '../vista/footer.js'

import { Modelo } from '../modelo/modelo.js'

class Controlador {
	constructor() {
		window.onload = this.iniciar.bind(this)
	}
	iniciar() {

		//this.menu = Menu.mount('#navbar')
		//this.menu.controlador = this
		this.menu = new Menu(this).mount('#navbar')

		//this.vistaLista = VistaLista.mount('#vistaListaCRUD')
		//this.vistaLista.controlador = this
		this.vistaLista = new VistaLista(this).mount('#vistaListaCRUD')

		//this.vistaFormulario = VistaFormulario.mount('#vistaFormulario')
		//this.vistaFormulario.controlador = this
		this.vistaFormulario = new VistaFormulario(this).mount('#vistaFormulario')


		this.vistaFormularioC = VistaFormularioContacto.mount('#formularioContacto')
		this.vistaFormularioC.controlador = this

		this.vistaDatosEmpresa = VistaDatosEmpresa.mount('#datosEmpresa')
		this.vistaDatosEmpresa.controlador = this

		this.vistaTerminos = VistaTerminos.mount("#terminos")
		this.vistaTerminos.controlador = this

		//this.vistaFooter = Footer.mount("#footer")
		//this.vistaFooter.controlador = this
		this.vistaFooter = new Footer(this).mount('#footer')

		this.modelo = new Modelo(this, this.buscar.bind(this))




		this.mostrarIndex()
	}

	/**
	 * OCULTAR Y MOSTRAR VISTAS
	 */
	ocultarTodo() {
		this.vistaLista.mostrar(false)
		this.vistaFormulario.mostrar(false)
		this.vistaFormularioC.mostrar(false)
		this.vistaDatosEmpresa.mostrar(false)
		this.vistaTerminos.mostrar(false)
	}

	mostrarIndex() {
		this.ocultarTodo()
		this.vistaLista.mostrar(true)
	}

	mostrarCrear() {
		this.ocultarTodo()
		this.vistaFormulario.mostrar(true, 'crear')
	}

	mostrarModificar(id) {
		this.ocultarTodo()
		this.vistaFormulario.mostrar(true, 'modificar')
	}
	mostrarConsultar() {
		this.ocultarTodo()
		this.vistaFormulario.mostrar(true, 'consultar')
	}

	mostrarTerminos() {
		this.ocultarTodo()
		this.vistaTerminos.mostrar(true)
	}
	mostrarDatosEmpresa() {
		this.ocultarTodo()
		this.vistaDatosEmpresa.mostrar(true)
	}
	mostrarContacto() {
		this.ocultarTodo()
		this.vistaFormularioC.mostrar(true)
	}

	/**
	 * MÉTODOS PARA TRAER Y LLEVAR DATOS AL MODELO
	 */

	buscar() {
		this.modelo.buscar(null, this.buscarOK.bind(this))
	}
	buscarOK(lista) {
		this.vistaLista.listar(lista)
		//leer json
	}

	insertarCoche(coche) {
		this.modelo.insertar(coche, this.insertarCocheOK.bind(this))
	}
	insertarCocheOK() {
		window.location.reload()
	}

	borrar(id) {
		this.modelo.borrar(id, this.borrarOK.bind(this))
	}
	borrarOK() {
		window.location.reload()
	}
	modificar(id){
		this.mostrarModificar(id)
	}
}
new Controlador()
