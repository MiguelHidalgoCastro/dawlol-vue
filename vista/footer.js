export function Footer(controlador) {
    return Vue.createApp({
        data() {
            return {
                controlador: controlador
            }
        },
        template: `
        <div class="row p-4 bg-dark text-secondary">
            <div class="col-xs-12 col-md-6 col-lg-2">
                <p class="h3">GESTIONACARS</p>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-2">
                <span class="h5 text-decoration-none" @click=mostrarTerminos>Términos & Condiciones</span>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-2">
                <span class="h5 text-decoration-none" @click=mostrarAvisosLegales>Avisos Legales</span>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-2">
                <span class="h5 text-decoration-none" @click=mostrarPolitica>Política de Cookies</span>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-2">
                <span class="h5 text-decoration-none" @click=mostrarPropiedad>Propiedad Intelectual</span>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-2">
                <span class="h5 text-decoration-none" @click=mostrarContacto>Contacto</span>
            </div>
            <div class="col-xs-12">
                <div class="text-white text-center">Copyright - Todos los derechos reservados © 2023</div>
            </div>
        </div>
    `,

        methods: {
            mostrarTerminos() {
                this.controlador.mostrarTerminos()
            },

            mostrarAvisosLegales() {
                this.controlador.mostrarAvisosLegales()
            },
            mostrarContacto() {
                this.controlador.mostrarContacto()
            },
            mostrarPolitica() {
                this.controlador.mostrarPolitica()
            },
            mostrarPropiedad() {
                this.controlador.mostrarPropiedad()
            }

        }
    })
}