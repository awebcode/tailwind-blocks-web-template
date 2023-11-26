import React from 'react'

const Login = () => {
  return (
    <div id="login">
      {" "}
      <div className="flex flex-col py-10 m-5 md:m-10 justify-center rounded  items-center  bg-gradient-to-t from-yellow-200 via-green-500 to-violet-500">
        <div className=" md:w-auto w-[90%] p-8 rounded-xl  m-4 flex flex-col items-center shadow-lg border border-gray-400 opacity-90 ">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 ">
            <h1 className="font-semibold text-3xl text-gray-200 m-2">Log In</h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
            <div className="">
              <div className="m-1 text-lg text-gray-200 text-semibold">Username</div>
              <input
                type="text"
                className="border-b border-gray-200 focus:outline-none focus:border-x-green-500  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
              />
            </div>
            <div className="">
              <div className="m-1 text-lg text-gray-200 text-semibold">Password</div>
              <input
                type="password"
                className="border-b border-gray-200 focus:outline-none focus:border-x-green-500  text-gray-200 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent "
              />
            </div>
          </div>
          <div className="text-center mt-7">
            <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-t from-stone-900 via-purple-900 to-violet-600  font-medium ">
              login
            </button>
          </div>
        </div>
        <div className="text-center my-6 flex flex-col">
          <a
            href="#"
            className="text-sm font-medium text-white hover:text-violet-500 m-1"
          >
            Forgot Password ?
          </a>
          <a href="#" className="text-sm font-bold text-white hover:text-violet-500 m-1">
            Not a User? Create New Account
          </a>
        </div>
      </div>{" "}
    </div>
  );
}

export default Login