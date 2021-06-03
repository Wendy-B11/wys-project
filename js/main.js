let loginRegister;
let login;
let register;
let loginBox;
let registerBox;

window.onload = init;


function init(){

    document.getElementById("botonLogin").addEventListener("click", loginFunction);
    document.getElementById("botonRegister").addEventListener("click", registerFunction);

     //nombre= document.getElementById("nombre");
    usuario= document.getElementById("usuario");
    contraseña= document.getElementById("contrasena");
    registro= document.getElementById("registro");
    registro.addEventListener("click", obtenerDatos);

    nombre= document.getElementById("nombre");
    usuarioRegistro= document.getElementById("usuarioRegistro");
    email= document.getElementById("email");
    contraRegistro= document.getElementById("contraRegistro");
    confirmarRegistro= document.getElementById("confirmarRegistro");
    regis= document.getElementById("regis");
    regis.addEventListener("click", guardar);
    //localStorage.setItem("esta_logeado","false");

    loginRegister = document.querySelector(".loginRegister");
    login = document.querySelector(".login");
    register = document.querySelector(".register");
    loginBox = document.querySelector(".loginBox");
    registerBox = document.querySelector(".registerBox");

}
function loginFunction(){
    register.style.display = "none";
    loginRegister.style.left = "10px";
    login.style.display = "block";
    registerBox.style.opacity = "1";
    loginBox.style.opacity = "0";
}
function registerFunction(){
    register.style.display = "block";
    loginRegister.style.left = "410px";
    login.style.display = "none";
    registerBox.style.opacity = "0";
    loginBox.style.opacity = "1";
}

        let usuario, contraseña, registro;

        function obtenerDatos(evento){

        let contrasena_ok = localStorage.getItem("contrasena");
        let usuario_ok = localStorage.getItem("usuario");
        console.log(localStorage.getItem("contrasena"),localStorage.getItem("usuario"));

        if (usuario.value !="" && contrasena.value !="")
        {
            //console.log(nombre.value)
            //console.log(usuario.value)
            //console.log(contrasena.value)

            if (usuario.value == usuario_ok && contrasena.value == contrasena_ok)
            {
                alert("El inicio de sesión ha sido exitoso");
                localStorage.setItem("esta_logeado","true");
                location.href = "otro.html";

            }
            else{
                alert("Usuario o clave incorrectas")
                usuario.value="";
                contrasena.value="";
                localStorage.setItem("esta_logeado","false");
            }
        }
        else
        {
             alert("Error: Campos vacíos")
        }

    }
    
/*************************************************/

		var nombre, usuarioRegistro, email, contraRegistro, confirmarRegistro, regis;

		function guardar(){
			if(contraRegistro.value == confirmarRegistro.value && contraRegistro.value!="")
			{
				if(usuarioRegistro.value!="")
				{
					localStorage.setItem("usuario",usuarioRegistro.value);
					localStorage.setItem("contrasena",contraRegistro.value);
					location.href = "login.html";
					alert("Inicie sesión para continuar");
				}
				else
				{
					alert("Valide los datos");
				}
			}
			else
			{
				alert("Valide los datos");
			}
		}



 /*      let nombre, usuarioRegistro, contraRegistro, confirmarRegistro, regis;

        function obtener(evento){

        let contrasena_ok = localStorage.getItem("contrasena");
        let usuario_ok = localStorage.getItem("usuario");
        console.log(localStorage.getItem("contrasena"),localStorage.getItem("usuario"));

        if (nombre.value !="" && usuarioRegistro.value !="" && contraRegistro.value !="" && confirmarRegistro.value !="" && contraRegistro.value==confirmarRegistro.value)
        {
            //console.log(nombre.value)
            //console.log(usuario.value)
            //console.log(contrasena.value)

            if (usuarioRegistro.value == usuario_ok && contraRegistro.value == contrasena_ok && confirmarRegistro.value == contrasena_ok)
            {
                alert("El registro ha sido exitoso");
                location.href = "otro.html";

            }
        else{
        	if (contraRegistro.value!=confirmarRegistro.value)
        	{
        		alert("Error: Las contraseñas no coinciden")
        	}
        else
        {
             alert("Error: Campos vacíos")
        }
    }
}
}*/

    


