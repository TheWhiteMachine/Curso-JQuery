$(document).ready(function() {
    //1. Qué tipo de dato se manejaría en la variable nombre enlazada
    // al input de igual nombre en el formulario
    // R:/ string

    //2. Cómo se declararía esa variable ?
    $("button").click(function() {
        var nombre = $("#nombre")[0].value;
        alert(nombre);
    });

    // 3. Una variable de tipo arreglo como se declara en javascript ?
    var arreglo = [];

    // 4. Una variable de tipo objeto como se declara en javascript ?
    var persona = { nombre: 'nombre', apellido: 'apellido', edad: 25 };
    var persona2 = { nombre: 'nombre2', apellido: 'apellido2', edad: 15 };

    // 5. Para concatenar los valores del nombre y el apellido, cual sería la sintaxis ?
    $("button").click(function() {
        var nombre = $("#nombre")[0].value;
        var apellido = $("#apellido")[0].value;
        // alert(nombre + ' ' + apellido);
    });

    // 6. Si se tuviera un arreglo de objetos de tipo persona :
    //     a) cómo pudiera saber la cantidad de elementos
    arreglo.push(persona);
    arreglo.push(persona2);
    var cantidad = arreglo.length;
    // alert("canrtidad " + cantidad);
    //     b) implemnete una funcion para sumar todas las edades.
    var sumatoria = function() {
        var suma = 0;
        arreglo.forEach(persona => {
            sumatoria += persona.edad;
        });
        return suma;
    }

    // alert("sumatoria " + sumatoria);

    // 7. Al hacer clic en el botón enviar:
    //     a) muestre en un div en pantalla el nombre completo de la persona(nombre + apellido)
    $("button").click(function() {
        var fullName = $('#nombre')[0].value + " " + $('#apellido')[0].value;
        $("#nombre_completo").html(fullName);
        var formatoJson = {
            nombre: $('#nombre')[0].value,
            apellido: $('#apellido')[0].value,
            sexo: $('#sexo')[0].value,
            fecha_nacimiento: $('#fecha_nacimiento')[0].value,
            departamento: $('#departamento')[0].value
        };
        console.log(formatoJson);
        mifuncion(formatoJson);
    });
    //     b) muestre en consola el objeto construido con todos los datos introducidos por el usuario.


    // 8. Si se tiene un API de backend y se conoce la url para agregar la persona:
    //     a) declare una función para enviar los datos al servidor.
    var mifuncion = function(nuevoUsuario) {
            var dato = {
                nombre: nuevoUsuario.nombre,
                apellido: nuevoUsuario.apellido,
                sexo: nuevoUsuario.sexo,
                fecha_nac: nuevoUsuario.fecha_nacimiento,
                depa: nuevoUsuario.departamento
            }
            $.post("http://www.gestor_personas.com/api/Personas/Agregar", dato, function(resultado) {
                alert("Persona agregaga satisfactoriamente");
            })
        }
        //     b) muestre un alert de notificacion al usuario "Persona agregaga satisfactoriamente".
        // url_API: 'http://www.gestor_personas.com/api/Personas/Agregar'
        // formato objeto a enviar: { nombre, apellido, edad, fecha_nac, depa }
});