import React from "react";

function POS() {
  return (
    <div className="flex flex-col h-screen ">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-8">
            <div className="flex  justify-center text-white font-bold">
              Point Of Sale
            </div>
          </div>
        </div>
      </nav>
      <div className="flex-1 flex ">
        <div className="w-2/6 border-2 border-slate-400 ">
          <div className=" m-2   border-2 border-slate-300">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Customer Name "
              className=" border-none  p-1"
            />
          </div>
          <div className="flex ">
            <input
              type="text"
              placeholder="Search Product"
              className="w-4/5 m-2 p-1 border-2 border-slate-300"
            />
            <div className="text-white ml-4  mt-2 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-10  rounded flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-plus"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={12} y1={5} x2={12} y2={19} />
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
            </div>
          </div>
          <div className="border-2 h-3/5 dark:bg-gray-800">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded">
              <thead>
                <tr className="w-full h-10 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                  <th className="pl-3 text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Product
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Price
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Qty
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Subtotal
                  </th>
                  <th className="text-gray-600 font-normal pr-2 text-left text-sm tracking-normal leading-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-12 border-gray-300  border-t border-b hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
                  <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    1
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    1
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    1
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    1
                  </td>
                  <td>
                    <div className="p-2 pr-1 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width={16}
                        height={20}
                        viewBox="0 0 20 20"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={4} y1={7} x2={20} y2={7} />
                        <line x1={10} y1={11} x2={10} y2={17} />
                        <line x1={14} y1={11} x2={14} y2={17} />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="flex justify-evenly m-3">
              <span>Items: 0</span>
              <span>Total: 0</span>
            </div>
            
            <div className="bg-gray-700 p-2  text-white font-bold">
            <div className="flex justify-between m-3    mr-14 mt-4 sm:mt-0 md:mt-5 lg:mt-0 ">
              <span className="">Total Payable:</span>
              <span>Rs.300</span>
            </div>
            </div>
            <div className=" flex justify-center w-full mr-14 mt-4 sm:mt-0 md:mt-5 lg:mt-0">
                    <button className=" w-full m-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-4 text-base md:text-xl">Payment</button>
            </div>
          </div>
        </div>
        <div>hello</div>
      </div>
    </div>
  );
}

export default POS;
