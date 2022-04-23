$(document).ready(function () {

    
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

})