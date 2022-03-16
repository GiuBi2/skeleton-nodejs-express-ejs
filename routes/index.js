var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores. rows);
  res.render('index', { title: 'Express' });
});

router.get('/', async function(req, res, next) {
  const autores = await Autor.deletar(id);
  res.json(autores. rows);
  res.render('index', { title: 'Express' });
});

router.get('/', async function(req, res, next) {
  const autores = await Autor.atualizar(id);
  res.json(autores. rows);
  res.render('index', { title: 'Express' });
});

router.get('/', async function(req, res, next) {
  const autores = await Autor.inserir();
  res.json(autores. rows);
  res.render('index', { title: 'Express' });
});
module.exports = router;
