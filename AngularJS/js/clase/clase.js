var app = angular.module('miApp', []);
var db = firebase.firestore();
app.controller('miCtrl', function($scope, $location, $http, $timeout, $interval, servicioPersonas) {
    $scope.nombre = "Pedro";
    $scope.apellido = "Perez";
    $scope.email = "";
    $scope.nombreCompleto = function() {
        return $scope.nombre + " " + $scope.apellido;
    };
    $scope.departamentos = ['Montevideo', 'Lavalleja', 'Canelones'];
    $scope.departamento = "";

    $scope.localidades = [{ localidad: 'Montevideo' }, { localidad: 'Lavalleja' }, { localidad: 'Canelones' }];
    $scope.localidad = "";

    $scope.url = $location.absUrl();

    $scope.titulo = "Formulario inicial";
    // $timeout(function, intervaloTiempo);
    $timeout(
        function() {
            $scope.titulo = "formulario final";
        },
        3000
    );

    $scope.fecha = new Date().toLocaleTimeString();
    $interval(
        function() {
            $scope.fecha = new Date().toLocaleTimeString();
        },
        1000
    );


    // function(parametros_opcionales) {
    //     // algortimo
    // }

    // $scope.resultadoMiServicio = miServicio.getDato();

    // $scope.personas = [
    //     { nombre: 'Damian', apellido: 'Cervantes' },
    //     { nombre: 'Pedro', apellido: 'Martinez' },
    //     { nombre: 'Maria', apellido: 'Diaz' }
    // ];

    // servicioPersonas.getAll().then(
    //     function(response) {
    //         $scope.personas = response;
    //     }
    // );

    var personas = [];
    servicioPersonas.getPersonas().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            personas.push(doc.data());
        });
    });
    $scope.personas = personas;
});

app.service('servicioPersonas', function() {
    this.getPersonas = function() {
        // return db.collection("personas").get();
        // return $http.get("http://www.miserver.com/api/Usuarios/getAll");
    };

    this.agregar = function() {
        // var usuario = { nombre: 'damian', apellido: 'cervantes' };
        // return $http.post("http://www.miserver.com/api/Usuarios/Add", usuario);
        // url => direccion_url_del_servidor + api + nombre_controlador + método
    }

    this.eliminar = function() {
        // return $http.delete("http://www.miserver.com/api/Usuarios/Delete", personaId);
    }
});