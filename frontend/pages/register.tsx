import type { NextPage } from "next";
import { RegisterPage } from "../components/Login";
import { Navbar } from "../components/Home";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <RegisterPage />
    </>
  );
};

export default About;