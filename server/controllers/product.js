const Product = require('../models/product');
//CRUD using HTTP verbs (GET, POST, PUT, DELETE)

// GET /api/projects/
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET /api/projects/:id
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// POST /api/projects
exports.createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category
    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// PUT /api/projects/:id
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        //update cat 
        if (req.body.name != null) {
            product.name = req.body.name;
        }
        if (req.body.description != null) {
            product.description = req.body.description;
        }
        if (req.body.price != null) {
            product.price = req.body.price;
        }
        if (req.body.quantity != null) {
            product.quantity = req.body.quantity;
        }
        if (req.body.category != null) {
            product.category = req.body.category;
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// DELETE /api/projects/:id
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        //can't use remove gotta findByIdAndDelete
        await Product.findByIdAndDelete();
        res.json({ message: 'Product deleted' });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//del all 
exports.deleteAll = async (req, res) => {
    try {
        await Product.deleteMany({});
      
        res.json({ message: 'All products have been deleted' });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// get kw ???
exports.getProductsByName = async (req, res) => {
    try {
        const keyword = req.query.name;
        const products = await Product.find({ 
            //lowercase?? regex
            name: new RegExp(keyword, 'i')
        });
        res.json(products);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};