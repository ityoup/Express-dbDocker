import { con } from "../db.js";
import { Router} from "express";




const router = Router();



router.get('/xd',(req, res)=>{
    let name = req.query.name;
    let edad = req.query.edad;
    
    
})

router.get('/alumnos',async(req, res)=>{
    const [resultados] = await con.query("Select * from alumnos");
    res.render('index', {resultados:resultados})
})


router.post("/insert",(req, res)=>{
    let nombre = req.body.name;
    let edad = req.body.edad;
    let imagen = req.body.imagen;
    async function insertDB() {
        const mandar = await con.query(`insert into alumnos(nombre, edad) values ('${nombre}',${edad})`);
        
    }
    insertDB();
    res.redirect("/alumnos")

})

export default router;