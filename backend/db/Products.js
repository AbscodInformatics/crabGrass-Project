const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    date:String,
    product_name:String,
    product_category:String,
    product_code:String,
    price:String,
    tax_id:String,
    quantity :Number,
});
module.exports=mongoose.model('products',productSchema);
