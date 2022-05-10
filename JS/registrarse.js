$(document).ready(function(){

    $("#formRegistrarse").submit(function(validacion){

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

        var fecha = $("#fecha").val();
        let mensajeFecha = "";
        let entrarMensajeFecha = false;

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

        if ( /\d/.test($("#nombre").val().trim()) ) {
            mensajeNumeroEnNombre += "No se permiten números en el nombre."
            entrarMensajeNumeroEnNombre = true;
        }

        if(entrarMensajeNumeroEnNombre){
            $("#mensajeNumeroEnNombre").html(mensajeNumeroEnNombre);
        }
        else{
            $("#mensajeNumeroEnNombre").html(mensajeNumeroEnNombre);
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

        //VALIDACION PREGUNTA SECRETA

        if(preguntaSecreta == "0"){
            mensajePreguntaSecreta += "Debe seleccionar una opción diferente de la predeterminada."; 
            entrarMensajePreguntaSecreta = true;
            console.log(preguntaSeleccionada);
        }

        if(entrarMensajePreguntaSecreta == true ){
            $("#mensajePreguntaSecreta").html(mensajePreguntaSecreta);
        }else{
            $("#mensajePreguntaSecreta").html(mensajePreguntaSecreta);
        }
        // FIN VALIDACIÓN PREGUNTA SECRETA


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

        //VALIDACION PARA QUE LA CLAVE CONTENGA AL MENOS UN NUMERO
        if ( /\d/.test($("#clave").val().trim()) == false ) {
            mensajeNumeroEnClave += "Su cotraseña debe contener al menos un número."
            entrarMensajeNumeroEnClave = true;
        }

        if(entrarMensajeNumeroEnClave){
            $("#mensajeNumeroEnClave").html(mensajeNumeroEnClave);
        }
        else{
            $("#mensajeNumeroEnClave").html(mensajeNumeroEnClave);
        }


        //VALIDANIO PARA QUE LA CONTRASEÑA CONTENGA AL MENOS UNA LETRA MAYUSCULA 
        if ( /[A-Z]+/.test($("#clave").val().trim()) == false ) {
            mensajeMayusculaEnClave += "Su cotraseña debe contener al menos una letra en mayúsculas."
            entrarMensajeMayusculaEnClave = true;
        }

        if(entrarMensajeMayusculaEnClave){
            $("#mensajeMayusculaEnClave").html(mensajeMayusculaEnClave);
        }
        else{
            $("#mensajeMayusculaEnClave").html(mensajeMayusculaEnClave);
        }


        //VALIDACION PARA QUE LA CONTRASEÑA TENGA A MENOS UNA MINUSCULA
        if ( /[a-z]+/.test($("#clave").val().trim()) == false ) {
            mensajeMinusculaEnClave += "Su cotraseña debe contener al menos una letra en minúscula."
            entrarMensajeMinusculaEnClave = true;
        }

        if(entrarMensajeMinusculaEnClave){
            $("#mensajeMinusculaEnClave").html(mensajeMinusculaEnClave);
        }
        else{
            $("#mensajeMinusculaEnClave").html(mensajeMinusculaEnClave);
        }
        //FIN VALIDACION INPUT CONTRASEÑA


    })


})