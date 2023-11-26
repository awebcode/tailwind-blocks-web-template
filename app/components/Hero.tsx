import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center  ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
              <div className="text-3xl md:text-7xl font-bold ">
                Make Your Website Look More Attractive
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">
              <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <Image
                  height={50}
                  width={50}
                  alt=""
                  src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            "
                  className=""
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <Image
                    height={30}
                    width={30}
                    alt=""
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <Image
                    height={36}
                    width={36}
                    alt=""
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                    className=""
                  />
                </div>
              </div>
              <div className="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                <Image
                  height={65}
                  width={65}
                  src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            "
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                  <Image
                    height={35}
                    width={35}
                    alt=""
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                  <Image
                    height={30}
                    width={30}
                    alt=""
                    src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                "
                    className=""
                  />
                </div>
              </div>
              <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                <Image
                  height={40}
                  width={40}
                  alt=""
                  src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            "
                 
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Hero