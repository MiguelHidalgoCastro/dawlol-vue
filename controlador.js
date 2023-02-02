import { Menu } from './menu.js'
import { VistaLista } from './vistalista.js'
import { VistaFormulario } from './vistaformulario.js'
import { VistaFormularioContacto } from './vistaformulariocontacto.js'
import { VistaDatosEmpresa } from './vistadatosempresa.js'
import { VistaTerminos } from './vistaterminos.js'
import { VistaFooter } from './vistaFooter.js'

class Controlador {
	constructor() {
		window.onload = this.iniciar.bind(this)
	}
	iniciar() {
		this.menu = Menu.mount('#navbar')
		this.menu.controlador = this

		this.vistaLista = VistaLista.mount('#vistaListaCRUD')
		this.vistaLista.controlador = this

		this.vistaFormulario = VistaFormulario.mount('#vistaFormulario')
		this.vistaFormulario.controlador = this

		this.vistaFormularioC = VistaFormularioContacto.mount('#formularioContacto')
		this.vistaFormularioC.controlador = this

		this.vistaDatosEmpresa = VistaDatosEmpresa.mount('#datosEmpresa')
		this.vistaDatosEmpresa.controlador = this

		this.vistaTerminos = VistaTerminos.mount("#terminos")
		this.vistaTerminos.controlador = this

		this.vistaFooter = VistaFooter.mount("#footer")
		this.vistaFooter.controlador = this

		this.mostrarIndex()
	}

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

	mostrarModificar() {
		this.ocultarTodo()
		this.vistaFormulario.mostrar(true, 'modificar')
	}
	mostrarConsultar() {
		this.ocultarTodo()
		this.vistaFormulario.mostrar(true, 'consultar')
	}

	mostrarTerminos(){
		this.ocultarTodo()
		this.vistaTerminos.mostrar(true)
	}
	mostrarDatosEmpresa(){
		this.ocultarTodo()
		this.vistaDatosEmpresa.mostrar(true)
	}
	mostrarContacto(){
		this.ocultarTodo()
		this.vistaFormularioC.mostrar(true)
	}
}
new Controlador()
