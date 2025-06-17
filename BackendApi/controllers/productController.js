const Product = require("../models/productModels");

// Get All Products
exports.AllgetProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "All products fetched successfully",
      count:products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Single Product by ID
exports.SingleProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product fetched successfully",
      data: product
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


//create Product 

exports.createProduct = async(req,res)=>{
    try {
        const {name, description, price,stock} = req.body;
        const image = req.file ? req.file.filename : null;
         
        if(!name || !description || !image || !price ) {
            return res.status(400).json({
                message:"All fields can be required"
            })
        }

        const newProduct = new Product ({
            name,
            description,
            image,
            stock,
            price
        })

        const savedProducts = await newProduct.save()
        res
          .status(201)
          .json({
            message: "Product created successfully",
            data: savedProducts
          });
        
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }); 
    }
}



//update 

exports.updateProduct = async(req,res) => {
    try {
        const {id} = req.params;
        const updateProducts = await Product.findByIdAndUpdate(id, req.body,{new:true, runValidators:true})

        if(!updateProducts) return res.status(404).json({
            message:"Product not Found"
        })

        res.status(200).json({
            message:"Product update successfully",
            data: updateProducts
        })
        
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }); 
    }
}


//deleteProducts

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProducts = await Product.findByIdAndDelete(id);

    if (!deleteProducts) return res
        .status(404)
        .json({
          message: "Product not Found"
        });

    res.status(200).json({
      message: "Product Delete successfully",
     
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


