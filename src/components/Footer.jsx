import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-div animate-animateOpacity pt-12 text-[#fff] mt-24">
      <div className="flex justify-center">
        <div className="flex justify-evenly gap-12 w-full uppercase">
          <div>
            <h2 className="font-bold cursor-pointer">Support</h2>
            <ul>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Help Center
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Contact Us
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Services
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Documentation
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold cursor-pointer">Info</h2>
            <ul>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                About Us
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Forecasters
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                Members
              </li>
              <li className="text-sm py-2 hover:opacity-50 cursor-pointer">
                More
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex py-4 justify-center items-center gap-4 mt-4">
        <a href="https://github.com/JustAlex-WebDev" target="_blank">
          <FaGithub className="hover:opacity-50 cursor-pointer" />
        </a>
        <FaInstagram className="hover:opacity-50 cursor-pointer" />
        <FaFacebook className="hover:opacity-50 cursor-pointer" />
      </div>
      <p className="text-center py-4">
        © 2022 Outsider, Inc. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
