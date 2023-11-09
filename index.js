const express = require('express')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

var destinations = [{id:0,name:"Paris"},{id:1,name:"Rome"}]

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.get("/destinations", (req,res)=>{
    res.send(destinations);
})
app.post("/destination",(req,res)=>{
    destinations.push({id:req.body.id, name:req.body.name})
    res.send(`${JSON.stringify(destinations)} created`)
})
app.delete("/destination/:id", (req,res)=>{
    console.log('delete:id:'+req.params.id)
    destinations = destinations.filter(item=> item.id != req.params.id)
    res.send("destinations left:"+JSON.stringify(destinations));
})

app.listen(4000,()=>console.log('Listening on 4000'))