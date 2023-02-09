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
		<div class="container-fluid">
			<h1>Propiedad Intelectual</h1>
            <br/>
            <b>Iconos y estilos de boostrap</b>
            <p>Los iconos, colores y estilos de ésta web son de la librería abierta de estilos de boostrap</p>
            <br/>

            <b>Imagen Logo</b>
            <p>Es de licencia gratuita, descargada de <a href="https://www.freepik.es/vector-gratis/coche-deportivo-gris-aislado-vector-blanco_3529804.htm">freepik.es</a></p>
            <p>Tiene licencia gratuita. Más detallado:</p>
            <p>Nuestra licencia permite usar este contenido en</p>
            
            <p>Proyectos comerciales y personales</p>
            <p>En soportes digitales o físicos</p>
            <p>De manera ilimitada y para siempre</p>
            <p>En todo el mundo</p>
            <p>Haciendo modificaciones y diseños derivados</p>
            <br/>
            <b>Reclamaciones de derechos</b>
			<p>Para reclamaciones de derechos de imágenes de la web, contactar con la empresa usuaria de la web con un correo a contacto@gestionacars.es.</p>
            
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