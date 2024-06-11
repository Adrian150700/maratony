const express = require("express")
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swaggerConfig")
const bodyParser = require("body-parser")
const sequelize = require("./config/database")
const cors = require("cors")
const morgan = require("morgan")

const wydarzenieRoutes = require("./routes/wydarzenieRoutes")
const adresRoutes = require("./routes/adresRoutes")
const uczestnikRoutes = require("./routes/uczestnikRoutes")
const organizatorRoutes = require("./routes/organizatorRoutes")
const platnoscRoutes = require("./routes/platnoscRoutes")
const punktKontrolnyRoutes = require("./routes/punktKontrolnyRoutes")
const rejestracjaRoutes = require("./routes/rejestracjaRoutes")
const sponsorRoutes = require("./routes/sponsorRoutes")
const trasaRoutes = require("./routes/trasaRoutes")
const uzytkownikRoutes = require("./routes/uzytkownikRoutes")
const wynikiRoutes = require("./routes/wynikiRoutes")
const trasaHasPunktKontrolnyRoutes = require("./routes/trasaHasPunktKontrolnyRoutes")
const wydarzenieHasSponsorRoutes = require("./routes/wydarzenieHasSponsorRoutes")
const wydarzenieHasOrganizatorRoutes = require("./routes/wydarzenieHasOrganizatorRoutes")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())

app.use("/api/wydarzenia", wydarzenieRoutes)
app.use("/api/adresy", adresRoutes)
app.use("/api/uczestnicy", uczestnikRoutes)
app.use("/api/organizatorzy", organizatorRoutes)
app.use("/api/platnosci", platnoscRoutes)
app.use("/api/punkty_kontrolne", punktKontrolnyRoutes)
app.use("/api/rejestracje", rejestracjaRoutes)
app.use("/api/sponsorzy", sponsorRoutes)
app.use("/api/trasy", trasaRoutes)
app.use("/api/uzytkownicy", uzytkownikRoutes)
app.use("/api/wyniki", wynikiRoutes)
app.use("/api/trasa_punkty_kontrolne", trasaHasPunktKontrolnyRoutes)
app.use("/api/wydarzenie_sponsor", wydarzenieHasSponsorRoutes)
app.use("/api/wydarzenie_organizator", wydarzenieHasOrganizatorRoutes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.get("/", (req, res) => {
	res.send("System Zarządzania Maratonami")
})

sequelize
	.authenticate()
	.then(() => {
		console.log("Database connected...")
		return sequelize.sync()
	})
	.then(() => {
		console.log("Database synchronized")
		const PORT = process.env.PORT || 3000
		app.listen(PORT, console.log(`Server started on port ${PORT}`))
	})
	.catch(err => {
		console.log("Error: " + err)
	})

app.use((req, res, next) => {
	res.status(404).json({ error: "Not Found" })
})

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).json({ error: "Something went wrong!" })
})
