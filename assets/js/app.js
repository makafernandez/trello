window.onload = function() {
	var board = document.getElementById("board");
	var newList = document.getElementById("list-container"); 					// Contenedor de Lista
	var newListForm = document.getElementById("new-list");						// Formulario Nueva Lista
	var inputValue = document.getElementById("inputNewL");					// Nombre ingresado para la nueva lista
	var addList = document.getElementById("add-list");								// Botón para Añadir Nueva Lista

	//FUNCIÓN AÑADIR NUEVA LISTA:
	addList.addEventListener('click', function() {
		addList.style.display = "none";
			newList.classList.add("form-add");
	
		// Creando elementos nuevos:
		var inputNewList = document.createElement("input");			// Crea elemento Input "Añadir nueva lista"
		var divAddButtons = document.createElement("div");			// Crea elemento Div para botones Guardar y Cerrar
		var btnGuardar = document.createElement("button");			// Crea elemento button Guardar
		var txtBtnGuardar = document.createTextNode("Guardar");	// Crea nodo texto para botón Guardar
		var btnCerrar = document.createElement("span");					// Crea elemento button Cerrar (X)
		var iconCerrar = document.createElement("i");						// Crea elemento i Cerrar (X)
	
		// Posicionando nodos para los elementos nuevos:
		newListForm.appendChild(inputNewList);
		newListForm.appendChild(divAddButtons);
		divAddButtons.appendChild(btnGuardar);
		btnGuardar.appendChild(txtBtnGuardar);
		divAddButtons.appendChild(btnCerrar);
		btnCerrar.appendChild(iconCerrar);
		
		// Creando clases para los elementos nuevos:
		inputNewList.classList.add("name-list");
		divAddButtons.classList.add("list-control");
		btnGuardar.classList.add("btn-list");
		btnCerrar.classList.add("icon", "btn-cerrar");
		iconCerrar.classList.add("fa", "fa-times", "fa-2x");
	
		// Agregando atributos para los elementos nuevos:
		inputNewList.setAttribute("type", "text");
		inputNewList.setAttribute("placeholder", "Añadir una lista...");
		btnGuardar.setAttribute("type", "button");
		iconCerrar.setAttribute("aria-hidden", "true");
		
		// Función para cerrar ventana con botón Cerrar:
		btnCerrar.onclick = function() {
			addList.style.display = "inline-block";
			newList.classList.remove("form-add");
			newListForm.removeChild(inputNewList);
			newListForm.removeChild(divAddButtons);
		};
		
		btnGuardar.addEventListener("click", function() {
			
			//Creando elementos nuevos:
			var savedListContainer = document.createElement("div");		// Crea elemento Div para contener lista y tarjetas
			var addedListForm = document.createElement("form");				// Crea elemento Form para Lista creada.
			var inputListTitle = document.createElement("input");			// Crea elemento Input "Título de Lista"
			var localMenuList = document.createElement("span");				// Crea elemento Span para menú local vista Lista
			var iconMenuList	= document.createElement("i");					// Crea elemento i para ícono menú vista Lista
			var addCard = document.createElement("a");								// Crea elemento a para enlace "Añadir una tarjeta..."
			var txtAddCard = document.createTextNode("Añadir una tarjeta"); // Crea nodo de texto para enlace "Añadir tarjeta"
	
			// Posicionando nodos:
			board.insertBefore(savedListContainer, newList);
			newListForm.removeChild(inputNewList);
			newListForm.removeChild(divAddButtons);
			savedListContainer.appendChild(addedListForm);
			savedListContainer.appendChild(inputListTitle);
			savedListContainer.appendChild(localMenuList);
			localMenuList.appendChild(iconMenuList);
			savedListContainer.appendChild(addCard);
			addCard.appendChild(txtAddCard);
			
			// Creando clases:
			savedListContainer.classList.add("form-add");
			newList.classList.remove("form-add");
			inputListTitle.classList.add("list-title");
			addCard.classList.add("add-card");
			
			// Aplicando estilos:
			addList.style.display = "inline-block";
			
			// Almacenando el nombre de la nueva lista:
			inputListTitle.value = inputNewList.value;
			
			// Aplicando atributos:
			addCard.setAttribute("href", "#");
			
			
		});
	
	});
	
	
};
	