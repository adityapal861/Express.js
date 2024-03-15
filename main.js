const express = require('express')
const blog = require('./routes/blog')
const shop=require('./routes/shop')
const animal = require('./routes/animal')




const app = express()
const port = 3000
app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop',shop)

app.use('/animal', animal)


app.get('/', (req, res) => {
    console.log("hey its a get request");
  res.send('Hello World! Aditya Pal')
})
app.post('/',(req,res)=>{
    console.log("Hey its a post request");
    res.send("Hey its a post request")
})
app.put('/',(req,res)=>{
    console.log("Het its a put request");c
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})
app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["aditya", "harsh"] })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})








