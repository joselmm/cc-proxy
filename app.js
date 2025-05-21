import fetch from "node-fetch";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.use(express.json());


app.post("/", (req, res) => {
  fetch(process.env.AS, {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" }
  }).catch(err => {
    console.error("Error al enviar con fetch:", err);
  });

  // Responder inmediatamente sin esperar
  res.status(200).send("ok");
});


app.listen(port, () => console.log("Escuchando en puerto: " + port));