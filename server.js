require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")
const DBconnection = require("./db")
const customerRoutes = require('./routes/customer');
const productRoutes = require('./routes/product');


DBconnection()

app.use(express.json());
app.use(cors());

//routes
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);



// const port = process.env.PORT || 5000
const port = 5000
app.listen(port, () => {
    console.log(`[+] Listing on port ${port}`);
})