
const port = process.env.PORT || 3100;

const {app} = require('./app')



app.listen(port, ()=>{

    console.log(`listening at ${port}`)
    
    })