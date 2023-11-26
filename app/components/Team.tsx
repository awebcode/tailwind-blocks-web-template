import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div id="team">
      <div className="flex items-center justify-center text-center bg-gradient-to-r from-fuchsia-500 via-red-600 to-cyan-400 w-[100%]">
        <div className="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-white">
          <div className="flex flex-col p-2 m-2 w-full">
            <div className="text-xl md:text-3xl font-medium">Our Team</div>

            <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-4 p-2">
              <div className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
                <div className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    height={40}
                    width={40}
                    alt="ecommerce"
                    src="https://source.unsplash.com/300x300/?girl"
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Elena Gilbert
                </div>
                <div className="italic text-gray-500 text-sm">HR, Asikur</div>
                <div className="flex my-2">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
                <div className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    height={40}
                    width={40}
                    src="https://source.unsplash.com/300x300/?man,businessman"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  John Doe
                </div>
                <div className="italic text-gray-500 text-sm">CEO, Asikur</div>
                <div className="flex my-2">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
                <div className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    height={40}
                    width={40}
                    src="https://source.unsplash.com/300x300/?girl,woman"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Rebbeca
                </div>
                <div className="italic text-gray-500 text-sm">SEO Analyst</div>
                <div className="flex my-2">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4">
                <div className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    height={40}
                    width={40}
                   
                    src="https://source.unsplash.com/300x300/?man,boy"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Reacher
                </div>
                <div className="italic text-gray-500 text-sm">Manager</div>
                <div className="flex my-2">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border-cyan-500 border text-stone-500 hover:bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Team;
