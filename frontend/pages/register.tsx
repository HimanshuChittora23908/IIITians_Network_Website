import type { NextPage } from "next";
import { RegisterPage } from "../components/Login";
import { Navbar } from "../components/Home";
import { Footer_Main } from "../components/Footer";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <RegisterPage />
      <Footer_Main />
    </>
  );
};

export default About;