export function VistaFormularioContacto(controlador) {
    return Vue.createApp({
        data() {
            return {
                controlador: controlador,
                titulo: 'Vista Formulario Contacto',
                clase: 'inactivo'
            }
        },
        template: `
<div class="mt-5" :class=clase>
    <div class="container">
            <div class="container">
                <h4>GESTIONACARS</h4>
            </div>
            <div class="container mt-2 mb-1">
                <div role="form" id="Formulario" action="../php/contacto2.php" method="POST">
                    <div class="form-group mb-1">
                        <label class="control-label" for="contactoNombre">Nombre:</label>
                        <input type="text" class="form-control" id="contactoNombre" name="contactoNombre"
                            placeholder="Introduzca su nombre"/>
                    </div>
                    <div class="form-group mb-1">
                        <label class="control-label" for="contactoMotivo">Motivo de Contacto:</label>
                        <select name="contactoMotivo" class="form-control">
                            <option value="general">Consulta General</option>
                            <option value="cita">Pedir Cita</option>
                            <option value="problema">Informar de un problema</option>
                        </select>
                    </div>
                    <div class="form-group mb-1">
                        <label class="control-label" for="contactoEmpresa">Empresa:</label>
                        <input type="text" class="form-control" id="contactoEmpresa" name="contactoEmpresa"
                            placeholder="Introduzca el nombre de su empresa"/>
                    </div>
                    <div class="form-group mb-1">
                        <label class="control-label" for="contactoCorreo">Correo Electrónico:</label>
                        <input type="email" class="form-control" id="contactoCorreo" name="contactoCorreo"
                            placeholder="Introduzca su correo electrónico"/>
                    </div>
                    <div class="form-group mb-1">
                        <label class="control-label" for="contactoMensaje">Mensaje:</label>
                        <textarea rows="5" cols="30" class="form-control" id="contactoMensaje" name="contactoMensaje"
                            placeholder="Introduzca su mensaje"></textarea>
                    </div>
                    <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" name="contactoCheck" id="contactoCheck">
                        <label class="form-check-label" for="contactoCheck">He leído y acepto los <span id="terms" class="text-primary" @click=mostrarTerminos><u>Términos y
                                Condiciones</u></span></label>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Enviar</button>

                    </div>
                </div>
            </div>
        </div>
</div>    `,
        methods: {
            mostrar(activo) {
                if (activo)
                    this.clase = 'activo'
                else
                    this.clase = 'inactivo'
            },
            mostrarTerminos() {
                this.controlador.mostrarTerminos()
            }
        }
    })
}