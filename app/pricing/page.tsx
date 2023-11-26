import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Pricing: React.FC = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center">
        <div className="max-w-7xl grid grid-cols-1 px-4 py-2 my-20 gap-y-10 gap-x-12  md:grid-cols-2 xl:grid-cols-3">
          <div className="w-[300px] h-auto border-[3px] shadow-xl rounded-xl hover:transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl hover:border-gray-400">
            <div className="border border-slate-200 bg-white rounded-md shadow-md relative z-10 divide-y divide-solid divide-gray-300 space-y-9 ">
              <div>
                <div className="uppercase tracking-wider text-white text-center rounded-md w-[320px] -ml-[10px] mt-5 p-3 border border-gray-400 bg-gray-400 font-bold">
                  Free
                </div>
                <div className="w-[150px] mt-8 mb-4 ml-[72px] ">
                  <img
                    src="https://img.freepik.com/free-vector/beautiful-hand-draw-landscape-with-mountain-sketch-design_1035-20277.jpg?t=st=1656619535~exp=1656620135~hmac=f10f65b508250b926c1a72d1a699fc5c1b112e2934016ec2e3250c8f175395f8&w=900"
                    alt=""
                    className=""
                  />
                </div>
                <div className="flex justify-center tracking-wider text-gray-500 ">
                  <div className="text-xl font-medium mt-[6px]">$</div>
                  <div className="text-6xl font-light">0</div>
                  <div className="text-xl font-medium mt-[32px]">/month</div>
                </div>
              </div>

              <div className="w-[230px] ml-8">
                <div className="flex-col text-center space-y-2 my-5 ">
                  <div className="flex justify-center text-sm font-bold text-blue-500 space-x-1">
                    <IoMdCheckmark />
                    <div className=""> Lorem ipsum</div>
                  </div>
                  <div className="text-sm font-bold text-gray-500">
                    Lorem ipsum dolor sit.
                  </div>
                  <div className="text-sm font-bold text-gray-500">Lorem ipsum </div>
                </div>
              </div>
            </div>
            <a href="#">
              <div className="uppercase text-gray-500 text-center rounded-b-md w-auto pt-8 pb-[30px] text-sm     font-bold -mt-2 relative z-0 hover:text-gray-600 hover:bg-gray-200 ">
                Activate
              </div>
            </a>
          </div>

          <div className="w-[300px] h-auto border-[3px] hover:border-green-400 rounded-xl shadow-xl hover:transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl xl:ml-[5px]">
            <div className="border-b border-slate-200 bg-white rounded-md shadow-md relative z-10 divide-y divide-solid divide-gray-300 space-y-9">
              <div>
                <div className="uppercase tracking-wider text-white text-center rounded-md w-[320px] -ml-[13px] mt-5 p-3 border border-green-400 bg-green-400 font-bold">
                  basic
                </div>
                <div className="w-[150px] mt-8 mb-4 ml-[72px]">
                  <img
                    src="https://img.freepik.com/free-vector/beautiful-hand-draw-landscape-with-mountain-sketch-design_1035-20277.jpg?t=st=1656619535~exp=1656620135~hmac=f10f65b508250b926c1a72d1a699fc5c1b112e2934016ec2e3250c8f175395f8&w=900"
                    alt=""
                    className=""
                  />
                </div>
                <div className="flex justify-center tracking-wider text-green-400">
                  <div className="text-xl font-medium mt-[6px]">$</div>
                  <div className="text-6xl font-light">5</div>
                  <div className="text-xl font-medium mt-[32px]">/month</div>
                </div>
              </div>

              <div className="w-[230px] ml-8">
                <div className="flex-col  text-center space-y-2 my-5">
                  <div className="flex justify-center text-sm font-bold text-blue-500 space-x-1">
                    <IoMdCheckmark />
                    <div className=""> Lorem ipsum</div>
                  </div>
                  <div className="flex justify-center text-sm font-bold text-blue-500 space-x-1">
                    <IoMdCheckmark />
                    <div className=""> Lorem ipsum dolor sit.</div>
                  </div>
                  <div className="text-sm font-bold text-gray-500">Lorem ipsum </div>
                </div>
              </div>
            </div>

            <a href="#">
              <div className="uppercase text-green-400 text-center rounded-b-md w-auto pt-8 pb-[30px] text-sm  font-bold -mt-2 relative z-0 hover:cursor-pointer hover:text-green-600 hover:bg-green-200">
                current subscription
              </div>
            </a>
          </div>

          <div className="w-[300px] h-auto border-[3px] hover:border-yellow-500 rounded-xl shadow-xl hover:transform hover:scale-105 duration-500 ease-in-out hover:shadow-2xl md:ml-[55%] xl:ml-0">
            <div className="border-b border-slate-200 rounded-md   shadow-md relative z-10 bg-white divide-y divide-solid divide-gray-300 space-y-9">
              <div>
                <div className="uppercase tracking-wider text-white text-center rounded-md w-[320px] -ml-[10px] mt-5 p-3 border border-yellow-500 bg-yellow-500 font-bold">
                  gold
                </div>
                <div className="w-[150px] mt-8 mb-4 ml-[72px]">
                  <img
                    src="https://img.freepik.com/free-vector/beautiful-hand-draw-landscape-with-mountain-sketch-design_1035-20277.jpg?t=st=1656619535~exp=1656620135~hmac=f10f65b508250b926c1a72d1a699fc5c1b112e2934016ec2e3250c8f175395f8&w=900"
                    alt=""
                    className=""
                  />
                </div>
                <div className="flex justify-center tracking-wider text-yellow-500">
                  <div className="text-xl font-medium mt-[6px]">$</div>
                  <div className="text-6xl font-light">10</div>
                  <div className="text-xl font-medium mt-[32px]">/month</div>
                </div>
              </div>

              <div className="w-[230px] ml-8">
                <div className="flex-col  text-center space-y-2 my-5">
                  <div className="flex justify-center text-sm font-bold text-blue-500 space-x-1">
                    <IoMdCheckmark />
                    <div className=""> Lorem ipsum</div>
                  </div>
                  <div className="flex justify-center text-sm font-bold text-blue-500 space-x-1">
                    <IoMdCheckmark />
                    <div className=""> Lorem ipsum dolor sit.</div>
                  </div>
                  <div className="flex justify-center text-sm font-bold text-blue-500 space-x-1">
                    <IoMdCheckmark />
                    <div className=""> Lorem ipsum </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#">
              <div className="uppercase text-white bg-blue-500 text-center rounded-b-md w-auto pt-8 pb-[31px]  text-sm font-bold -mt-2 relative z-0 hover:cursor-pointer hover:bg-yellow-500">
                upgrade
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
