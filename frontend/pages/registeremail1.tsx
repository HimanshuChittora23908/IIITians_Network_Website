import type { NextPage } from "next";
import { RegisterEmail1 } from "../components/Login";
import { Navbar } from "../components/Home";
import { Footer_Main } from "../components/Footer";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <RegisterEmail1 />
      <Footer_Main />
    </>
  );
};

export default About;