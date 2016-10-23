/* var idioma = "es";
 	var elUser = document.getElementById("user");
 	var elPassword = document.getElementById("password");

if (idioma=="es"){
	elUser.innerHTML="usuario";
	elPassword.innerHTML="contraseña";
	document.getElementById("inputUser").setAttribute("placeholder", "ingresa contraseña");
	document.getElementById("inputPass").setAttribute("placeholder", "ingresa usuario");
}
-------ESTO ES UNA PRUEBA --------

else{
	(idioma=="es"){
	elUser.innerHTML="user";
	elPassword.innerHTML="password";
	document.getElementById("inputUser").setAttribute("placeholder", "password");
}*/

function cambiarIdioma(idioma){

var elUser = document.getElementById("user");
 	var elPassword = document.getElementById("password");

	if (idioma == "es"){
		elUser.innerHTML = "usuario";
		elPassword.innerHTML = "contraseña";
		document.getElementById("inputUser").setAttribute("placeholder", "ingresa contraseña");
		document.getElementById("inputPass").setAttribute("placeholder", "ingresa usuario");
	}else if ( idioma = "en"){
		elUser.innerHTML = "User";
		elPassword.innerHTML = "Pass";
		document.getElementById("inputUser").setAttribute("placeholder", "ingresa password*");
		document.getElementById("inputPass").setAttribute("placeholder", "ingresa user*");
	}
};

cambiarIdioma("es");

var btnEs = document.getElementById("btnEs");
	btnEs.onclick = function(){
		cambiarIdioma("es");
	};

var btnEn = document.getElementById("btnEn");
	btnEn.onclick = function(){
		cambiarIdioma("en");
	}