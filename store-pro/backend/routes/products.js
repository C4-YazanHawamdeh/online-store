const express = require("express");
 const{createNewProduct, getAllProducts, getProductByName,
     getProductByType, getProductByBrand, updateProductById,
      deleteProductById, getProductById,getProductsNoLimit}=require("../controllers/products")
//  const authentication = require("../middlewares/authentication");

const productsRouter=express.Router();

productsRouter.post("/",createNewProduct)
productsRouter.get("/page",getAllProducts)
productsRouter.get("/",getProductsNoLimit)

productsRouter.get("/id/:id",getProductById)
productsRouter.get("/search_name",getProductByName)
productsRouter.get("/type/:type",getProductByType)
productsRouter.get("/brand/:brand",getProductByBrand)

productsRouter.put("/:id", updateProductById);
productsRouter.delete("/:id",deleteProductById)
//======================================



module.exports=productsRouter