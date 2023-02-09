import { VistaMenu } from '../vista/vistamenu.js'
import { VistaLista } from '../vista/vistalista.js'
import { VistaFormulario } from '../vista/vistaformulario.js'
import { VistaFormularioContacto } from '../vista/vistaformulariocontacto.js'
import { VistaAvisoLegal } from '../vista/vistaavisolegal.js'
import { VistaTerminos } from '../vista/vistaterminos.js'
import { VistaFooter } from '../vista/vistafooter.js'
import { VistaPolitica } from '../vista/vistapolitica.js'
import { VistaPropiedad } from '../vista/vistapropiedad.js'

import { Modelo } from '../modelo/modelo.js'
class Controlador {
	constructor() {
		window.onload = this.iniciar.bind(this)
	}
	iniciar() {
		this.menu = new VistaMenu(this).mount('#navbar')
		this.vistaLista = new VistaLista(this).mount('#vistaListaCRUD')
		this.vistaFormulario = new VistaFormulario(this).mount('#vistaFormulario')
		this.vistaFormularioC = new VistaFormularioContacto(this).mount('#formularioContacto')
		this.vistaAvisoLegal = new VistaAvisoLegal(this).mount('#datosAviso')
		this.vistaTerminos = new VistaTerminos(this).mount("#terminos")
		this.vistaPolitica = new VistaPolitica(this).mount('#vPoliticaCookies')
		this.vistaPropiedad = new VistaPropiedad(this).mount("#propiedad")
		this.vistaFooter = new VistaFooter(this).mount('#footer')
		this.modelo = new Modelo(this, this.buscar.bind(this))
		this.mostrarIndex()

		this.masinfo = $('#masInformación').on('click', this.mostrarMasInformacion.bind(this))
	}

	/**
	 * OCULTAR Y MOSTRAR VISTAS
	 */
	ocultarTodo() {
		this.vistaLista.mostrar(false)
		this.vistaFormulario.mostrar(false)
		this.vistaFormularioC.mostrar(false)
		this.vistaAvisoLegal.mostrar(false)
		this.vistaTerminos.mostrar(false)
		this.vistaPolitica.mostrar(false)
		this.vistaPropiedad.mostrar(false)
	}

	mostrarIndex() {
		this.ocultarTodo()
		this.vistaLista.mostrar(true)
	}

	mostrarCrear() {
		this.ocultarTodo()
		this.vistaFormulario.mostrar(true, 'crear')
	}

	mostrarModificar(coche) {
		this.ocultarTodo()
		this.vistaFormulario.mostrar(true, 'modificar')
		this.vistaFormulario.coche = coche
		this.vistaFormulario.coche.enFab = coche.enFabricacion
		this.vistaFormulario.coche.extra1 = coche.extras[0]
		this.vistaFormulario.coche.extra2 = coche.extras[1]
		this.vistaFormulario.coche.extra3 = coche.extras[2]
		this.vistaFormulario.coche.extra4 = coche.extras[3]
		this.vistaFormulario.coche.extra5 = coche.extras[4]
		this.vistaFormulario.coche.imagen = coche.imagen
		this.vistaFormulario.coche.base64 = coche.imagen
		this.vistaFormulario.coche.fecha = coche.fechaFabricacion
		$('#divImagenPrevia').css({ 'display': 'inline-block' })
		$('#imagenPrevia').attr('width', '100')
	}
	mostrarConsultar() {
		this.ocultarTodo()
		this.vistaFormulario.mostrar(true, 'consultar')
	}
	mostrarTerminos() {
		this.ocultarTodo()
		this.vistaTerminos.mostrar(true)
	}
	mostrarAvisosLegales() {
		this.ocultarTodo()
		this.vistaAvisoLegal.mostrar(true)
	}
	mostrarPolitica() {
		this.ocultarTodo()
		this.vistaPolitica.mostrar(true)
	}
	mostrarPropiedad() {
		this.ocultarTodo()
		this.vistaPropiedad.mostrar(true)
	}
	mostrarContacto() {
		this.ocultarTodo()
		this.vistaFormularioC.mostrar(true)
	}

	mostrarMasInformacion() {
		this.ocultarTodo()
		this.mostrarPolitica()	
	}
	/**
	 * MÉTODOS PARA TRAER Y LLEVAR DATOS AL MODELO
	 */

	buscar() {
		this.modelo.buscar(null, this.buscarOK.bind(this))
	}
	buscarOK(lista) {
		this.vistaLista.listar(lista)
	}

	insertarCoche(coche) {
		this.modelo.insertar(coche, this.insertarCocheOK.bind(this))
	}
	insertarCocheOK() {
		//mensaje
		window.location.reload()
	}

	borrar(id) {
		this.modelo.borrar(id, this.borrarOK.bind(this))
	}
	borrarOK() {
		//mensaje
		window.location.reload()
	}
	modificar(id) {
		this.mostrarModificar(id)
	}

	modificarCoche(id, coche) {
		this.modelo.insertarCochePorID(id, coche, this.modificarCocheOK.bind(this))
	}
	modificarCocheOK() {
		//mensaje
		window.location.reload()
	}
}
new Controlador()
