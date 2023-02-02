export { VistaFooter }
const VistaFooter = Vue.createApp({
	data() {
		return {
			controlador: null
		}
	},
	template:`
        <div class="row p-4 bg-dark text-secondary align-middle">
            <div class="col-xs-12 col-md-6 col-lg-3">
                <p class="h3">GESTIONACARS</p>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <span class="h5 text-decoration-none" @click=mostrarTerminos>Términos & Condiciones</span>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <span class="h5 text-decoration-none" @click=mostrarDatosEmpresa>Datos de la empresa</span>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <span class="h5 text-decoration-none" @click=mostrarContacto>Contacto</span>
            </div>
            <div class="col-xs-12">
                <div class="text-white text-center">Copyright - Todos los derechos reservados © 2023</div>
            </div>
        </div>
    `,

	methods: {
		mostrarTerminos(){
            this.controlador.mostrarTerminos()
        },

        mostrarDatosEmpresa(){
            this.controlador.mostrarDatosEmpresa()
        },
        mostrarContacto(){
            this.controlador.mostrarContacto()
        }

	}
})
