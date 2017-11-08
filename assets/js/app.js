var newListForm = document.getElementsByName("list-container"); 		// Formulario para añadir Nueva Lista
var addList = document.getElementsByClassName("add-list");							// Botón para crear Nueva Lista
var nameNewList = create.getElementsByClassName("name-list");					// Input "Nombre de nueva lista"
var addControls = document.getElementsByClassName("list-control");			// Botón Guardar y Cerrar

//Estado inicial
newListForm.classList.toggle("form-add", false);
nameNewList.style.visibility = "hidden";
addControls.style.visibility = "hidden";
	
addList.onclick = function() {
	addList.style.display = "none";
	newListForm.classList.toggle("form-add", true);
	
	var nameNewList = document.createElement("input");		//Crea elemento Input 
};
	