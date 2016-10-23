/*Todos los campos son obligatorios, excepto los dos últimos.
Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
Para los campos nombre y apellido la primera letra debe ser mayúscula
Validar que el campo email tenga un formato válido. Ej: name@domain.com
El campo password debe tener al menos 6 caracteres
El campo password no puede ser igual a "password" ó "123456" ó "098754"
El valor seleccionado de bicis, debe ser una de las opciones presentadas
Si algún campo presenta error debe informarse al usuario por medio de un alert*/


var cajaInput = document.getElementsByClassName("input-box");

function validateForm(){
	/* Escribe tú código aquí */
	validarNombre();
	validarApellido();
	validarCorreo();
	validarContrasena();
};

function validarNombre(){
	var name = document.getElementById("name").value;
	var regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
	var espacioBlanco = /^\s+$/;

	// Para validar el nombre haré una condición

	if (!(regexName.test(name) ) || (espacioBlanco.test(name) )){
		// Si no es verdad se mostrará un span con la alerta "El nombre no es correcto"
		var i = 0;
		alert("El Nombre no es valido");
		return false; 
	} else if ( !(/^[ÑA-Z][ña-z]*$/g.test(name) )) {
		/*Este es el codigo para que el formulario sea validado con
		la primera letra sea mayuscula  --- /^[ÑA-Z][ña-z]*$/g  ----*/
		var i = 0;
		alert("La primera letra es mayuscula");
		return false;
	}
	console.log("esta bien el nombre");
	return true;
};

function validarApellido(){
	var lastname = document.getElementById("lastname").value;
	var regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
	var espacioBlanco = /^\s+$/;

	// Para validar el nombre haré una condición

	if (!(regexName.test(lastname) ) || (espacioBlanco.test(lastname) )){
		// Si no es verdad se mostrará un span con la alerta "El apellido no es correcto"
		var i = 1;
		alert("El apellido no es valido");
		return false; 
	} else if ( !(/^[ÑA-Z][ña-z]*$/g.test(lastname) )) {
		/*Este es el codigo para que el formulario sea validado con
		la primera letra sea mayuscula  --- /^[ÑA-Z][ña-z]*$/g  ----*/
		var i = 1;
		alert("La primera letra es mayuscula");
		return false;
	}
	console.log("esta bien el apellido");
	return true;
};

function validarCorreo(){
	var inputEmail = document.getElementById("input-email").value;
	var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var espacioBlanco = /^\s+$/;
	//Este apartado es para validar el correo electronico
	if (!(regexEmail.test(inputEmail))){
		//alert("Campo correo incorrecto");
		i = 2;
		alert("El correo no es valido");
		return false;
	}
	console.log("esta bien el correo");
	return true;
};

function validarContrasena(){
	var inputPassword = document.getElementById("input-password").value;
	// Este es para validar el password
	if( inputPassword == null || inputPassword == "" ){
		alert("tienes que ingresar una contraseña");
		return false;
	}else if ( inputPassword == "password" ||  inputPassword == "123456" || inputPassword == "098754"){
		alert("Esa contraseña no es valida");
		return false;
	}else if  ( inputPassword > 6 ){
		alert("La contraseña tiene que tener al menos 6 carácteres y al menos 1 letra");
		return false;
	};
	console.log("esta bien el password");
	return true;
};