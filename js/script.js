var contador=0, prom=0, pond=0, sum=0;
function agregar(){
	var tb = document.getElementById("data");
	var nombre = document.getElementById("nombre").value;
	var sel = document.getElementById("sel").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 =document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var prom = ((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3);
    contador =+ prom;
    var fila = "<tr><td id='nombre'>"+sel+"</td><td>"+nota1+"</td><td>"+nota2+"</td><td>"+nota3+"</td><td>"+prom+"</td><a href='#' onclick='editar(this)'><img src='iconos/e.png'></td><td><a href='#' onclick='eliminar(this)'><img src='iconos/d.png'></td></tr>";
    var fil = document.createElement("tr");
    fil.innerHTML=fila;
    tb.appendChild(fil);
    limpiar();
}

function enviar(){
    var nombrp= document.getElementById("nombre").value;
    var q = document.getElementById("alum");
    q.innerHTML="<label>Alumno: "+nombrp+"</label><br>";
}

function ponderado(){
    var sum = sum+prom;
    pond=sum/contador;
}

function eliminar(p){
    var opcion = confirm("¿Desea Eliminar...?");
    if (opcion == true) {
        var contador = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(contador);      
    } else {
        mensaje("Registro no se eliminó...!");     
    }
}

function limpiar(){
    document.getElementById("sel").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("sel").focus();

}
function mensaje(x){
    alert(x);
}