const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
try {
  const allTags = await Tag.findAll({include: [Product]});
  res.json(allTags);
 } catch (error) {
   console.log(error.message);
   res.status(400).end(error.message)
}});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
try {
  const oneTag = await Tag.findByPk(req.params.id, {include: [Product]});
  res.json(oneTag)
} catch (error) {
  console.log(error.message);
  res.status(400).end(error.message)
}
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const createTag = await Tag.create(req.body);
    res.json(createTag)
  }
  catch (error) {
    console.log(error.message)
    res.status(400).json(error)
  }});

router.put('/:id', async ({body, params: {id}}, res) => {
  // update a tag's name by its `id` value
  try {
    const updateATag = await Tag.update(body, { where: { id } })
    res.json(updateATag)
  }
  catch (error) {
    console.log(error.message);
    res.status(400).end(error.message)
  }});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const destroyATag = await Tag.destroy({ where: { id: req.params.id}})
    res.json(destroyATag)
  }
  catch (error) {
    console.log(error.message);
    res.status(400).end(error.message)
  }});

module.exports = router;
