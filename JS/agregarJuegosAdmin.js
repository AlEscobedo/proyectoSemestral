$(document).ready(function() {   

    $("#formularioAgregarJuego").submit(function(validacion) {

        validacion.preventDefault();

        var nomJuego = $("#nomJuego").val();
        let mensajeNomJuego = "";
        let entrarMensajeNomJuego = false;
        
        var descJuego = $("#descJuego").val();
        let mensajeDescJuego = "";
        let entrarMensajeDescJuego = false;
        
        var valJuego = $("#valJuego").val();
        let mensajeValJuego = "";
        let entrarMensajeValJuego = false;

        var seleccionarCategoria = $("#seleccionarCategoria").val();
        let mensajeSeleccionarCategoria = "";
        let entrarMensajeSeleccionarCategoria = false;

        ///////VALIDACION PARA EL FORMULARIO AGREGAR JUEGO
        //VALIDACION PARA QUE EL VALOR DEL JUEGO NO SEA 0
        if(valJuego == "0"){
            mensajeValJuego += "El valor del juego no puede ser 0.";
            entrarMensajeValJuego = true;
        }

        if(entrarMensajeValJuego){
            $("#mensajeValJuego").html(mensajeValJuego);
        }else{
            $("#mensajeValJuego").html(mensajeValJuego);
        }
        //FIN VALIDACION VALOR JUEGO

        //VAIDACION DESCRIPCIÓN DE JUEGO
        if(descJuego.length <= 99 ){
            mensajeDescJuego += "La descripción del juego debe tener al menos 100 caracteres.";
            entrarMensajeDescJuego = true;
        }

        if(entrarMensajeDescJuego){
            $("#mensajeDescJuego").html(mensajeDescJuego);
        }else{
            $("#mensajeDescJuego").html(mensajeDescJuego);
        }
        //FIN VALIDACION DESCRIPCIÓN DE JUEGO

        //VALIDACION PARA QUE LA CATEGORÍA NO QUEDE CON LA OPCIÓN PREDETERMINADA
        if(seleccionarCategoria == "0"){
            mensajeSeleccionarCategoria += "Debe selecciona una Categoría.";
            entrarMensajeSeleccionarCategoria = true;
        }
        
        if(entrarMensajeSeleccionarCategoria){
            $("#mensajeSeleccionarCategoria").html(mensajeSeleccionarCategoria);
        }else{
            $("#mensajeSeleccionarCategoria").html(mensajeSeleccionarCategoria);
        }
        //FIN VALIDACION OPCION PREDETERMINADA
        /////// FIN VALIDACION PARA EL FORMULARIO AGREGAR JUEGO







    });


    ///JQUERY PARA EL FORMULARIO DE MEDIFICAR JUEGOS
    $("#formularioModificarJuego").submit(function(validacion) {
        validacion.preventDefault();

        var nomJuego2 = $("#nomJuego2").val();
        let mensajeNomJuego2 = "";
        let entrarMensajeNomJuego2 = false;
        
        var descJuego2 = $("#descJuego2").val();
        let mensajeDescJuego2 = "";
        let entrarMensajeDescJuego2 = false;
        
        var valJuego2 = $("#valJuego2").val();
        let mensajeValJuego2 = "";
        let entrarMensajeValJuego2 = false;

        var seleccionarCategoria2 = $("#seleccionarCategoria2").val();
        let mensajeSeleccionarCategoria2 = "";
        let entrarMensajeSeleccionarCategoria2 = false;

        var seleccionarJuego = $("#seleccionarJuego").val();
        let mensajeSeleccionarJuego = "";
        let entrarMensajeSeleccionarJuego = false;


        /////// VALIDACION PARA EL FORMULARIO MODIFICAR JUEGO
        //VALIDACION PARA QUE EL VALOR DEL JUEGO NO SEA 0
        if(valJuego2 == "0"){
            mensajeValJuego2 += "El valor del juego no puede ser 0.";
            entrarMensajeValJuego2 = true;
        }

        if(entrarMensajeValJuego2){
            $("#mensajeValJuego2").html(mensajeValJuego2);
        }else{
            $("#mensajeValJuego2").html(mensajeValJuego2);
        }
        //FIN VALIDACION VALOR JUEGO

        //VAIDACION DESCRIPCIÓN DE JUEGO
        if(descJuego2.length <= 99 ){
            mensajeDescJuego2 += "La descripción del juego debe tener al menos 100 caracteres.";
            entrarMensajeDescJuego2 = true;
        }

        if(entrarMensajeDescJuego2){
            $("#mensajeDescJuego2").html(mensajeDescJuego2);
        }else{
            $("#mensajeDescJuego2").html(mensajeDescJuego2);
        }
        //FIN VALIDACION DESCRIPCIÓN DE JUEGO

        //VALIDACION PARA QUE LA CATEGORÍA NO QUEDE CON LA OPCIÓN PREDETERMINADA
        if(seleccionarCategoria2 == "0"){
            mensajeSeleccionarCategoria2 += "Debe selecciona una Categoría.";
            entrarMensajeSeleccionarCategoria2 = true;
        }
        
        if(entrarMensajeSeleccionarCategoria2){
            $("#mensajeSeleccionarCategoria2").html(mensajeSeleccionarCategoria2);
        }else{
            $("#mensajeSeleccionarCategoria2").html(mensajeSeleccionarCategoria2);
        }
        //FIN VALIDACION OPCION PREDETERMINADA


        //VALIDACION PARA OPCION PREDETERMINADA
        if(seleccionarJuego == "0"){
            mensajeSeleccionarJuego += "Debe selecciona un Juego.";
            entrarMensajeSeleccionarJuego = true;
        }
        
        if(entrarMensajeSeleccionarJuego){
            $("#mensajeSeleccionarJuego").html(mensajeSeleccionarJuego);
        }else{
            $("#mensajeSeleccionarJuego").html(mensajeSeleccionarJuego);
        }
        //FIN VALIDACION PARA OPCION PREDETERMINADA

        /////// FIN VALIDACION PARA EL FORMULARIO MODIFICAR JUEGO
    });



    //JQUERY PARA FORMULARIO ELIMINAR JUEGOS
    $("#formularioEliminarJuego").submit(function(validacion){
        validacion.preventDefault();

        var seleccionarEliminar = $("#seleccionarEliminar").val();
        let mensajeSeleccionarEliminar = "";
        let entrarMensajeSeleccionarEliminar = false;

        //VALIDACION PARA OPCION PREDETERMINADA
        if(seleccionarEliminar == "0"){
            mensajeSeleccionarEliminar += "Debe selecciona un Juego.";
            entrarMensajeSeleccionarEliminar = true;
        }

        if(entrarMensajeSeleccionarEliminar){
            $("#mensajeSeleccionarEliminar").html(mensajeSeleccionarEliminar);
        }else{
            $("#mensajeSeleccionarEliminar").html(mensajeSeleccionarEliminar);
        }
        //FIN VALIDACION PARA OPCION PREDETERMINADA


    });
})