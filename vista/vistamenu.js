export function VistaMenu(controlador) {
	return Vue.createApp({
		data() {
			return {
				controlador: controlador
			}
		},
		template:
			`<div class="container-fluid">
				<span class="navbar-brand" @click=mostrarIndex>
				<!-- Logo Image -->
				<img src="img/logo.png" width="60" alt="" class="d-inline-block align-middle mr-2">
				<!-- Logo Text -->
				<span class="text-uppercase font-weight-bold">Gestionacars</span>
				</span>
	
				<button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
					class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
	
				<div id="navbarSupportedContent" class="collapse navbar-collapse">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active"><span class="nav-link">Tienda</span></li>
						<li class="nav-item"><span class="nav-link" @click=mostrarIndex>Lista de Vehículos</span></li>
						<li class="nav-item"><span href="" class="nav-link" @click=mostrarCrear>Añadir Vehículo</span></li>
					</ul>
				</div>
			</div>`,

		methods: {
			mostrarIndex(evento) {
				this.controlador.mostrarIndex()
			},
			mostrarCrear(evento) {
				this.controlador.mostrarCrear()
			}
		}
	})
}


