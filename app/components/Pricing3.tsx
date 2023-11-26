import React from 'react'
import { IoMdCheckmark, IoMdCloseCircle } from 'react-icons/io'

const Pricing3 = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
          <div className="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:border-t-8 hover:border-r-8 hover:border-yellow-500 rounded-lg transition duration-400 ease-in">
            <div className="m-8 h-96">
              <div className=" m-2">Silver</div>
              <div className=" m-2 text-3xl">$3.99/Mo</div>
              <div className=" m-2 mt-8">For Freelancers</div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">1 website</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">30 GB Storage</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">2 Databases</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">~10,000 Visits Monthly</div>
              </div>
              <div className="flex">
                <IoMdCloseCircle className="m-1 text-red-500" />
                <div className="">SSL</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                Subscribe
              </div>
            </div>
          </div>
          <div className="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:border-t-8 hover:border-r-8 hover:border-pink-500 rounded-lg transition duration-400 ease-in">
            <div className="m-8 h-96">
              <div className=" m-2">Gold</div>
              <div className=" m-2 text-3xl">$9.99/Mo</div>
              <div className=" m-2 mt-8">For Freelancers</div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">10 websites</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">100 GB Storage</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">Unlimited Databases</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">~25,000 Visits Monthly</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">SSL</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-yellow-500" />
                <div className="">Weekly Backups</div>
              </div>
              <div className="flex">
                <IoMdCloseCircle className="m-1 text-red-500" />
                <div className="">Free E-mail</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                Subscribe
              </div>
            </div>
          </div>
          <div className="bg-white m-4 shadow-xl min-h-96 flex flex-col justify-center text-black hover:border-t-8 hover:border-r-8 hover:border-violet-500 rounded-lg transition duration-400 ease-in">
            <div className="m-8 h-96">
              <div className=" m-2">Diamond</div>
              <div className=" m-2 text-3xl">$14.99/Mo</div>
              <div className=" m-2 mt-8">For Freelancers</div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">100 websites</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">500 GB Storage</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">Unlimited Databases</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">~100,000 Visits Monthly</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">SSL</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">Daily Backups</div>
              </div>
              <div className="flex">
                <IoMdCheckmark className="m-1 text-green-500" />
                <div className="">Free E-mail</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-stone-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Pricing3