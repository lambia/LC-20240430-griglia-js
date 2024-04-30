"use strict";

prova = 12;

function saluta(msg) {

	let x = 0;
	var a = 0;
	
	console.log("Var richiamata dalla function, ma fuori dall'if, PRIMA", b);

	if(msg != "ciao") {

		let y = 0;
		var b = 0;

		alert(msg);
	}

	console.log("Var richiamata dalla function, ma fuori dall'if, DOPO", b);

}
