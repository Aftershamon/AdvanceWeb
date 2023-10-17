const expressFunction = require("express");
const expressApp = expressFunction();

expressApp.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080')
    res.setHeader('Access-Control-Allow-Methods','POST,GET,PUT,PATCH,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Option,Authorization')
    return next()
})

expressApp.use(expressFunction.json())

expressApp.use('/user',require('./routes/user'))
expressApp.use('/login', require('./routes/signin'))
expressApp.use("/user", require("./routes/course"));



expressApp.listen(8080, function(){
    console.log('Listening on port 8080');
});