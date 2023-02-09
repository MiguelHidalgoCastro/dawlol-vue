export function VistaAvisoLegal(controlador) {
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista Avisos Legales',
				clase: 'inactivo'
			}
		},
		template: `
	<div class="container" :class=clase>
		<div class="containe-fluid border mt-3">
			<h1>Aviso Legal</h1>
			<p>
			La presente página web, con dirección URL www.gestionacars.es, 
			es operada por la sociedad GESTIONACARS, S.L., con CIF B-12345678, 
			inscrita en el Registro Mercantil de Madrid, al tomo 15.910, folio 98, sección 8, hoja M-268.915, 
			Inscripción 1ª, cuyo domicilio se encuentra en Madrid, calle Josefa Valcárcel 40bis.
			Puede obtener más información remitiendo un correo a la siguiente dirección de correo electrónico 
			de contacto contacto@gestionacars.es.
			</p>
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