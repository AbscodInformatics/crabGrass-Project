import React, { useState } from "react";
import Barcode from "react-barcode";
const BarcodeGenerator = () => {
  const [text, setText] = useState();
  const [barCode,setBarCode]=useState();
  const generateBarcode=()=>{
    setBarCode(text)
  }
  return (
    <div className=" h-full">
      <span className="flex justify-center bg-green-700 text-white mt-3 p-2">
        <h2>Barcode Generator</h2>
      </span>
      <div className="flex  mt-2 p-2">
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className="col-sm-6 border-2 w-2/5" />
        <button className="bg-blue-500 p-3 mx-4 text-white font-bold" onClick={generateBarcode}>Generate Barcode</button>
      </div>
      <div className="flex justify-center mt-8">
       <Barcode value={barCode}/>
      </div>
    </div>
  );
};

export default BarcodeGenerator;
