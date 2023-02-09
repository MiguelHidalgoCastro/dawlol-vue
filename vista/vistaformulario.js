import { Coche } from '../modelo/coche.js'
export function VistaFormulario(controlador) {
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista Formulario',
				clase: 'inactivo',
				opcion: 'none',
				coche: {
					marca: null,
					modelo: null,
					fecha: null,
					enFab: null,
					descripcion: null,
					extra1: false,
					extra2: false,
					extra3: false,
					extra4: false,
					extra5: false,
					imagen: false,
					base64: false,
					precio: 0

				}
			}
		},
		template:
			`
	<div class="container" :class=clase>
	<!--Titulo-->
	<div class="row">
		<div class="col" id="tituloCrearCRUD">
			<h3 class="fw-bold mb-3 mt-2" id="tituloCrear">Crear coche</h3>
			<h3 class="fw-bold mb-3 mt-2" id="tituloModificar">Modificar coche</h3>
			<h3 class="fw-bold mb-3 mt-2" id="tituloConsultar">Consultar coche</h3>
		</div>
	</div>

	<!--FORMULARIO-->

	<div class="col-8 p-2 w-auto">
		<div class="row mb-1">
			<div class="col">
				<label for="imarca">Marca</label>
				<input type="text" class="form-control" id="imarca" placeholder="Example -> Volkswagen" v-model=coche.marca>
			</div>
			<div class="col">
				<label for="imodelo">Modelo</label>
				<input type="text" class="form-control" id="imodelo" placeholder="Example -> Golf" v-model=coche.modelo>
			</div>
		</div>
		<div class="row mb-1">
			<div class="col">
				<label for="ifecha">Fecha Fabricación</label>
				<input type="date" class="form-control" id="ifecha" name="ifecha" v-model=coche.fecha>
			</div>
			
			<div class="col">
				<label for="precion">Precio</label>
				<input type="number" class="form-control" v-model=coche.precio>
			</div>

			<div class="col">
				<label for="enFab">En Fabricación</label>
				<select id="enFab" class="form-select" name="enFab" v-model=coche.enFab>
					<option id="fab1" selected>Si</option>
					<option id="fab0">No</option>
				</select>
			</div>
		</div>
		<div class="row mb-1">
			<div class="col form-group">
				<label>Extras</label>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra1" id="extra1" v-model=coche.extra1 />
					<label class="form-check-label" for="extra1">ABS</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra2" id="extra2" v-model=coche.extra2 />
					<label class="form-check-label" for="extra2">ESP</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra3" id="extra3" v-model=coche.extra3 />
					<label class="form-check-label" for="extra3">Aire Acondicionado</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra4" id="extra4" v-model=coche.extra4 />
					<label class="form-check-label" for="extra4">Interior Premium</label>
				</div>

				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra5" id="extra5" v-model=coche.extra5 />
					<label class="form-check-label" for="extra5">Sensores Aparcamiento</label>
				</div>

			</div>
			<div class="col">
				<div class="form-group">
					<label for="textDescripcion">Descripción</label>
					<textarea class="form-control" id="textDescripcion" rows="5"
						title="Ésto es un texto de prueba para probar JQueryUI" v-model=coche.descripcion></textarea>
				</div>
			</div>
		</div>
		<div class="row mb-3 mt-5">
			<div class="col-12" style="display: none;" id="divImagenPrevia">
			<div class="row">
				<span>VistaPrevia</span>
			</div>
			<div class="row">
				<img :src=coche.base64 id="imagenPrevia" alt="imagen en pequeño del coche">
			</div>
				
				
			</div>
			<div class="col-xs-12"></div>
			<div class="col-12">
				<label for="imagen" class="form-label">Elije Imagen</label>
				<input class="form-control" type="file" id="imagen" name="imagen" @change=capturarImagen :src=coche.imagen>
			</div>

		</div>
		<div class="row mb-1 float-end">
			<div class="col">
				<a class="btn btn-secondary me-1" id="btnCancelar" @click=atras>ATRÁS</a>
				<a class="btn btn-success" id="btnAceptar" @click=aceptar>ACEPTAR</a>
				<a class="btn btn-warning" id="btnModificar" @click=modificar>MODIFICAR</a>
				<input type="hidden" value="" id="idCoche">
			</div>
		</div>
		</div>
	</div>`,
		methods: {
			mostrar(activo, opcion) {
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'

				this.opcion = opcion

				this.ocultarObj()
			},

			capturarImagen(event) {
				//Imagen base64   
				let imagen = $('#imagen')

				const archivo = imagen[0].files[0]
				const lector = new FileReader()

				lector.addEventListener('load', () => {
					this.coche.base64 = lector.result
				})
				lector.readAsDataURL(archivo)
			},

			ocultarObj() {
				if (this.opcion == 'crear') {
					$('#tituloCrear').css({ 'display': 'block' })
					$('#tituloModificar').css({ 'display': 'none' })
					$('#tituloConsultar').css({ 'display': 'none' })
					$('#btnAceptar').css({ 'display': 'inline-block' })
					$('#btnModificar').css({ 'display': 'none' })
				}
				if (this.opcion == 'modificar') {
					$('#tituloCrear').css({ 'display': 'none' })
					$('#tituloModificar').css({ 'display': 'block' })
					$('#tituloConsultar').css({ 'display': 'none' })
					$('#btnAceptar').css({ 'display': 'none' })
					$('#btnModificar').css({ 'display': 'inline-block' })
				}
				if (this.opcion == 'consultar') {
					$('#tituloCrear').css({ 'display': 'none' })
					$('#tituloModificar').css({ 'display': 'none' })
					$('#tituloConsultar').css({ 'display': 'block' })
					$('#btnAceptar').css({ 'display': 'none' })
					$('#btnModificar').css({ 'display': 'none' })
				}
			},

			aceptar() {
				//Valido campos
				let mensaje = ''
				let mostrarAlerta = false

				// Expresiones regulares
				let expMarca = /^[A-Z][A-z]{3,20}$/
				if (!expMarca.test(this.coche.marca)) {
					if (mensaje == '')
						mensaje = "La marca debe de tener la primera letra mayúscula, sin números y un máximo de 20 caracteres"

					mostrarAlerta = true
				}

				let expModelo = /^[A-Z0-9][A-z0-9]{1,20}$/
				if (!expModelo.test(this.coche.modelo)) {
					if (mensaje == '')
						mensaje = "Modelo debe de tener la primera letra mayúscula y mínimo dos caracteres, máximo 20"
					else
						mensaje = mensaje + "\nModelo debe de tener la primera letra mayúscula y mínimo dos caracteres, máximo 20"
					mostrarAlerta = true
				}

				if (this.coche.fecha == '') {
					if (mensaje == '')
						mensaje = "Selecciona una fecha valida"
					else
						mensaje = mensaje + "\nSelecciona una fecha valida"
					mostrarAlerta = true
				}
				else {
					//cuando la fecha sea mayor que la de hoy, enfabricación no puede ser si
					//enfab por defecto va a ser si
				}


				if (this.coche.descripcion == '')
					this.coche.descripcion = 'No descripción'

				if (mostrarAlerta)
					alert(mensaje)

				else {
					let newCoche = new Coche()

					let extras = []

					if (this.coche.extra1)
						extras.push(true)
					else
						extras.push(false)
					if (this.coche.extra2)
						extras.push(true)
					else
						extras.push(false)
					if (this.coche.extra3)
						extras.push(true)
					else
						extras.push(false)
					if (this.coche.extra4)
						extras.push(true)
					else
						extras.push(false)
					if (this.coche.extra5)
						extras.push(true)
					else
						extras.push(false)

					newCoche.marca = this.coche.marca
					newCoche.modelo = this.coche.modelo
					newCoche.fechaFabricacion = this.coche.fecha
					newCoche.enFabricacion = this.coche.enFab
					newCoche.extras = extras
					newCoche.descripcion = this.coche.descripcion
					newCoche.imagen = this.coche.base64
					newCoche.precio = this.coche.precio

					//los mando al controlador
					this.controlador.insertarCoche(newCoche)

				}
			},
			atras() {
				window.location.reload()
			},

			modificar() {
				//Valido campos
				let mensaje = ''
				let mostrarAlerta = false

				// Expresiones regulares
				let expMarca = /^[A-Z][A-z]{3,20}$/
				if (!expMarca.test(this.coche.marca)) {
					if (mensaje == '')
						mensaje = "La marca debe de tener la primera letra mayúscula, sin números y un máximo de 20 caracteres"

					mostrarAlerta = true
				}

				let expModelo = /^[A-Z0-9][A-z0-9]{1,20}$/
				if (!expModelo.test(this.coche.modelo)) {
					if (mensaje == '')
						mensaje = "Modelo debe de tener la primera letra mayúscula y mínimo dos caracteres, máximo 20"
					else
						mensaje = mensaje + "\nModelo debe de tener la primera letra mayúscula y mínimo dos caracteres, máximo 20"
					mostrarAlerta = true
				}

				if (this.coche.fecha == '') {
					if (mensaje == '')
						mensaje = "Selecciona una fecha valida"
					else
						mensaje = mensaje + "\nSelecciona una fecha valida"
					mostrarAlerta = true
				}
				else {
					//cuando la fecha sea mayor que la de hoy, enfabricación no puede ser si
					//enfab por defecto va a ser si
				}


				if (this.coche.descripcion == '')
					this.coche.descripcion = 'No descripción'

				if (mostrarAlerta)
					alert(mensaje)

				else {
					let newCoche = new Coche()

					let extras = []

					if (this.coche.extra1)
						extras.push(true)
					else
						extras.push(false)
					if (this.coche.extra2)
						extras.push(true)
					else
						extras.push(false)
					if (this.coche.extra3)
						extras.push(true)
					else
						extras.push(false)
					if (this.coche.extra4)
						extras.push(true)
					else
						extras.push(false)
					if (this.coche.extra5)
						extras.push(true)
					else
						extras.push(false)

					newCoche.marca = this.coche.marca
					newCoche.modelo = this.coche.modelo
					newCoche.fechaFabricacion = this.coche.fecha
					newCoche.enFabricacion = this.coche.enFab
					newCoche.extras = extras
					newCoche.descripcion = this.coche.descripcion
					newCoche.precio = this.coche.precio
					

					if (this.coche.base64 == null)
						newCoche.imagen = this.coche.imagen
					else
						newCoche.imagen = this.coche.base64

					//los mando al controlador
					this.controlador.modificarCoche(this.coche.id, newCoche)

				}
			}
		}
	})


}