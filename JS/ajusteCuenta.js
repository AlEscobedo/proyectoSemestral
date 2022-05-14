$(document).ready(function () {
    // Todo el codigo dentro

    $("#formAjuste").submit(function (e) {
        e.preventDefault();

        //Validar Nombre
        var nombre = $("#nombre").val();
        var mensajeNombre = $("#mensajeNombre").val();
        var primeraLetra = nombre.charAt(0);

        if (!validarCaracteres(nombre)) {
            mensajeNombre += "EL nombre no puede contener numeros";
            $("#mensajeNombre").html(mensajeNombre);
        } else {
            if (!esMayuscula(primeraLetra)) {
                mensajeNombre += "EL nombre debe empezar con mayúscula";
                $("#mensajeNombre").html(mensajeNombre);
            }else{
                mensajeNombre += "Datos Correctos";
                $("#mensajeNombre").html(mensajeNombre);
            }
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

        //APIS
        var selectRegion = $("#region").val();
        let mensajeRegion = "";
        let entrarRegion = false;

        var selectComuna = $("#comuna").val();
        let mensajeComuna = "";
        let entrarComuna = false;

        //Region
        if (selectRegion == "0") {
            mensajeRegion += "Debe seleccionar una opción diferente de la predeterminada.<br>";
            entrarRegion = true;
        }

        if (entrarRegion == true) {
            $("#mensajeRegion").html(mensajeRegion);
        } else {
            $("#mensajeRegion").html(mensajeRegion);
        }

        //Comuna
        if (selectComuna == "0") {
            mensajeComuna += "<br>Debe seleccionar una opción diferente de la predeterminada.<br>";
            entrarComuna = true;
        }

        if (entrarComuna == true) {
            $("#mensajeComuna").html(mensajeComuna);
        } else {
            $("#mensajeComuna").html(mensajeComuna);
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

    /*
    // Validar que el nombre de ususario tenga una longitud entre 4 y 10 caracteres
    function validarLongitud(usuario) {
        if (usuario.trim().length < 4 || usuario.trim().length > 10) {
            return true;
        } else {
            return false;
        }
    }
    */


    // Validar que el email este en el formato correcto
    function validarEmail(email) {
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    $.get("https://apis.digital.gob.cl/dpa/regiones", function (data) {
        $.each(data, function (i, item) {
            $("#region").append('<option value= "' + item.codigo + '">' + item.nombre + '</option>');
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

    // Habilitar y deshabilitar eleccion de nombre
    $("#habilitarNombre").click(function () {
        $("#nombre").prop("disabled", false);
    });
    $("#deshabilitarNombre").click(function () {
        $("#nombre").prop("disabled", true);
    });

    // Habilitar y deshabilitar eleccion de region y comuna
    $("#habilitarComuna").click(function () {
        $("#region").prop("disabled", false);
        $("#comuna").prop("disabled", false);
    });
    $("#deshabilitarComuna").click(function () {
        $("#region").prop("disabled", true);
        $("#comuna").prop("disabled", true);
    });

    // Habilitar y deshabilitar direccion
    $("#habilitarDireccion").click(function () {
        $("#dir").prop("disabled", false);
    });
    $("#deshabilitarDireccion").click(function () {
        $("#dir").prop("disabled", true);
    });

    // Habilitar y deshabilitar email
    $("#habilitarEmail").click(function () {
        $("#email").prop("disabled", false);
    });
    $("#deshabilitarEmail").click(function () {
        $("#email").prop("disabled", true);
    });
})
// Nada de codigo fuera