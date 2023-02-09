export function VistaPropiedad(controlador) {
    return Vue.createApp({
        data() {
            return {
                controlador: controlador,
                titulo: 'Vista Propiedad Intelectual',
                clase: 'inactivo'
            }
        },
        template: `
	<div class="container" :class=clase>
		<div class="containe-fluid border mt-3">
			<h1>Propiedad Intelectual</h1>
            <p>Iconos de boostrap</p>
			<p>Para reclamaciones de derechos de imágenes de la web, contactar con blablabla</p>
		</div>

	</div>	
    `,

        methods: {
            mostrar(activo) {
                if (activo)
                    this.clase = 'activo'
                else
                    this.clase = 'inactivo'
            }
        }
    })
}