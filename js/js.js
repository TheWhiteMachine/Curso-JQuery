$(document).ready(function() {
    $("#login").click(function() {
        var valor = $("#usuario")[0].value;
        $("#autenticacion").hide();
        $("#registro").hide();
    });
});