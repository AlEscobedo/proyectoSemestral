$(document).ready(function () {
    $("#formulariorc").submit(function (e) {
        e.preventDefault();

        var pregunta = $("#preguntasecreta").val();

        let mensajeselect = "";
        let enviarselect = false;

        if (validarOpcion(pregunta)) {
            mensajeselect += "Debe elegir una opcion";
            enviarselect = true;
        } else {
            mensajeselect += "Opcion elegida correctamente"
            enviarselect = true;
        }

        if (enviarselect) {
            $("#mensajeselect").html(mensajeselect);
        } else {
            $("#mensajeselect").html(mensajeselect);
        }

    })
    function validarOpcion(pregunta) {
        return pregunta == "select";
    }

})