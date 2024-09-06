const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const products = [{ id: 1, name: "Product 1", price: 100 }];

// API to get products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// API to add a product
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});