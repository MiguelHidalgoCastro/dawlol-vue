export { VistaFormularioContacto }
const VistaFormularioContacto = Vue.createApp({
    data() {
        return {
            controlador: null,
            titulo: 'Vista Formulario Contacto',
            clase: 'inactivo'
        }
    },
    template: `
<div class="mt-5" :class=clase>
    <div class="container">
            <div class="container">
                <h4>GESTIONACARS</h4>
                <div class="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.093421244403!2d-6.956451284650261!3d38.876104379573924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd16e5cfc2a5f865%3A0xd7c3ba9075baee7b!2sEscuela%20Virgen%20de%20Guadalupe!5e0!3m2!1ses!2ses!4v1675323688209!5m2!1ses!2ses"
                        style="border:0" allowfullscreen="" frameborder="0" height="250" width="100%"></iframe>
                </div>
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
                        <label class="form-check-label" for="contactoCheck">He leído y acepto los <a href="">Términos y
                                Condiciones</a></label>
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
        }
    }
})
