//TODO EL CODIGO VA ADENTRO
$(document).ready(function(){

    $("#formIniciarSesion").submit(function(validacion){
        //PA QUE NO SE EJECUTA DE INMEDIATO
        validacion.preventDefault();


        //VARIABLES
        var usuario = $("#usuario").val();
        let mensajeUsuario = "";
        let entrarMensajeUsuario = false;

        var clave = $("#clave").val();
        let mensajeClave = "";
        let entrarMensajeClave = false;


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
    })
})