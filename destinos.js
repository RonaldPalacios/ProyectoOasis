var contenido = document.querySelector('#temperatura')
const apiKey = '798635ca25fa9032f65426b778c3681f'
var lugar = document.querySelector('h1').outerText.toLowerCase()
var lat;
var lon;

switch (lugar) {
    case 'tokio':
        lat = 35.6895;
        lon = 139.69171;
        break;
    case 'moscu':
        lat = 55.75222;
        lon = 37.61556;
        break;
    case 'londres':
        lat = 51.51279;
        lon = -0.09184;
        break;
    case 'hong kong':
        lat = 22.396428;
        lon = 114.109497;
        break;
    case 'paris':
        lat = 48.85341;
        lon = 2.3488;
        break;
    case 'new york':
        lat = 40.71427;
        lon = -74.00597;
        break;

}

function transformar(numero){
    return (numero-(273.15))
}
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(res => res.json())
    .then(call => {
        contenido.innerHTML = `<p>Temperatura: ${transformar(call.main.temp).toFixed(1)}°C</p>
                               <p>Humedad: ${call.main.humidity}%</p>`
                               
    })
