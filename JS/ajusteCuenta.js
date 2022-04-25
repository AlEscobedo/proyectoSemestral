$(document).ready(function () {
    // Todo el codigo dentro

    $("#formAjuste").submit(function (e) {
        e.preventDefault();

        // Validar nombre
        var nom = $("#nombre").val();
        var primeraLetra = nom.charAt(0);
        let validarNom = false;
        let mensajeNom = "";

        if (validarCaracteres(nom)) {
            if (!esMayuscula(primeraLetra)) {
                mensajeNom += "El nombre debe comenzar con mayúscula<br>";
                validarNom = false;
            } else {
                mensajeNom += "Datos Correctos<br>";
                validarNom = true;
            }

        } else {
            mensajeNom += "El nombre debe contener solo caracteres<br>";
            validarNom = false;
        }

        if (validarNom) {
            $("#mensajeNomb").html(mensajeNom);
        }
        else {
            $("#mensajeNomb").html(mensajeNom);
        }


        //Validar Longitud Nombre Usuario
        var usu = $("#userName").val();
        let validarLongUsu = false;
        let mensajeUsu = "";

        if (validarLongitud(usu)) {
            mensajeUsu += "El nombre de usuario debe tener una longitud entre 4 y 10 caracteres<br>";
            validarLongUsu = false;
        } else {
            mensajeUsu += "Datos Correctos<br>";
            validarLongUsu = true;
        }

        if (validarLongUsu) {
            $("#mensajeUsu").html(mensajeUsu);
        } else {
            $("#mensajeUsu").html(mensajeUsu);
        }



        //Validar correo
        var correo = $("#email").val();
        let validarCorreo = false;
        var mensajeEmail = $("#mensajeEmail").val();

        if (validarEmail(correo)) {
            mensajeEmail += "Datos Correctos<br>"
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

        //Validar Contra nueva no sea igual a la actual
        var passActual = $("#passA").val();
        var passNueva = $("#passO").val();
        var mensajeContra = $("#mensajePass").val();
        let validarContra = false;

        if (!validarPass(passActual, passNueva)) {
            mensajeContra += "Datos Correctos<br>"
            let validarContra = true;
        } else {
            mensajeContra += "La contraseña nueva no puede ser la misma que Actual<br>"
            let validarContra = false;
        }

        if (validarContra) {
            $("#mensajePass").html(mensajeContra);
        }
        else {
            $("#mensajePass").html(mensajeContra);
        }

    });

    // Previsualizar la foto de perfil
    function init() {
        var inputFile = document.getElementById('Avatar');
        inputFile.addEventListener('change', mostrarImagen, false);
    }

    function mostrarImagen(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = document.getElementById('fotoPerfil');
            img.src = event.target.result;
        }
        reader.readAsDataURL(file);
    }

    window.addEventListener('load', init, false);


    // Validar que el nombre no contenga numeros
    function validarCaracteres(nombre) {
        const caracteres = new RegExp('^[A-Z ]+$', 'i', " ");
        if (nombre.match(caracteres)) {
            return true;
        }
        else {

            return false;
        }
    }
    // Validar que el nombre comience con mayuscula
    function esMayuscula(primeraLetra) {
        return primeraLetra == primeraLetra.toUpperCase();
    }

    // Validar que el nombre de ususario tenga una longitud entre 4 y 10 caracteres
    function validarLongitud(usuario) {
        if (usuario.trim().length < 4 || usuario.trim().length > 10) {
            return true;
        } else {
            return false;
        }
    }


    // Validar que el email este en el formato correcto
    function validarEmail(email) {
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    // Validar que las contras no sean iguales
    function validarPass(pass1, pass2) {
        if (pass1 == pass2) {
            return true;
        }
        else {
            return false;
        }
    }
})
// Nada de codigo fuera