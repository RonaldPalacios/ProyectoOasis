

var listadoCiudades = ["New York","Tokio","Paris","Londres","Hong Kong","Moscu","EspañaS"];
var listadoPrecio = ["$3000", "$5000", "$4780", "$7100", "$5980", "$4530"];
var beneficios =[
    ["Pasaje Aereo", "Traslado", "The Langham", "Seguro Medico"],
    ["Pasaje Aereo", "Traslado", "Aman Tokyo", "Recorrido"], 
    ["Pasaje Aereo", "Traslado", "Hôtel George-V", "Comidas Incluidas" ],
    ["Pasaje Aereo", "Traslado", "Four Seasons Hotel", "Guia Turistica" ],
    ["Pasaje Aereo", "Traslado", "Mandarin Oriental", "Seguro Medico" ], 
    ["Pasaje Aereo", "Traslado", "Metropol Hotel", "Bebidas Incluidas" ]];

    function registrarComponentes() {
            let ciudades = document.querySelectorAll(".prising");
            for(let i =0; i<ciudades.length;i++){
                let ciudadesNombre = ciudades[i].querySelector(".name-prising");
                ciudadesNombre.textContent = listadoCiudades[i];
            }
            let precio = document.querySelectorAll(".prising");
                for(let i =0; i<precio.length;i++){
                    let precioTotal = precio[i].querySelector(".price");
                    precioTotal.textContent = listadoPrecio[i];
                }    
                    
            }

      
    
        
