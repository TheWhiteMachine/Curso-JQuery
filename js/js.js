var datos = [
    { 'id': 1, 'hora': '12:30', 'local': 'AEK Larnaca', 'visitante': 'Gent', 'igl': 2.45, 'ie': 3.15, 'igv': 2.35, 'estadio': 'Luzhniki Stadium', 'lat': 55.715765, 'lng': 37.5515217, 'imagen': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg' },
    { 'id': 2, 'hora': '13:00', 'local': 'Sparta Praga', 'visitante': 'Trabzonspor', 'igl': 2.00, 'ie': 3.10, 'igv': 3.05, 'estadio': 'Otkrytiye Arena', 'lat': 55.817765, 'lng': 37.440363, 'imagen': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Spartak_in_Moscow.jpg' },
    { 'id': 3, 'hora': '13:00', 'local': 'FC Pyunik', 'visitante': 'Wolverhampton', 'igl': 10.45, 'ie': 5.70, 'igv': 1.14, 'estadio': 'Krestovsky Stadium', 'lat': 59.97274, 'lng': 30.221408, 'imagen': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Spb_06-2017_img40_Krestovsky_Stadium.jpg' },
    { 'id': 4, 'hora': '13:15', 'local': 'Universitatea', 'visitante': 'AEK Atenas', 'igl': 2.80, 'ie': 2.90, 'igv': 2.25, 'estadio': 'Otkrytiye Arena', 'lat': 55.817765, 'lng': 37.440363, 'imagen': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Spartak_in_Moscow.jpg' },
    { 'id': 5, 'hora': '13:30', 'local': 'Brondby', 'visitante': 'Sp.Braga', 'igl': 2.65, 'ie': 3.15, 'igv': 2.20, 'estadio': 'Krestovsky Stadium', 'lat': 59.97274, 'lng': 30.221408, 'imagen': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Spb_06-2017_img40_Krestovsky_Stadium.jpg' }
];

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

    var html = "";
    for (var partido of datos) {
        html += `
    <div class="row">
        <span class="hora col-2 p-2 open_Sans">
            <a href="#myModal" class="btn" data-toggle="modal" onclick="cargarModal(this.id)" id="${partido.id}">
                <i class="material-icons">location_on</i>
            </a>
            ${partido.hora}
        </span>
        <div class="col-4 zoom apuesta_local d-flex justify-content-between ${partido.id*partido.igl}" onclick="apostar(1, this)" id="${partido.id}">
            <span class="local p-2">${partido.local}</span>
        <span class="igl p-2">${partido.igl}</span>
        </div>
        <div class="col-2 zoom d-flex justify-content-between apuesta_empate ${partido.id*partido.ie}" id="${partido.id}" onclick="apostar(2, this)">
        <span class="vs p-2">X</span><span class="ie p-2">${partido.ie}</span>
        </div>
        <div class="col-4 zoom d-flex justify-content-between apuesta_visitante ${partido.id*partido.igv}" id="${partido.id}" onclick="apostar(3, this)">
        <span class="visitante p-2">${partido.visitante}</span>
        <span class="igv p-2">${partido.igv}</span>
        </div>
    </div>`;
    }
    document.getElementById("dato_grupo1").innerHTML = html;
    document.getElementById("dato_grupo2").innerHTML = html;
    document.getElementById("dato_grupo3").innerHTML = html;
});