// MVC -- 3 Layer 
// model 
let model = {
	// for all your application's data
	todos: []
}

// view -- querying dom and handling events, render UI elements
let view = {
	// dynamically render elements by looping thru 
	renderTodos: function(todos){
		console.log(todos);
		let ulElement = document.getElementById("todoList");
		ulElement.innerHTML = "";
		// loop thru the above data 
		for(let i = 0; i < todos.length; i++ ){
			console.log(todos[i]);
			let liElement = document.createElement("li");
			liElement.className = "item";
			liElement.innerText = todos[i];
			ulElement.appendChild(liElement);
		}
	},
	// handling enter button press
	handleAddTodo: function(event){
		if(event.key == 'Enter' && event.code == "Enter"){
			// reading the text field 
			const enteredTodo = document.getElementById("todoInput").value;
			controller.addTodo(enteredTodo);
		}
	}
}

// controller -- update the model
let controller = {
	init: function(){
		this.getTodos()
	},

	// get todos
	getTodos: function(){
		console.log('get todos');
		// send ajax req - GET Req 
		// get the resp
		// update the model with the resp
		// Render the UI
	},

	// add todo 
	addTodo: function(todo){
		console.log(todo);
		// Step 0: Send AJAX req.. POST Req
		// Step 1: updating the model with the resp
		model.todos.push(todo); 
		// Step 2: Render the UI
		view.renderTodos(model.todos);
	}
}

controller.init();