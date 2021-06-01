window.onload= inicio4;
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
}

