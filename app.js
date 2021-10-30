const express = require ("express");
const morgan = require ("morgan");
const path =require("path");
const app = express();
const bodyParser = require("body-parser");

app.set('port',process.env.PORT || 3000);

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require("./routes/index")(app);

app.listen(app.get("port"),()=>{
    console.log('Puerto en el servidor', app.get("port"))
})