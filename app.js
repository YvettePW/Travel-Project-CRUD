const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

var destinations = [{id:0,name:"Paris"},{id:1,name:"Rome"}]

const app = express();
app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Travel API",
            version: "1.0.0"
        }
    },
        apis: ["app.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.get("/destinations", (req,res)=>{
    res.send(destinations);
})

app.post("/destination",(req,res)=>{
    res.send(`${req.body.name} created`)
})


app.listen(4000,()=>console.log('Listening on 4000'))