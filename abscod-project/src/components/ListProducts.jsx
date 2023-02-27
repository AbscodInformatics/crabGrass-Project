import React, { useEffect, useState } from "react";

function ListProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let result = await fetch("http://localhost:4000/products");
      result = await result.json();
      setData(result);
    };
    getData();
  }, []);
  console.log("result", data);

  return (
    <div className="mx-8 lg:w-11/12 w-full overflow-x-auto">
      <table className="w-full whitespace-nowrap border-gray-100 border rounded-lg">
        <thead className="bg-gray-100">
          <tr className>
            <th className="text-left py-5 pl-4 rounded-tl-lg">
              <p className="text-sm font-medium leading-none text-gray-900">
                Date
              </p>
            </th>
            <th className="text-left py-5">
              <p className="text-sm font-medium leading-none text-gray-900">
                Product Name
              </p>
            </th>
            <th className="text-left py-5 pl-5 border-l border-gray-200 ">
              <p className="text-sm font-medium leading-none text-gray-900">
                Product Category 
              </p>
            </th>
            <th className="text-left py-5 pr-16">
              <div className="flex items-center">
                <p className="text-sm font-medium pr-0.5 leading-none text-gray-900">
                  Product Code 
                </p>
                
              </div>
            </th>
            <th className="text-left py-5 pr-16">
              <div className="flex items-center">
                <p className="text-sm font-medium pr-0.5 leading-none text-gray-900">
                  Price/piece 
                </p>
                
              </div>
            </th>
            <th className="text-left py-5">
              <p className="text-sm font-medium leading-none text-gray-900">
                Tax Id No.
              </p>
            </th>
            <th className="text-left py-5">
              <p className="text-sm font-medium leading-none text-gray-900">
                Quantity
              </p>
            </th>
            <th className="flex items-end justify-end rounded-tr-lg"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              
                <tr className="bg-gray-100">
                  <td className="py-3 pr-20 pl-4">
                    <p className="text-sm leading-none text-gray-900">
                      {item.date}
                    </p>
                  </td>
                  <td className="py-3 pr-12">
                    <p className="text-sm leading-none text-gray-900">
                    {item.product_name}
                    </p>
                  </td>
                  <td className="border-l pl-5 pr-20 border-gray-200 py-3">
                    <p className="text-sm leading-none text-gray-900">{item.product_category}</p>
                  </td>
                  <td className="py-3 pr-16">
                    <p className="text-sm leading-none text-gray-900">{item.product_code}</p>
                  </td>
                  <td className="py-3 pr-16">
                    <p className="text-sm leading-none text-gray-900">{item.price}</p>
                  </td>
                  <td className="py-3 pr-10">
                    <p className="text-sm leading-none text-gray-900">{item.tax_id}</p>
                  </td>
                  <td className="py-3 pr-10">
                    <p className="text-sm leading-none text-gray-900">{item.quantity}</p>
                  </td>
                  <td className="py-3" />
                </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListProducts;
