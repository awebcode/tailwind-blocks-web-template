import Image from 'next/image';
import React from 'react'
import { IoLogoFacebook, IoLogoFoursquare, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="m-2 max-w-5xl">
          <div className="flex flex-col justify-around md:flex-row items-center">
            <div className="text-gray-500 font-semibold m-1">Join Our Newsletter</div>
            <div>
              {" "}
              <input
                type="text"
                name="Email Address"
                placeholder="Email Address"
                className="m-1 bg-gray-300 text-gray-600 h-8"
              />{" "}
              <button className="bg-blue-600 p-1 rounded-xl text-white hover:bg-white hover:text-blue-600 ease-in duration-300">
                Subscribe{" "}
              </button>{" "}
            </div>
            <div>
              {" "}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
              >
                <IoLogoTwitter className="fa fa-twitter ml-2 p-1" />
              </a>{" "}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
              >
                <IoLogoInstagram className="fa fa-twitter ml-2 p-1" />
              </a>{" "}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
              >
                <IoLogoFacebook className="fa fa-facebook ml-2 p-1"></IoLogoFacebook>
              </a>{" "}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
              >
                <IoLogoLinkedin className="fa fa-linkedin ml-2 p-1"></IoLogoLinkedin>
              </a>{" "}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-300 hover:bg-blue-600 hover:text-white mx-1 pt-1 inline-block"
              >
                <IoLogoFoursquare className="fa fa-quora ml-2 p-1"></IoLogoFoursquare>
              </a>{" "}
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex flex-col items-center justify-around md:flex-row">
            <div className="items-center m-1 justify-items-start w-60">
              <h1 className="flex flex-col text-xl text-blue-600 font-medium">
                {" "}
                Product{" "}
              </h1>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Features
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Integrations
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Shopify Integrations
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Pricing
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Chrome Extensions
              </a>
            </div>
            <div className="items-center m-1 justify-start w-60">
              <h1 className="flex flex-col text-xl text-blue-600 font-medium">
                {" "}
                Company{" "}
              </h1>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Terms
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Customers
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Blog
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Terms of Services
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Privacy Policy
              </a>
            </div>
            <div className="items-center m-1 w-60">
              <h1 className="flex flex-col text-xl text-blue-600 font-medium">
                {" "}
                Support{" "}
              </h1>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Community
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Support Customers
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Documentations
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Service Providers
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                Email Contact
              </a>
            </div>
            <div className="items-center m-1 w-60 md:-mt-16">
              <h1 className="flex flex-col text-xl text-blue-600 font-medium">
                {" "}
                Contact Us{" "}
              </h1>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                suppport@admin.com
              </a>{" "}
              <a href="#" className="flex hover:text-blue-600 text-gray-500">
                (+251)987-6543-210
              </a>
            </div>
          </div>
          <div className="m-2 ml-16 mr-28 flex flex-col justify-between p-2 md:flex-row">
            {" "}
            <Image
              height={80}
              width={90}
              alt="abc"
              className="flex m-1"
              src="https://dummyimage.com/150x50"
            />
            <div className="flex">
              {" "}
              <a href="#" className="m-1 hover:text-blue-600 text-gray-500">
                DMCA
              </a>
              <div className="m-1 text-gray-500">|</div>{" "}
              <a href="#" className="m-1 hover:text-blue-600 text-gray-500">
                Security Statement{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer