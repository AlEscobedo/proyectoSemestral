$(document).ready(function(){

    $("#formRegistrarse").submit(function(validacion){

        validacion.preventDefault();

        

        var nombre = $("#nombre").val();
        let mensajeNombre = "";
        let entrarMensajeNombre = false;

        var usuario = $("#usuario").val();
        let mensajeUsuario = "";
        let entrarMensajeUsuario = false;
        
        var direccion = $("#direccion").val();
        let mensajeDireccion = "";
        let entrarMensajeDireccion = false;

        var correo = $("#correo").val();
        let mensajeCorreo = "";
        let entrarMensajeCorreo = false;

        var fecha = $("#fecha").val();
        let mensajeFecha = "";
        let entrarMensajeFecha = false;

        var respuestaSecreta = $("#respuestaSecreta").val();
        let mensajeRespuestaSecreta = "";
        let entrarMensajeRespuestaSecreta = false;

        var clave = $("#clave").val();
        let mensajeClave = "";
        let entrarMensajeClave = false;

        var claveRepetida = $("#claveRepetida").val();
        let mensajeClaveRepetida = "";
        let entrarMensajeClaveRepetida = false;

        //VALIDACION INPUT NOMBRE
        function esMayuscula(primeraLetra){
            return primeraLetra == primeraLetra.toUpperCase();
        }

        var primeraLetra = nombre.charAt(0);
        if(!esMayuscula(primeraLetra)){
            mensajeNombre += "Su nombre debe comenzar con mayúscula.";
            entrarMensajeNombre = true;
        }


        if(entrarMensajeNombre){
            $("#mensajeNombre").html(mensajeNombre);
        }
        else{
            $("#mensajeNombre").html(mensajeNombre);
        }
        //FIN VALIDACION INPUT NOMBRE



        //VALIDACION INPUT USUARIO
        if(usuario.trim().length < 4 || usuario.trim().length > 10){
            mensajeUsuario += "El nombre de usuario debe tener entre 8 y 16 caracteres.";
            entrarMensajeUsuario = true;
        }

        if(entrarMensajeUsuario){
            $("#mensajeUsuario").html(mensajeUsuario);
        }
        else{
            $("#mensajeUsuario").html(mensajeUsuario);
        }
        //FIN VALIDACION INPUT USUARIO



        //VALIDACION INPUT CONTRASEÑA
        if(clave != claveRepetida){
            mensajeClave += "Las contraseñas deben coincidir."
            entrarMensajeClave = true;
        }

        if(entrarMensajeClave){
            $("#mensajeClave").html(mensajeClave);
        }
        else{
            $("#mensajeClave").html(mensajeClave);
        }

        //FIN VALIDACION INPUT CONTRASEÑA


    })


})