export { VistaTerminos }
const VistaTerminos = Vue.createApp({
    data() {
        return {
            controlador: null,
            titulo: 'Vista Terminos',
            clase: 'inactivo'
        }
    },
    template: `
    <div class="container" :class=clase>
    <h1>Términos y Condiciones</h1>
    <p>
        Identidad: Webs Almendralejo - NIF: 45557964Y
        Dirección postal: Empresa de desarrollo de software
        Teléfono: 619883479 - Correo electrónico: websalmendralejo0@gmail.com

        “En Webs Almendralejo tratamos la información que nos facilita con el fin de prestarles el servicio
        solicitado y realizar su facturación. Los datos proporcionados se conservarán mientras se mantenga la
        relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales y atender las
        posibles responsabilidades que pudieran derivar del cumplimiento de la finalidad para la que los datos
        fueron recabados. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal.
        Usted tiene derecho a obtener información sobre si en Webs Almendralejo estamos tratando sus datos
        personales, por lo que puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de
        datos y oposición y limitación a su tratamiento ante Webs Almendralejo, Empresa de desarrollo de software o
        en la dirección de correo electrónico reclamaciones@websalmendalejo.com, adjuntando copia de su DNI o
        documento equivalente. Asimismo, y especialmente si considera que no ha obtenido satisfacción plena en el
        ejercicio de sus derechos, podrá presentar una reclamación ante la autoridad nacional de control
        dirigiéndose a estos efectos a la Agencia Española de Protección de Datos, C/ Jorge Juan, 6 – 28001 Madrid.
        Asimismo, solicitamos su autorización para ofrecerle productos y servicios relacionados con los contratados
        y fidelizarle como cliente.”
    </p>
        Acepto sin reservas la Política de Protección de Datos personales
        SI NO
        </div>`,

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
