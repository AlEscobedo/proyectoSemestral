$(document).ready(function () {

    $("#formRegistrarse").submit(function (validacion) {

        validacion.preventDefault();



        var nombre = $("#nombre").val();
        let mensajeNombre = "";
        let entrarMensajeNombre = false;

        var numeroEnNombre = $("#nombre").val();
        let mensajeNumeroEnNombre = "";
        let entrarMensajeNumeroEnNombre = false;

        var usuario = $("#usuario").val();
        let mensajeUsuario = "";
        let entrarMensajeUsuario = false;

        var direccion = $("#direccion").val();
        let mensajeDireccion = "";
        let entrarMensajeDireccion = false;

        var correo = $("#email").val();
        let mensajeCorreo = "";
        let entrarMensajeCorreo = false;

        var preguntaSecreta = $("#preguntaSeleccionada").val();
        var mensajePreguntaSecreta = "";
        var entrarMensajePreguntaSecreta = false;

        var clave = $("#clave").val();
        let mensajeClave = "";
        let entrarMensajeClave = false;

        var espacioEnClave = clave.indexOf(" ");
        let mensajeEspacioEnClave = "";
        let entrarMensajeEspacioEnClave = false;

        var puntoEnClave = clave.indexOf(".");
        let mensajePuntoEnClave = "";
        let entrarMensajePuntoEnClave = false;

        var claveRepetida = $("#claveRepetida").val();
        let mensajeClaveRepetida = "";
        let entrarMensajeClaveRepetida = false;

        var numeroEnClave = $("#clave");
        let mensajeNumeroEnClave = "";
        let entrarMensajeNumeroEnClave = false;

        var mayusculaEnClave = $("#clave");
        let mensajeMayusculaEnClave = "";
        let entrarMayusculaEnClave = false;

        var minusculaEnClave = $("#clave");
        let mensajeMinusculaEnClave = "";
        let entrarMensajeMinusculaEnClave = false;



        //VALIDACION INPUT NOMBRE
        function esMayuscula(primeraLetra) {
            return primeraLetra == primeraLetra.toUpperCase();
        }

        var primeraLetra = nombre.charAt(0);
        if (!esMayuscula(primeraLetra)) {
            mensajeNombre += "Su nombre debe comenzar con may??scula.";
            entrarMensajeNombre = true;
        }

        if (entrarMensajeNombre) {
            $("#mensajeNombre").html(mensajeNombre);
        }
        else {
            $("#mensajeNombre").html(mensajeNombre);
        }

        if (/\d/.test($("#nombre").val().trim())) {
            mensajeNumeroEnNombre += "No se permiten n??meros en el nombre."
            entrarMensajeNumeroEnNombre = true;
        }

        if (entrarMensajeNumeroEnNombre) {
            $("#mensajeNumeroEnNombre").html(mensajeNumeroEnNombre);
        }
        else {
            $("#mensajeNumeroEnNombre").html(mensajeNumeroEnNombre);
        }
        //FIN VALIDACION INPUT NOMBRE



        //VALIDACION INPUT USUARIO
        if (usuario.trim().length < 4 || usuario.trim().length > 10) {
            mensajeUsuario += "El nombre de usuario debe tener entre 4 y 10 caracteres.";
            entrarMensajeUsuario = true;
        }

        if (entrarMensajeUsuario) {
            $("#mensajeUsuario").html(mensajeUsuario);
        }
        else {
            $("#mensajeUsuario").html(mensajeUsuario);
        }
        //FIN VALIDACION INPUT USUARIO

        //VALIDACION PREGUNTA SECRETA

        if (preguntaSecreta == "0") {
            mensajePreguntaSecreta += "Debe seleccionar una opci??n diferente de la predeterminada.";
            entrarMensajePreguntaSecreta = true;
            console.log(preguntaSeleccionada);
        }

        if (entrarMensajePreguntaSecreta == true) {
            $("#mensajePreguntaSecreta").html(mensajePreguntaSecreta);
        } else {
            $("#mensajePreguntaSecreta").html(mensajePreguntaSecreta);
        }
        // FIN VALIDACI??N PREGUNTA SECRETA


        //Validar correo
        var correo = $("#email").val();
        let validarCorreo = false;
        var mensajeEmail = $("#mensajeEmail").val();

        // Validar que el email este en el formato correcto
        function validarEmail(email) {
            if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
                return true;
            } else {
                return false;
            }
        }

        if (validarEmail(correo)) {
            validarCorreo = true;
        } else {
            mensajeEmail += "El formato del correo no es el correcto Ej: asd@asd.cl<br>";
            validarCorreo = false;
        }

        if (validarCorreo) {
            $("#mensajeEmail").html(mensajeEmail);
        }
        else {
            $("#mensajeEmail").html(mensajeEmail);
        }

        //VALIDACION INPUT CONTRASE??A
        //VALIDACION PARA QUE LAS DOS CLAVES SEAN IGUALES
        if (clave != claveRepetida) {
            mensajeClave += "Las contrase??as deben coincidir."
            entrarMensajeClave = true;
        }

        if (entrarMensajeClave) {
            $("#mensajeClave").html(mensajeClave);
        }
        else {
            $("#mensajeClave").html(mensajeClave);
        }

        //VALIDACION PARA QUE LAS CLAVES CUMPLAN CON UN RANGE DE CARACTERES
        if ((clave.trim().length < 8 || clave.trim().length > 12) && (claveRepetida.trim().length < 8 || claveRepetida.trim().length > 12)) {
            mensajeClaveRepetida += "Las contrase??as deben tener un m??nimo de 8 caracteres y m??ximo de 12.";
            entrarMensajeClaveRepetida = true;
        }

        if (entrarMensajeClaveRepetida) {
            $("#mensajeClaveRepetida").html(mensajeClaveRepetida);
        }
        else {
            $("#mensajeClaveRepetida").html(mensajeClaveRepetida);
        }

        //VALIDACION PARA QUE LA CLAVE NO CONTENGA ESPACIOS EN BLANCO
        if (espacioEnClave > -1) {
            mensajeEspacioEnClave += "La contase??a no puede tener un espacio en blanco."
            entrarMensajeEspacioEnClave = true;
        }

        if (entrarMensajeEspacioEnClave) {
            $("#mensajeEspacioEnClave").html(mensajeEspacioEnClave);
        }
        else {
            $("#mensajeEspacioEnClave").html(mensajeEspacioEnClave);
        }

        //VALIDACION PARA QUE LA CLAVE CONTENGA AL MENOS UN NUMERO
        if (/\d/.test($("#clave").val().trim()) == false) {
            mensajeNumeroEnClave += "Su cotrase??a debe contener al menos un n??mero."
            entrarMensajeNumeroEnClave = true;
        }

        if (entrarMensajeNumeroEnClave) {
            $("#mensajeNumeroEnClave").html(mensajeNumeroEnClave);
        }
        else {
            $("#mensajeNumeroEnClave").html(mensajeNumeroEnClave);
        }


        //VALIDANIO PARA QUE LA CONTRASE??A CONTENGA AL MENOS UNA LETRA MAYUSCULA 
        if (/[A-Z]+/.test($("#clave").val().trim()) == false) {
            mensajeMayusculaEnClave += "Su cotrase??a debe contener al menos una letra en may??sculas."
            entrarMensajeMayusculaEnClave = true;
        }

        if (entrarMensajeMayusculaEnClave) {
            $("#mensajeMayusculaEnClave").html(mensajeMayusculaEnClave);
        }
        else {
            $("#mensajeMayusculaEnClave").html(mensajeMayusculaEnClave);
        }


        //VALIDACION PARA QUE LA CONTRASE??A TENGA A MENOS UNA MINUSCULA
        if (/[a-z]+/.test($("#clave").val().trim()) == false) {
            mensajeMinusculaEnClave += "Su cotrase??a debe contener al menos una letra en min??scula."
            entrarMensajeMinusculaEnClave = true;
        }

        if (entrarMensajeMinusculaEnClave) {
            $("#mensajeMinusculaEnClave").html(mensajeMinusculaEnClave);
        }
        else {
            $("#mensajeMinusculaEnClave").html(mensajeMinusculaEnClave);
        }
        //FIN VALIDACION INPUT CONTRASE??A

        //APIS
        var selectRegion = $("#region").val();
        let mensajeRegion = "";
        let entrarRegion = false;

        var selectComuna = $("#comuna").val();
        let mensajeComuna = "";
        let entrarComuna = false;

        //Region
        if (selectRegion == "0") {
            mensajeRegion += "Debe seleccionar una opci??n diferente de la predeterminada.";
            entrarRegion = true;
        }

        if (entrarRegion == true) {
            $("#mensajeRegion").html(mensajeRegion);
        } else {
            $("#mensajeRegion").html(mensajeRegion);
        }

        //Comuna
        if (selectComuna == "0") {
            mensajeComuna += "Debe seleccionar una opci??n diferente de la predeterminada.";
            entrarComuna = true;
        }

        if (entrarComuna == true) {
            $("#mensajeComuna").html(mensajeComuna);
        } else {
            $("#mensajeComuna").html(mensajeComuna);
        }

    })

    $.get("https://apis.digital.gob.cl/dpa/regiones", function (data) {
        $.each(data, function (i, item) {
            $("#region").append('<option value= "'+item.codigo+'">' + item.nombre + '</option>');
        })
    })
    $("#region").change(function () {

        var reg = $("#region").val();

        $("#comuna").empty();
        $("#comuna").append('<option value="0">Seleccione una Comuna</option>');

        $("#comuna").each(function () {
            $.get("https://apis.digital.gob.cl/dpa/regiones/" + reg + "/comunas", function (data) {
                    $.each(data, function (e, objet) {
                        $("#comuna").append('<option>' + objet.nombre + '</option>');
                    })
                })
        })
    })
})