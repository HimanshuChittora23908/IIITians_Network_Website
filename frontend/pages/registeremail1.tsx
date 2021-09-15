import type { NextPage } from "next";
import { RegisterEmail1 } from "../components/Login";
import { Navbar } from "../components/Home";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <RegisterEmail1 />
    </>
  );
};

export default About;