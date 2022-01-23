import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wide Interiors</title>
      </Head>

      {/* Head section  */}
      <header>
        <NavBar />
        <div className="flex flex-col-reverse md:flex-row container justify-between mx-auto py-20 ">
          <div>
            <div className="font-black text-sm mt-4">
              AWARD WINNING INTERIOR DESIGN FIRM IN THE CITY​
            </div>
            <div className="text-7xl mt-8 w-1/2 font-bold">
              Im Kyle Mills, Interior Designer.
            </div>
            <div className="w-1/2 mt-12 font-light">
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice that they’ve made. This
              paragraph is also for those who are looking out for a reliable
              interior designer.
            </div>
            <div className="mt-4 font-semibold text-lg hover:border-b-2 border-black cursor-pointer w-fit ">
              Read More
            </div>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              className="shadow-2xl"
              src="https://images.unsplash.com/photo-1616627988031-f912e383aebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </header>
      {/* Head section close  */}

      {/* Banner  */}
      <section>
        <div className="w-full h-96 bg-blue-200 banner-bg bg-no-repeat bg-cover bg-center cover">
          <div className="container mx-auto "></div>
        </div>
      </section>
      {/* Banner close  */}

      {/* Service  */}
      <section className="h-96 my-20">
        <div className="container p-2 mx-auto">
          <div>
            <div className="text-4xl font-bold my-7">Services</div>
            <div></div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 pr-8 py-4">
              <div className="text-sm font-bold">01.</div>
              <div className="text-3xl font-semibold mt-8">Interior Design</div>
              <p className="mt-4 text-base font-light">
                This is a short description elaborating the service you have
                mentioned above.​
              </p>
            </div>

            <div className="w-full md:w-1/3 pr-8 py-4">
              <div className="text-sm font-bold">02.</div>
              <div className="text-3xl font-semibold mt-8">Design & Build</div>
              <p className="mt-4 text-base font-light">
                This is a short description elaborating the service you have
                mentioned above.​
              </p>
            </div>

            <div className="w-full md:w-1/3 pr-8 py-4">
              <div className="text-sm font-bold">03.</div>
              <div className="text-3xl font-semibold mt-8">Procurement</div>
              <p className="mt-4 text-base font-light">
                This is a short description elaborating the service you have
                mentioned above.​
              </p>
            </div>
          </div>
          <div className="my-6 cursor-pointer">View all</div>
        </div>
      </section>
      {/* Services close  */}

      {/* Projects  */}
      <section>
        <div className="w-full bg-slate-100 py-12">
          <div className="container mx-auto flex flex-col md:flex-row mt-8 justify-between items-center " >
          <div className="w-full md:w-1/2 pr-8">
            <div className="text-4xl font-semibold mb-4">
              Projects
            </div>
          You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.
          <div>
          <button className="px-6 py-2 hover:scale-110 transition duration-300  border-2 border-black mt-6 rounded-full">
            View all projects
          </button> 
          </div>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              className="shadow-2xl"
              src="https://images.unsplash.com/photo-1616627988031-f912e383aebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          </div>
        </div>
      </section>
      {/* Projects close  */}
    </>
  );
};

export default Home;
