const mongoose = require('mongoose') ;
mongoose.connect('mongodb+srv://Blessy93:Leo1983@cluster0.j8lyqnk.mongodb.net/blogdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})
