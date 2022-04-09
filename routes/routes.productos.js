const {Router} = require('express');
const router = Router();
const Productos = require('../api/productos')

const producto = new Productos()

router.get('/', (req, res) => {
  const productosLista = producto.listarAll();
  res.json(productosLista);
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const productosLista = producto.listar(id);
  productosLista.length == 0 && res.status(400).json({msg: 'Producto no encontrado'});
  res.status(200).json(productosLista);
})

router.post('/', (req, res) => {
  const productoNuevo = req.body;
  const productoLista = producto.guardar(productoNuevo);
  res.json(productoLista);
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const productoNuevo = req.body;
  const productoLista = producto.actualizar(productoNuevo, id);
  res.json(productoLista);
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const productoLista = producto.borrar(id);
  res.json(productoLista);
})

module.exports = router;