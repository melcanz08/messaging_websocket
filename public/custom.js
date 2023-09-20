const socket = new WebSocket('wss://sok.onrender.com');
let msgDiv = document.getElementById("msgDiv");
socket.onopen = ()=>{
	console.log("Websocket connected to the server!")
};

socket.onmessage = (event)=>{
	console.log("Message received from server: ", event.data);
	let msgContent = document.createElement("div");
	msgContent.classList.add("my-3");
	msgContent.textContent = event.data;
	msgDiv.appendChild(msgContent);
};

socket.onclose = ()=>{

};

let btnSend = document.getElementById("btnSend");
let inputField = document.querySelector("[name='name']");

btnSend.onclick = ()=>{
	socket.send(inputField.value);
};
