const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({include: [Product]});
    res.json(allCategories);
  } catch (error) {
    console.log(error.message);
    res.status(400).end(error.message)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory = await Category.findByPk(req.params.id, {include: [Product]});
    res.json(oneCategory);
  } catch (error) {
    console.log(error.message);
    res.status(400).end(error.message)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(req.body);
    res.json(createCategory)
  } catch (error) {
    console.log(error.message);
    res.status(400).end(error.message)
  }
});

router.put('/:id', async ({body, params: {id}}, res) => {
  // update a category by its `id` value
  try {
    const updateACategory = await Category.update(body, { where: { id }})
    res.json(updateACategory)
  } catch (error) {
    console.log(error.message);
    res.status(400).end(error.message)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const destroyACategory = await Category.destroy({ where: { id: req.params.id}})
    res.json(destroyACategory)
  } catch (error) {
    console.log(error.message);
    res.status(400).end(error.message)
  }
});

module.exports = router;
