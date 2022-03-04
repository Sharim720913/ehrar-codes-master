import React from "react";

const Footer = () => {
  return (
    <footer
      className=" text-center lg:text-left"
      style={{
        position: "sticky",
        width: "100%",
        bottom: 0,
        zIndex: -1,
        marginTop: "400px",
      }}
    >
      <div className="container m-auto">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 mb-20">
          <div
            className="mb-6"
            style={{ display: "flex", margin: "auto", flexDirection: "column" }}
          >
            <h5 class="uppercase font-medium font-sans	 mb-2.5 text-gray-800">
              GENERAL
            </h5>
            <ul class="list-none mb-0">
              <li>
                <a href="#!" class="text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" class="text-gray-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" class="text-gray-800">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div
            className="mb-6"
            style={{ display: "flex", margin: "auto", flexDirection: "column" }}
          >
            <h5 class="uppercase font-medium font-sans mb-2.5 text-gray-800">
              GENERAL
            </h5>
            <ul class="list-none mb-0">
              <li>
                <a href="#!" class="text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" class="text-gray-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" class="text-gray-800">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div
            className="mb-6"
            style={{ display: "flex", margin: "auto", flexDirection: "column" }}
          >
            <h5 class="uppercase font-medium font-sans mb-2.5 text-gray-800">
              GENERAL
            </h5>
            <ul class="list-none mb-0">
              <li>
                <a href="#!" class="text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#!" class="text-gray-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" class="text-gray-800">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div
            className="mb-6"
            style={{ display: "flex", margin: "auto", flexDirection: "column" }}
          >
            <h5 class="uppercase font-medium font-sans mb-2.5 text-gray-800">
              COMPANY
            </h5>
            <ul class="list-none mb-0">
              <li>
                <a href="#!" class="text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a href="#!" class="text-gray-800">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" class="text-gray-800">
                  FAQs
                </a>
              </li>
            </ul>
          </div>{" "}
          <div
            className="mb-6"
            style={{ display: "flex", margin: "auto", flexDirection: "column" }}
          >
            <h5 class="uppercase font-medium font-sans mb-2.5 text-gray-800">
              LEGAL
            </h5>
            <ul class="list-none mb-0">
              <li>
                <a href="#!" class="text-gray-800">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#!" class="text-gray-800">
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-gray-700 text-center p-4"
        style={{ backgroundColor: "#fff" }}
      >
        © 2021 Copyright:
        <a className="text-gray-800">
          © Copyright 2021 Redball. All Rights Reserved
        </a>
      </div>
    </footer>
  );
};

export default Footer;
