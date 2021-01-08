import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const port = 5000;
const db = new sqlite3.Database("todosDB");

db.run(`CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, todo TEXT)`);

const app = express();

const corsOptions = {
    allowedMethods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
    origin: true
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    const msg = `Request recebida`

    db.all("SELECT * FROM todos;", (err, rows) =>{
        if(err){
            console.log(err);
            res.status(500).send("Internal database error");
        } else {
            res.send(rows);
        }
    })
    
})

app.post('/', (req, res) => {
    const logMsg = `Request recebida:\n${JSON.stringify(req.body)}`
    console.log(logMsg);
    
    const body = req.body;

    db.run("INSERT INTO todos (todo) VALUES($todo);", {$todo: body.todo}, (err) => {
        if(err){
            console.log(err);
            res.status(500).send("Internal database error");
        } else {
            res.send("Accept");
        }
    });

})

app.delete('/', async (req, res) => {
    const logMsg = `Request recebida:\n${JSON.stringify(req.body)}`
    console.log(logMsg);

    const body = req.body;

    db.run("DELETE FROM todos WHERE id = $id;", {$id: body.id}, (err) => {
        if(err){
            console.log(err);
            res.status(500).send("Internal database error");
        } else {
            res.send("Accept");
        }
    })
    
})

app.options('/', cors(corsOptions));

app.listen(port, () => {
    console.log("Server started...");
})
