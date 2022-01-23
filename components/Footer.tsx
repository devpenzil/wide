import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full py-12">
        <div className="container mx-auto p-2 flex flex-col md:flex-row justify-start">
          <div className="w-full md:w-1/3 ">
            <div className="text-4xl font-semibold">Get in touch</div>
            <div className=" font-light text-sm mt-8 w-80 mb-8">
              You can use a few enticing words and flaunt your capabilities that
              will attract future clients and encourage them to hire you right
              away.
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-8 ">
            <div className="text-3xl font-semibold">Contact Details</div>
            <div className="my-6">Kyle Mills</div>
            <div>Phone:</div>
            <div>+1 910-626-85255</div>
            <div className="mt-6">Email:</div>
            <div>contact@hello.com</div>
          </div>
          <div className="w-full md:w-1/3 ">
            <div className="text-3xl font-semibold">Location</div>
            <div>Somewhere.</div>
          </div>
        </div>
      </div>
      <div className="text-sm font-light px-2">
          copywrite @ wide interiors
      </div>
    </>
  );
}

export default Footer;
