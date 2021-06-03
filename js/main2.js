var puesto_actual;
var id_actual;

window.onload = init;

function init()
{
	//pintarCuadricula();
	cerrar.addEventListener("click",cerrarVentana);
	cargarReserva();
}

function cargarReserva(){
	var puesto;
	for(var i=1;i<=9;i++)
	{
		//console.log(localStorage.getItem("puesto_"+i));
		if(localStorage.getItem("puesto_"+i)!=null)
		{
			puesto = document.getElementById("puesto_"+i);
			puesto.className = "reservado";
			puesto.innerHTML = localStorage.getItem("puesto_"+i);
		}
	}
}

function cerrarVentana(){
  ventana.className = "ligthbox hidden";
}

function crearReserva(numero){
	id_actual = "puesto_"+numero;
	puesto_actual = document.getElementById(id_actual);
	ventana.className = "ligthbox";
	input_name.value = "";
}

function reservar(){
	if(input_name.value!="")
	{
		puesto_actual.className = "reservado";
		puesto_actual.innerHTML = "<h2>Reservado</h2>"+input_name.value;
		localStorage.setItem(id_actual,"<h2>Reservado</h2>"+input_name.value);
		cerrarVentana();
	}
	else
	{
		alert("Error, introduzca el nombre de la reserva");
	}
}

function pintarCuadricula(){
	
	var html = "";
	//var inicio = 1;
	var fin = 3;
	var grid = document.getElementById("cuadricula");
	var contador = 1;
	var valor = 0;
	var salon = [];
	salon[0] = [true,false,true];
	salon[1] = [false,false,true];
	salon[2] = [true,false,false];

	var fila = 0;
	var col = 0;

	console.log(salon[0][0]);
	console.log(salon[1][1]);
	console.log(salon[2][2]);

	if(localStorage.getItem("esta_logeado")=="true")
	{
		while(contador<=fin)
		{
			console.log(fila,col);
			valor = salon[0][col];
			fila = fila + 1;
			col = col + 1;

			if(valor)// if(contador%2==0)
			{
				html = html + '<input type="button" class="naranja" value="'+contador+'">';
			}
			else
			{
				html = html + '<input type="button" class="gris" value="'+contador+'">';
			}
			contador = contador + 1;
		}

		grid.innerHTML = html;

	}
	else{
		grid.innerHTML = "<h1>Esta seccion es bajo logeo</h1>";
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

