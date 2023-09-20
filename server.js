const express = require("express")
const app = express()
const WebSocket = require("ws")

const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")

app.use(express.static("public"))

app.get("/favicon.ico", (req, res)=> res.status(204))

app.get("/", (req, res)=>{
	console.log(req.url)
	res.render("index")
})

app.listen(PORT, ()=>{
	console.log("Server live on port:", PORT)
})

const websocket = new WebSocket.WebSocketServer({ app })

websocket.on("connection", (socket)=>{
	console.log("New client connected on the server!")

	socket.on("message", (msg)=>{
		console.log("Messsage received from client: ",msg.toString())
		socket.send(msg.toString())
	})


})

