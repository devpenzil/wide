import type { NextPage } from "next";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const Contact: NextPage = () => {
  return (
    <>
      <NavBar />
      <BreadCrumb path="Home / Contact" img="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <div className="py-12">
        <div className="w-full md:w-1/3 border mx-auto p-4">
            <input type="text" name="name" id="name" className="p-2 w-full outline-none border-b-2 my-4" placeholder="Enter your name" />
            <input type="text" name="email" id="email" className="p-2 w-full outline-none border-b-2 my-4" placeholder="Enter your email" />
            <input type="number" name="phone" id="phoen" className="p-2 w-full outline-none border-b-2 my-4" placeholder="Enter your phone" />
            <textarea name="message" id="message" className="p-2 w-full outline-none border-b-2 my-4 h-80" placeholder="add your message"></textarea>
            <button className="w-full p-2 bg-black text-white text-lg font-bold">Sent</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
