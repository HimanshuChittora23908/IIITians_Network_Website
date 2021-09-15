import type { NextPage } from "next";
import { LoginPage } from "../components/Login";
import { Navbar } from "../components/Home";
import { Footer_Main } from "../components/Footer";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <LoginPage />
      <Footer_Main />
    </>
  );
};

export default About;