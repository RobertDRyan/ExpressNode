const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/Hello/:name',(req, res) => res.send('Well'))

app.get('/test', (req, res)=> {
 //   res.send('story');
 res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/name', (req, res) =>{
    console.log('All working');

  //  console.log(req.query.fname);
  //  console.log(req.query.lname);

    res.send('Hello' + req.query.fname + '' + req.query.lname)

})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + " " + req.body.lname);
})


app.get('/api/movies' ,(req, res) => {
    const movies = [
    {
    "Title":"Avengers: Infinity War",
    "Year":"2018",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
    "Title":"Captain America: Civil War",
    "Year":"2016",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }
    ]

res.status(200).json({
    message: "Eeverything is good",
    myMovies:movies
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))