const express = require('express');
const cors=require('cors');
const logger = require('morgan');
const PORT = process.env.PORT || 3000
const app = new express();

require('./middleware/MongoDB');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));


const path = require('path');
app.use(express.static(path.join(__dirname + '/dist/blog-app')));


const ArticleData = require('./model/article');

app.post('/api/article', async (req, res) => {
    try {
       let item=req.body;
        const newArticle = new ArticleData(item); //to check incoming data
        const saveArticle= await newArticle.save(); //mongodb save
        res.send(saveArticle);

    } catch (error) {
        console.log(error);
    }
})


app.get('/api/articlelist', async (req, res) => {
    try {
        const user = await ArticleData.find();
        res.send(user);
    } catch (error) {
        console.log(error);
    }

})


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/blog-app/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is connected ${PORT}`);
})
