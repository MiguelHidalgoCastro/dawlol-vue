export { VistaFormulario }
const VistaFormulario = Vue.createApp({
	data() {
		return {
			controlador: null,
			titulo: 'Vista Formulario',
			clase: 'inactivo',
			opcion: 'none'
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
				<input type="text" class="form-control" id="imarca" placeholder="Example -> Volkswagen">
			</div>
			<div class="col">
				<label for="imodelo">Modelo</label>
				<input type="text" class="form-control" id="imodelo" placeholder="Example -> Golf">
			</div>
		</div>
		<div class="row mb-1">
			<div class="col">
				<label for="ifecha">Fecha Fabricación</label>
				<input type="text" class="form-control" id="ifecha" name="ifecha">
			</div>
			<div class="col">
				<label for="enFab">En Fabricación</label>
				<select id="enFab" class="form-select" name="enFab">
					<option id="fab1" selected>Si</option>
					<option id="fab0">No</option>
				</select>
			</div>
		</div>
		<div class="row mb-1">
			<div class="col form-group">
				<label>Extras</label>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra1" id="extra1" />
					<label class="form-check-label" for="extra1">ABS</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra2" id="extra2" />
					<label class="form-check-label" for="extra2">ESP</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra3" id="extra3" />
					<label class="form-check-label" for="extra3">Aire Acondicionado</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra4" id="extra4" />
					<label class="form-check-label" for="extra4">Interior Premium</label>
				</div>

				<div class="form-check">
					<input class="form-check-input" type="checkbox" name="extra5" id="extra5" />
					<label class="form-check-label" for="extra5">Sensores Aparcamiento</label>
				</div>

			</div>
			<div class="col">
				<div class="form-group">
					<label for="textDescripcion">Descripción</label>
					<textarea class="form-control" id="textDescripcion" rows="5"
						title="Ésto es un texto de prueba para probar JQueryUI"></textarea>
				</div>
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-1" style="display: none;" id="divImagenPrevia">
				<span>VistaPrevia</span>
				<img src="" id="imagenPrevia" width="95%" alt="imagen en pequeño del coche">
			</div>
			<div class="col">
				<label for="imagen" class="form-label">Elije Imágenes</label>
				<input class="form-control" type="file" id="imagen" name="imagen">
			</div>

		</div>
		<div class="row mb-1 float-end">
			<div class="col">
				<button class="btn btn-secondary" id="btnCancelar">Atrás</button>
				<button class="btn btn-success" id="btnAceptar">Aceptar</button>
				<button class="btn btn-success" id="btnModificar">Modificar</button>
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
		
		ocultarObj(){
			if(this.opcion == 'crear'){
				$('#tituloCrear').css({'display': 'block'})
				$('#tituloModificar').css({'display':'none'})
				$('#tituloConsultar').css({'display':'none'})
				$('#btnAceptar').css({'display':'inline'})
				$('#btnModificar').css({'display':'none'})
			}
			if(this.opcion == 'modificar'){
				$('#tituloCrear').css({'display': 'none'})
				$('#tituloModificar').css({'display':'block'})
				$('#tituloConsultar').css({'display':'none'})
				$('#btnAceptar').css({'display':'none'})
				$('#btnModificar').css({'display':'inline'})
			}
			if(this.opcion == 'consultar'){
				$('#tituloCrear').css({'display': 'none'})
				$('#tituloModificar').css({'display':'none'})
				$('#tituloConsultar').css({'display':'block'})
				$('#btnAceptar').css({'display':'none'})
				$('#btnModificar').css({'display':'none'})
			}
		}
	}
})
