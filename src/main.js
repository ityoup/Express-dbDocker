import express from "express";
import Rutas from "./routes/rutas.routes.js"
import ejs from "ejs";



const app = express();
app.use(Rutas);


app.set('view engine', 'ejs');

app.get('/rutas', (req, res) => {
    res.render('index');
    console.log(priNombre);
    let priNombre = req.query.priNombre;
    console.log(priNombre);
})


app.listen(3000);