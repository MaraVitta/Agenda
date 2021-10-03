function grabar() {
	var boton = document.querySelector('#grabar')
	boton.addEventListener('click', nuevaActividad)	
	mostrarActividad()
}

function nuevaActividad() {
	var clave = document.querySelector('#clave').value
	var opciones = document.querySelector('#opciones').value
	var referencia = document.querySelector('#referencia').value
	var fecha = document.querySelector('#fecha').value

	var valores = [opciones, referencia, fecha]

	localStorage.setItem(clave, valores)
	alert('Actividad guardada!')
	location.reload()
}

function mostrarActividad() {
	var caja = document.querySelector('#mostrarDatos')
	for (var i=0; i<localStorage.length; i++) {
		var id = localStorage.key(i)
		var valor = localStorage.getItem(id)

		caja.innerHTML += '<p>Actividad:' +id+' - '+valor+'</p>'
	}

	caja.innerHTML += '<p><a href="#" onclick="borrar()">Borrar lista de tareas</p>'
}

function borrar() {
	localStorage.clear()
	location.reload()
	alert('¡Su lista de tareas será eliminada!')
}

window.addEventListener('load', grabar)
