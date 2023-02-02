export { VistaDatosEmpresa }
const VistaDatosEmpresa = Vue.createApp({
	data() {
		return {
			controlador: null,
            titulo: 'Vista Datos Empresa',
            clase: 'inactivo'
		}
	},
	template:`
	<div class="container" :class=clase>
        <h1>Datos Empresa</h1>
	</div>	
    `,

	/*'<p><span @click=handler1>Vista Lista</span> <span @click=handler2>Vista Formulario</span></p>',*/
	methods: {
		mostrar(activo) {
			if (activo)
				this.clase = 'activo'
			else
				this.clase = 'inactivo'
		}
	}
})
