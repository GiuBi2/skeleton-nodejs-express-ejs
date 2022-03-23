var express = require('express');
var router = express.Router();

const Autor = require ("../models/autor");
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.get('/deletar', async function(req, res, next) {
 // const autor = {id:"1"}
  const autores = await Autor.deletar();
  res.json(autores.rows);
});

router.put('/atualizar', async function(req, res, next) {
   //const autor = {nome:"Maria", sobrenome:"Oliveira", data_nasc:"1990/07/02", id:"1"} 
  const autores = await Autor.atualizar(req.body);
  res.json (autores.rows);
});

router.post('/inserir', async function(req, res, next) {
  //const autor = {nome:"José", sobrenome:"Santos", data_nasc:"1985/05/27"}
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});
module.exports = router;

