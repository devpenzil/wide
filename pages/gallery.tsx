import type { NextPage } from "next";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const Gallery: NextPage = () => {
    const images =[
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
    ]
    return(
        <>
        <NavBar />
        <BreadCrumb path="Home / Gallery" img="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <section>
            <div className="flex flex-row py-20 flex-wrap container mx-auto">
                {images.map((obj, i)=>{
                    return(
                        <div key={i} className=" w-full md:w-1/3 p-4 flex justify-center">
                              <div className="w-full h-80 bg-green-300 bg-cover cursor-pointer hover:scale-110 transition duration-300" style={{backgroundImage:`url(${obj})`}}>

                              </div>
                        </div>
                    )
                })}
            </div>
        </section>
        <Footer />
        </>
    )
}
export default Gallery