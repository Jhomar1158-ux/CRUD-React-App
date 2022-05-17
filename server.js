const express = require("express");
const app = express();
const cors = require("cors"); //->NUEVO

//Para usar json
app.use( express.json(), express.urlencoded({ extended: true }) );

//Esto nos permite acceder desde un origen distinto 
app.use( 
		cors({
				//URL frontend
				origin: "http://localhost:3000"
		})
)




//Inicializamos la DB
require("./server/config/mongoose.config");

//importamos las rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, () => console.log("Server listo!"));
