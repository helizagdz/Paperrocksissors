//definir un arreglo con los valores roca, papel y tijeras
let jugador = "";

function seleccion(opcion) {
	console.log(opcion);
	
	jugador = opcion;
}

function jugar (){
	if (jugador == ""){ 
		alert("seleccione una imagen y después pulse el botón jugar");
	} else {
		let elementos = ["roca", "papel", "tijeras"];

		//la computadora selecciona un elemento del arreglo y lo almacena en una variable

		let computadora = elementos[Math.floor(Math.random()*elementos.length)];
		console.log("computadora:",computadora);
		
		//Definir variable para el jugador
		let ganador ="";
		console.log("jugador: ",jugador);
		//se comparan par ver quien ganó
		//roca le gana a tijeras
		if (computadora == "roca" && jugador == "tijeras"){
		  ganador = "computadora";
		}
		 if (computadora == "tijeras" && jugador == "roca"){
		  ganador = "jugador";
		}
		//tijeras le gana a papel
		if (computadora == "tijeras" && jugador == "papel"){
		  ganador = "computadora";
		}
		if (computadora == "papel" && jugador == "tijeras"){
		  ganador = "jugador";
		}
		//papel le gana a roca
		if (computadora == "papel" && jugador == "roca"){
		  ganador = "computadora";
		}
		if (computadora == "roca" && jugador == "papel"){
		  ganador = "jugador";
		}
		if (computadora == jugador) {
		  ganador = "Empate";
		  alert("fue un empate");
		} else{
			//imprimir el ganador 
			console.log("El ganador es: ",ganador);
			alert('Ganador '  + ganador);
		}
		jugador = "";
		ganador = "";
	}
}