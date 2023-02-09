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
            <h1>Política y Configuración de Cookies</h1>
            <p>Este servicio utiliza Cookies y tecnologías similares para analizar nuestros servicios y mejorar y optimizar la comercialización de los espacios publicitarios.</p>
            <p> A continuación encontrarás información detallada sobre qué son las “Cookies”, cómo puedes desactivarlas en tu navegador y cómo bloquear específicamente la instalación de Cookies no necesarias.</p>
        
            <b>¿Qué son las Cookies y cómo se utilizan en los servicios del Editor?</b>
            <p>Las Cookies son archivos que el sitio web o la aplicación que utilizas instala en tu navegador o en tu dispositivo (Smartphone, tableta o televisión conectada) durante el uso del servicio, y permiten almacenar información sobre tu visita y asignarte el Pseudónimo.</p>
            <p>
            Los servicios del Editor utilizan Cookies para:

            Asegurar que los servicios pueden funcionar correctamente.
            Almacenar tus preferencias, como el idioma que has seleccionado o el tamaño de letra.
            Conocer tu experiencia de navegación.
            Recopilar información estadística, como qué páginas has visto o cuánto tiempo has estado en nuestros medios.
            Optimizar la comercialización de los espacios publicitarios.
            Optimizar tu navegación, adaptando la información y los servicios ofrecidos a tus intereses, para proporcionarte una mejor experiencia siempre que nos visites.
            Ten en cuenta en cualquier caso que, si modificas y/o bloqueas la instalación de las Cookies, la calidad del funcionamiento de los Servicios o su disponibilidad pueden verse afectadas.
            </p>

            <b>¿Quién gestiona las cookies?</b>
            <p>Nosotros cómo empresa gestionamos las cookies para estadísticas propias y no se las vendemos ni la utilizan terceros</p>

            <b>¿Cuáles son los diferentes tipos de Cookies que utiliza el Editor?</b>
            <br/>
            <u>Número de visitas</u>
            <p>Con éstos datos no hacemos nada más que para estadísticas propias para la empresa de desarrollo</p>

            <u>Último insertado</u>
            <p>Con ésta información guardamos el id del último objeto insertado</p>


            <b>¿Cómo puedes administrar tus Cookies?</b>
            <p>Puedes seleccionar la que quieras de las dos en los ticks, si no quieres ninguna, puedes pulsar en NO y no se guardará ninguna cookie</p>

            <u>Cómo gestionar las cookies según el navegador</u>
            <p>Navegador Opera™ haz click <a href="https://help.opera.com/en/latest/web-preferences/#cookies">aquí.</a></p>
            <p>Navegador Google Chrome™ haz click <a href="https://support.google.com/chrome/answer/95647">aquí.</a></p>
            <p>Navegador Google Chrome™ en Android haz click <a href="https://support.google.com/chrome/answer/95647">aquí.</a></p>
            <p>Navegador Microsoft Edge™ haz click <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09#:~:text=En%20Edge%2C%20seleccione%20Configuraci%C3%B3n%20y%20m%C3%A1s%20%3E%20Configuraci%C3%B3n%20%3E%20%3E%20Cookies,sitio%20cuyas%20cookies%20desea%20eliminar.">aquí.</a></p>
            <p>Navegador Mozilla Firefox™ haz click <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias">aquí.</a></p>
            <p>Navegador Safari™ en macOS haz click <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">aquí.</a></p>
            <p>Navegador Safari™ en IOS, haz click <a href="https://support.apple.com/es-es/HT201265">aquí.</a></p>

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