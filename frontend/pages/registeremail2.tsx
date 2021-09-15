import type { NextPage } from "next";
import { RegisterEmail2 } from "../components/Login";
import { Navbar } from "../components/Home";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <RegisterEmail2 />
    </>
  );
};

export default About;