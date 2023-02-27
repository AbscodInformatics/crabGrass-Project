import * as Yup from 'yup'

export const returnSchema=Yup.object({
    date:Yup.date().required('enter Date'),
    reference_no:Yup.string().min(2).max(12).required('Enter Reference no.'),
    biller:Yup.string().min(3).max(20).required('Enter biller Name') ,
    customer_name:Yup.string().min(3).max(20).required('Enter Customer name'),
    total:Yup.number().required('Enter total Amount'),
    payment_status:Yup.string().min(3).max(20).required('Enter Payment status')
})

export const productSchema=Yup.object({
    date:Yup.date().required('Enter Date'),
   product_name:Yup.string().min(3).max(20).required('Enter Product name'),
   product_category:Yup.string().min(3).max(20).required('Enter Product Category'),
   product_code:Yup.string().min(3).max(20).required('Enter Product Code'),
   price:Yup.number().required('Enter Price'),
   tax_id:Yup.string().min(3).max(20).required('Enter Tax id'),
   quantity:Yup.string().min(3).max(20).required('Enter Quantity'),
   size:Yup.string().min(3).max(20).required('Enter Size'),
})

export const purchaseSchema=Yup.object({
        date:Yup.date().required('Enter Date'), 
        reference_no: Yup.string().min(3).max(20).required('Enter Reference NO.'),
        supplier: Yup.string().min(3).max(20).required('Enter Supplier name'),
        purchase_status: Yup.string().min(3).max(20).required('Enter Purchase Status'),
        balance: Yup.number().required('Enter Amount'),
        payment_status: Yup.string().min(3).max(20).required('EnterPayment Status'),
        zip_code: Yup.number().required('Enter ZIP Code'),
        tax_id: Yup.string().min(3).max(20).required('Enter Tax ID'),
})

export const saleSchema=Yup.object({
      biller_name:Yup.string().min(3).max(20).required('Enter biller name'),
      customer_name:Yup.string().min(3).max(20).required('Enter customer name'),
      reference_no:Yup.string().min(3).max(20).required('Enter Reference No'),
      balance:Yup.number().required('Enter Amount'),
      date:Yup.date().required('Enter Date'),
      order_no:Yup.string().min(3).max(20).required('Enter Order No.'),
})

export const salesManSchema=Yup.object({
    company:Yup.string().min(3).max(20).required('Enter Company name'),
      name:Yup.string().min(3).max(20).required('Enter name'),
      contact:Yup.number().required('Enter Contact No.'),
      email:Yup.string().email().required('Enter Email'),
      date:Yup.date().required('Enter Date'),
      address:Yup.string().min(3).max(25).required('Enter Address')
})

export const userSchema=Yup.object({
    name:Yup.string().min(3).max(20).required('Enter User name'),
     email:Yup.string().email().required('Enter Email'),
     contact:Yup.number().required('Enter Contact'),
     address:Yup.string().min(3).max(20).required('Enter Address'),
     password:Yup.string().min(3).max(20).required('Enter Password'),
     confirm_password:Yup.string().required('Confirm Password'),
})