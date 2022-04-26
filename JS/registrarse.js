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

        let espacioEnClave = clave.indexOf(" ");
        let mensajeEspacioEnClave = "";
        let entrarMensajeEspacioEnClave = false;




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
            mensajeUsuario += "El nombre de usuario debe tener entre 4 y 10 caracteres.";
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
        //VALIDACION PARA QUE LAS DOS CLAVES SEAN IGUALES
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

        //VALIDACION PARA QUE LAS CLAVES CUMPLAN CON UN RANGE DE CARACTERES
        if((clave.trim().length < 8 || clave.trim().length > 12) && (claveRepetida.trim().length < 8 || claveRepetida.trim().length > 12)){
            mensajeClaveRepetida += "Las contraseñas deben tener un mínimo de 8 caracteres y máximo de 12.";
            entrarMensajeClaveRepetida = true;
        }

        if(entrarMensajeClaveRepetida){
            $("#mensajeClaveRepetida").html(mensajeClaveRepetida);
        }
        else{
            $("#mensajeClaveRepetida").html(mensajeClaveRepetida);
        }

        //VALIDACION PARA QUE LA CLAVE NO CONTENGA ESPACIOS EN BLANCO
        if(espacioEnClave > -1){
            mensajeEspacioEnClave += "La contaseña no puede tener un espacio en blanco."
            entrarMensajeEspacioEnClave = true;
        }

        if(entrarMensajeEspacioEnClave){
            $("#mensajeEspacioEnClave").html(mensajeEspacioEnClave);
        }
        else{
            $("#mensajeEspacioEnClave").html(mensajeEspacioEnClave);
        }
        //FIN VALIDACION INPUT CONTRASEÑA


    })


})