const express = require('express')
const router = express.Router()




// define the home page route
router.get('/', (req, res) => {
  res.send('Animal home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Animal')
})
router.get('/animalpost/:slug',(req,res)=>{
    res.send(`fetch the animal post for aniaml ${req.params.slug}`)
})

module.exports = router