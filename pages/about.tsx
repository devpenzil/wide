import type { NextPage } from "next";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import HeadSection from "../components/HeadSection";
import NavBar from "../components/NavBar";
const About:NextPage = () => {
    return(
        <>
        <HeadSection page="About" />
        <NavBar />
        <BreadCrumb path="Home / About" img="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Footer />
        </>
    )
}
export default About