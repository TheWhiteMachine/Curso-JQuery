var app = angular.module("miApp", []);
app.controller("miControlador", function($scope) {
    $scope.nombre = "Vilma";
    $scope.apellido = "Picapiedra";
    $scope.departamentos = ['Montevideo', 'Rocha', 'Canelones'];
});