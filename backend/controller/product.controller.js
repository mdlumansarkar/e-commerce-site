import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
    } catch (error) {
        console.log(error);
        res.status(400).json({success:true,data:products});
        
    }
}


export const createProduct = async (req,res)=>{
    // res.send("This is product page");
    const product = req.body;
    let name,price,image;

    if(!product.name || !product.price || !product.image){
        return res.status(422).json({success:false,message:"Please provide all fields properly."});
    }

    const newProduct = new Product(product);
    res.status(201).json({success:true,message:"Saved product",data:newProduct});
    
    try{
        await newProduct.save();
    }catch(err){
        console.error("error from create product",err.message);
        res.status(500).json({success:false,message:"Server error."});
    }
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"deleted succesfully."});
    } catch (error) {
        console.log(error);
        res.status(200).json({success:false,message:"product not found."});
    }
}

export const updateProduct = async(req,res)=>{
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false,message:"Invalid product id."});
    }

    try {
        const updatedProducts = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,message:"Updated Successfully",data:updatedProducts});
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false,message:"Not updated"});
        
    }
}