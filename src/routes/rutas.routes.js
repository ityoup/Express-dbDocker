import { con } from "../db.js";
import { Router } from "express";



const router = Router();

router.get('/insertar/:nombre/:edad',async(req, res)=>{
    res.send(`El alumno ${req.params.nombre} con ${req.params.edad}, ha sido insertado`)
    const [resultados] = await con.query("Select * from alumnos");
    console.log(resultados);
    const insertar = await con.query(`INSERT INTO alumnos(nombre,edad) VALUES ('${req.params.nombre}','${req.params.edad}')`);
})

router.get('/alumnos',async(req, res)=>{
    const [resultados] = await con.query("Select * from alumnos");
    res.render('index', {resultados:resultados})
})
export default router;