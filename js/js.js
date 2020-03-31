$(document).ready(function() {
    $("#login").click(function() {
        var valor = $("#usuario")[0].value;
        $("#autenticacion").hide();
        $("#registro").hide();
        let bienvenida = `<div class="p-2" id="bienvenida">
                            <span>Bienvenido ${valor}</span>
                          </div>`;
        $("#topBar")[0].innerHTML += bienvenida;
    });
});