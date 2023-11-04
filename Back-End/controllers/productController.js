const ProductsModel=require('../models/products');

exports.CreateProduct=async (req, res) => {

    try {
        let reqBody = req.body;
        let result=await ProductsModel.create(reqBody);
        res.status(200).json({status:"success",data:result})
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }

}


exports.ReadProduct=async (req,res)=>{
    try {
        let result = await ProductsModel.find();
        res.status(200).json({status:"success",data:result})
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}


exports.ReadProductById=async (req,res)=>{
    try {
        let id= req.params.id;
        let result=await ProductsModel.find({_id:id});
        res.status(200).json({status:"success",data:result})

    }catch (err) {
        res.status(200).json({status:"fail",data:err.toString()})
    }
}

exports.DeleteProduct=async (req,res)=>{
    try {
        let id= req.params.id;
        let result=await ProductsModel.deleteOne({_id:id})
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

exports.UpdateProduct=async (req,res)=>{
    try {
        let id= req.params.id;
        let reqBody=req.body;
        let result=await ProductsModel.updateOne({_id:id},reqBody)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}
