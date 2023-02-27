const mongoose = require('mongoose');
 
const purchaseSchema = mongoose.Schema({
    date:String,
    reference_no:String,
    supplier:String,
    purchase_status:String,
    balance:String,
    payment_status:String,
    zip_code:String,
    tax_id:String,
});
module.exports=mongoose.model('purchases',purchaseSchema);