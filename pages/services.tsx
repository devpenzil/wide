import type { NextPage } from "next";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import HeadSection from "../components/HeadSection";
import NavBar from "../components/NavBar";
const Service:NextPage = () => {
    return(
        <>
        <HeadSection page="Services" />
        <NavBar />
        <BreadCrumb path="Home / Service" img="https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Footer />
        </>
    )
}
export default Service