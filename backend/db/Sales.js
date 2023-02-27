const mongoose=require('mongoose');

const salesSchema=mongoose.Schema({
    biller_name:String,
    customer_name:String,
    reference_no:String,
    balance:String,
    date:String,
    order_no:String, 
});
module.exports=mongoose.model('sales',salesSchema);