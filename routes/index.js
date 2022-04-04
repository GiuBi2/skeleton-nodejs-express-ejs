var express = require('express');
var router = express.Router();

const Autor = require ("../models/autor");
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.delete('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar();
  res.json(autores.rows);
});

router.put('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json (autores.rows);
});

router.post('/inserir', async function(req, res, next) {
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.get('/livros', async function(req, res, next) {
  const autores = await Autor.livros(req.body);
  res.json(autores.rowns);
});

//ROTA LIVROS
const Livro = require ("../models/livro");
router.get('/select', async function(req, res, next) {
  const livros = await Livro.selecionar();
  res.json(livros.rows);
});

router.delete('/delete', async function(req, res, next) {
  const livros = await Livro.deletar();
  res.json(livros.rows);
});

router.put('/update', async function(req, res, next) {
  const livros = await Livro.atualizar(req.body);
  res.json (livros.rows);
});

router.post('/insert', async function(req, res, next) {
  const livros = await Livros.inserir(req.body);
  res.json(livros.rows);
});

module.exports = router;

