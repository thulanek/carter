import type { NextPage } from "next";
import Head from "next/head";
import Cars from "../components/Cars";
import Hero from "../components/Hero";
import Header from "./../components/Header";
import Process from "./../components/Process";
import Testimonials from "./../components/Testimonials";
import CarsSkeletons from "./../components/CarsSkeletons";
import { useEffect, useState } from "react";
import Footer from "./../components/Footer";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [carsLoaded, setCarsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setCarsLoaded(true);
    }, 4000);
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? " dark" : ""}>
      <div className="px-3 max-w-[1200px] mx-auto mb-4 dark:bg-[#0f0f0f] dark:text-white">
        <div className="fixed dark:bg-[#0f0f0f] bg top-0 left-0 w-screen h-screen -z-10"></div>
        <Head>
          <title>Carter Showcase</title>
          <meta name="description" content="Mini showcase for Amit & Warrick" />
          <link rel="icon" href="/images/logo.ico" />
        </Head>

        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Process />
        {carsLoaded ? <Cars /> : <CarsSkeletons />}
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
