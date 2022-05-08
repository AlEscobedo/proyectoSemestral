$(document).ready(function () {
    $("#formulariorc").submit(function (e) {
        var mail = $("#mail").val();
        var select = $("#").val();


        let mensajemail = "";
        let mensajeselect = "";

        let enviarmail = false;
        let enviarselect = false;

        if (select == "Seleccione una Pregunta"(select)) {
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
})