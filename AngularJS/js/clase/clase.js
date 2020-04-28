var app = angular.module('miApp', []);
app.controller('miCtrl', function($scope, $location, $http, $timeout, $interval, miServicio) {
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

    $http.get("http://www.miserver.com/api/Usuarios/getAll").then(
        function(response) {
            $scope.personas = response;
        }
    );

    // firebase

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

    $scope.resultadoMiServicio = miServicio.getDato();

    $scope.personas = [
        { nombre: 'Damian', apellido: 'Cervantes' },
        { nombre: 'Pedro', apellido: 'Martinez' },
        { nombre: 'Maria', apellido: 'Diaz' }
    ];

});

app.service('miServicio', function() {
    this.getDato = function() {
        return 50;
    };
});