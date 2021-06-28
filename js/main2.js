var puesto_actual;
var id_actual;
var id_boton;
var reservas;
var hora_actual;
var horario;
var colores = [];
var fondo;
window.onload = init;

function init()
{
	fondo = document.getElementById('fondo_reserva');
	//pintarCuadricula();
	cerrar.addEventListener("click",cerrarVentana);
	hora_actual = localStorage.getItem("hora");
	iniciarColores();
	fondo.style.backgroundColor = cambiarColor();
	cargarReserva();
	iniciarHoras();
}

function iniciarColores(){
	colores["5"] = "lightgreen";
	colores["6"] = "teal";
	colores["7"] = "mediumturquoise";
	colores["8"] = "burlywood";
	colores["9"] = "ivory";
	colores["16"] = "blanchedalmond";
	colores["18"] = "coral";
	colores["20"] = "dimgrey";
}

function cambiarColor()
{
	return colores[hora_actual];
}

function iniciarHoras(){
	horas["5"] = "<h2>5:00 am/h2>";
	horas["6"] = "<h2>6:00 am/h2>";
	horas["7"] = "<h2>7:00 am/h2>";
	horas["8"] = "<h2>8:00 am/h2>";
	horas["9"] = "<h2>9:00 am/h2>";
	horas["16"] = "<h2>16:00 pm/h2>";
	horas["18"] = "<h2>18:00 pm/h2>";
	horas["20"] = "<h2>20:00 pm/h2>";
}

function cambiarHora()
{
	return horas[hora_actual];
	
}


function cargarReserva(){
	var puesto, usuario;
	reservas = [];

	if(localStorage.getItem("horario")!=null)
	{
		horario = JSON.parse(localStorage.getItem("horario"));
		reservas = (horario[hora_actual]==null)?[]:horario[hora_actual];

		if(reservas!=null)
		{
			for(var i=1;i<=9;i++)//i = i + 1
			{
				if(reservas[i]!=null)
				{
					puesto = document.getElementById("puesto_"+i);			
					usuario = reservas[i];
					actualizarEstado(puesto,usuario);
				}
			}
		}
	}
	else{
		horario = [];
	}
}

function cerrarVentana(){
  ventana.className = "ligthbox hidden";
}

function mostrarVentana(datos)
{
	id_actual = "puesto_"+datos.numero;
	id_boton = datos.numero;
	puesto_actual = document.getElementById(id_actual);
	ventana.className = "ligthbox";
	input_name.value = datos.nombre?datos.nombre:"";
}

function crearReserva(numero){
	mostrarVentana({nombre:"",numero:numero});
}

function actualizarReserva(usuario){
	actualizarEstado(puesto_actual,usuario);
	reservas[id_boton] = usuario;
	horario[hora_actual] = reservas;
	localStorage.setItem("horario",JSON.stringify(horario));
}

function editarReserva(numero){
	mostrarVentana({nombre:reservas[numero].nombre,numero:numero});	
}

function eliminarReserva(numero){
	var entrada = confirm("¿Seguro que quiere borrar a "+numero+"?")
	if(entrada)
	{
		id_boton = numero;
		actualizarReserva(null);
	}
}

function actualizarEstado(puesto,usuario)
{
	var temp;
	if(usuario!=null)
	{
		puesto.className = "reservado";
		temp = "<h2>Reservado</h2>"+usuario.nombre;
		temp += '<img class="btn_editar" onClick="editarReserva('+usuario.id+');" src="imgs/btn_editar.png" alt="">';
		temp += '<img src="imgs/btn_eliminar.png" onClick="eliminarReserva('+usuario.id+');" class="btn_eliminar" alt="">';
	}
	else{
		puesto = document.getElementById("puesto_"+id_boton);
		puesto.className = "disponible";
		temp = "<h2>Disponible</h2>";
		temp += '<img class="btn_agregar" onClick="crearReserva('+id_boton+');" src="imgs/btn_agregar.png" alt="">';
	}
	puesto.innerHTML = temp;
}


function reservar(){
	var usuario;
	if(input_name.value!="")
	{
		usuario = {nombre:input_name.value,id:id_boton};
		actualizarReserva(usuario);
		cerrarVentana();
	}
	else
	{
		alert("Error, introduzca el nombre de la reserva");
	}
}
/*window.onload= init;
function init(){
	cerrar.addEventListener("click", cerraVentana);
}
function cerrarVentana(){
ventana.className = "ligthbox hidden";
}

function crearReserva(numero){
//alert(numero);
ventana.className = "ligthbox";
}

//window.onload= inicio4;
function inicio(){
	var html = "";
	var contador = 2000;
	var lista = document.getElementById("combobox");

 	while(contador<=2021)
	{
		html = html + "<option value='"+contador+"'>"+contador+"</option>";
		contador = contador + 1;
	}

 	lista.innerHTML = html;
}

function inicio2(){
	var html = "";
	var contador = -10;
	var lista = document.getElementById("lista");

 	do
	{
		html = html + "<li>"+contador+"</li>";
		contador = contador + 1;
	
	}while(contador<=10);
 	lista.innerHTML = html;
}
function inicio3(){

	var html = "";
	var inicio = 50;
	var fin = 5000;
	var lista = document.getElementById("resultados");

 	for (var i = inicio; i <= fin; i++)
	{
		html = html + '<div class="columna '+(i%2==0?'naranja':'gris')+'">'+i+'</div>';
	}
	{
    lista.innerHTML = html;
    }
}
function inicio4(){

	var html = "";
	//var inicio = 1;
	var fin = 100;
	var grid= document.getElementById("cuadricula");
	var contador =1;

	if(localStorage.getItem("esta_logeado")=="true")
	{

		while(contador<=fin)
		{
			if(contador%2==0)
			{
			html = html + '<input type="button" class="gris" value="'+contador+'">';
			}
			else
			{
			html = html + '<input type="button" class="naranja" value="'+contador+'">';
			}
			contador = contador + 1;
		}

 		grid.innerHTML = html;

    }
	else {
	grid.innerHTML = "<h1>Esta sección es bajo logeo</h1>";

	}
}*/

