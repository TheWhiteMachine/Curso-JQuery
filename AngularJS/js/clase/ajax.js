$(document).ready(function() {
    // getAll
    $("button").click(function() {
        $.get("url_servidor", function(resultado) {
            var personas = resultado;
        });
    });

    // getPersona(ci)
    $("button").click(function() {
        $.get("url_servidor2", { ci: 11111111 }, function(resultado) {
            var persona = resultado;
            console.log(persona);
            alert(persona.nombre);
        });
    });

    // postAgregarPersona(nombre, apellido)
    $("button").click(function() {
        var nuevaPersona = { nombre: 'Pedro', apellido: 'Picapiedra' };
        $.post("url_servidor3", nuevaPersona, function(resultado) {
            var persona = resultado;
        });
    });

    //postModificarPersona(nombre)
    $("button").click(function() {
        var personaModificada = { id: 5, nombre: 'Damian', apellido: 'Picapiedra' };
        $.post("url_servidor4", personaModificada, function(resultado) {
            var persona = resultado;
        });
    });

    //deletePersona(id)
    $("button").click(function() {
        $.get("url_servidor5", { id: 5 }, function(resultado) {
            var persona = resultado;
            console.log(persona);
            alert(persona.nombre);
        });
    });
});