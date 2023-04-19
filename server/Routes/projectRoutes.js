import express from 'express';
import asyncHandler from "express-async-handler";
import project from '../Models/projectModel.js';
import { admin, protect } from "./../Middleware/AuthMiddleware.js";
const projectRoute=express.Router();
// GET ALL PRODUCT
projectRoute.get(
    "/",
    asyncHandler(async (req,res)=>{
        const pageSize=6
        const page=Number(req.query.pageNumber) || 1 ;
        const keyword = req.query.keyword ? {
            name:{
                $regex:req.query.keyword,
                $options: "i",
            },
        }
        :{}
        const count =await project.countDocuments({ ...keyword });
        const products =await project.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1)).sort({_id:-1});
        res.json({products , page , pages: Math.ceil(count / pageSize)}); 
    })
);
//GET SINGLE project
projectRoute.get(
    "/:id",
    asyncHandler(async (req,res)=>{
        const product =await project.findById(req.params.id);
        if(product){
            res.json(product); 
        }
        else{
            res.status(404);
            throw new Error("Product not Found");
        }
        
    })
);


//PRODUCT REVIEW
projectRoute.post(
    "/:id/message",
    protect,
    asyncHandler(async (req,res)=>{
        const {rating,comment}=req.body
        const product =await project.findById(req.params.id);
        if(product){
            const alreadyReviewed = product.reviews.find(
                (r) => r.user.toString()=== req.user._id.toString()
            )
        if (alreadyReviewed) {
            res.status(400);
            throw new Error("Product already Reviewed");
        }
        const review={
            name:req.user.name,
            rating:Number(rating),
            comment,
            user:req.user._id,
        };
        product.reviews.push(review);
        product.numReviews=product.reviews.length;
        product.rating =
                product.reviews.reduce((acc,item)=>item.rating + acc, 0) /
                product.reviews.length;
                await product.save()


        
        }
        else{
            res.status(404);
            throw new Error("Product not Found");
        }
        
    })
);

  // CREATE Project
  projectRoute.post(
    "/",
    protect,
    asyncHandler(async (req, res) => {
        const { title, author, description, bookcode,image, countInStock,forstaffonly } = req.body;
        const projectExist = await Product.findOne({ title });
        if (projectExist) {
        res.status(400);
        throw new Error("Product name already exist");
        } else {
        const project = new Product({
            title,
            author,
            description,
            image,
            countInStock,
            bookcode,
            forstaffonly,
            user: req.user._id,
        });
        if (project) {
            const createdproduct = await project.save();
            res.status(201).json(createdproduct);
        } else {
            res.status(400);
            throw new Error("Invalid product data");
        }
        }
    })
    );
export default projectRoute;