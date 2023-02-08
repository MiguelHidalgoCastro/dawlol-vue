export { VistaDatosEmpresa }
const VistaDatosEmpresa = Vue.createApp({
	data() {
		return {
			controlador: null,
			titulo: 'Vista Datos Empresa',
			clase: 'inactivo'
		}
	},
	template: `
	<div class="container" :class=clase>
		<div class="containe-fluid border mt-3">
			<h1>Datos Empresa</h1>
			<h2>GESTIONACARS S.L.U.</h2>
			<h2>CIF B12345678</h2>
			<h2>CONTACTO: 619887722</h2>
			<h2>CORREO: gestionacarsslu@gmail.com</h2>
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
