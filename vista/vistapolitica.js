export function VistaPolitica(controlador) {
    return Vue.createApp({
        data() {
            return {
                controlador: controlador,
                titulo: 'Vista Politica',
                clase: 'inactivo'
            }
        },
        template: `
        <div class="container" :class=clase>
            <h1>Politica de Cookies</h1>
            <p>que es una cookie. como eliminarlas en cada navegador, 
            que cookies utilizo y para que sirven, quien las gestiona</p>
        </div>`,

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