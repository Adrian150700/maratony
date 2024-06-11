const express = require("express")
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swaggerConfig")
const bodyParser = require("body-parser")
const sequelize = require("./config/database") // import sequelize configuration
const wydarzenieRoutes = require("./routes/wydarzenieRoutes")
const router = require("./routes/wydarzenieRoutes")
const app = express()

app.use(router)
app.use(bodyParser.json())
app.use("/api", wydarzenieRoutes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.get("/", (req, res) => {
	res.send("System Zarządzania Maratonami")
})

// Sprawdzenie połączenia z bazą danych
sequelize
	.authenticate()
	.then(() => {
		console.log("Database connected...")
		const PORT = process.env.PORT || 3000
		app.listen(PORT, console.log(`Server started on port ${PORT}`))
	})
	.catch(err => {
		console.log("Error: " + err)
	})
