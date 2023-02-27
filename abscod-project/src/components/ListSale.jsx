import React, { useEffect, useState } from "react";

function ListSale() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    getData();
  }, []);

  const getData = async () => {
    let result = await fetch("http://localhost:4000/sale");
    result = await result.json();
    setData(result);
  };

  const deleteHandle=async(id)=>{
    let result=await fetch(`http://localhost:4000/sale/${id}`,{
      method:'Delete'
    })
    result=await result.json();
    if(result){
      alert("Data Deleted")
      getData();
    }
  }

  return (
    <>
      <div className="bg-white shadow xl:w-full 2xl:w-4/5 w-full px-6 sm:px-12 py-5 sm:py-10">
        <div className="mb-5 sm:mb-10 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              List Sales
            </p>
            <div className="flex items-center mt-4 sm:mt-0">
              <div className="flex items-center pl-3 bg-white border rounded-md border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 17.5L12.5 12.5"
                    stroke="#9CA3AF"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  className="py-2.5 pl-1 w-40 sm:w-64 focus:outline-none text-sm rounded-md text-gray-600 placeholder-gray-400"
                  placeholder="Search"
                />
              </div>
              <button
                onclick="popuphandler(true)"
                className="inline-flex ml-3 whitespace-nowrap items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p className="text-xs sm:text-sm font-medium leading-none text-white">
                  Add Sale
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-20 w-full text-sm leading-none text-gray-600">
                  <th className="font-normal text-left pl-4">Date</th>
                  <th className="font-normal text-left pl-10">Biller Name</th>
                  <th className="font-normal text-left pl-10">Customer Name</th>
                  <th className="font-normal text-left pl-10">Order No.</th>
                  <th className="font-normal text-left pl-10">Balance</th>
                  <th className="font-normal text-left pl-10">Balance</th>
                  <th className="font-normal text-left pl-10 w-32">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                {data.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-50"
                    >
                      <td className="pl-4">{item.date}</td>
                      <td className="pl-10">{item.biller_name}</td>
                      <td className="pl-10">
                        <div className="flex items-center">
                          <img
                            className="shadow-md rounded-full w-10 h-10 mr-3"
                            src="https://cdn.tuk.dev/assets/templates/olympus/invoice.png"
                          />
                          {item.customer_name}
                        </div>
                      </td>
                      <td className="pl-10">{item.order_no}</td>
                      <td className="pl-10">
                        <div className="w-20 h-6 flex items-center justify-center bg-blue-50 rounded-full">
                          <p className="text-xs leading-3 text-blue-500">
                            {item.balance}
                          </p>
                        </div>
                      </td>
                      <td className="pl-10">{item.balance}</td>
                      <td className="pl-10">
                        <div className="flex items-center">
                          <button className="focus:outline-none bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500" onClick={()=>deleteHandle(item._id)}>
                            Delete
                          </button>
                          
                        </div>
                      </td>
                    </tr>
                  );
                })}

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListSale;
