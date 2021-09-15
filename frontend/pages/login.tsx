import type { NextPage } from "next";
import { LoginPage } from "../components/Login";
import { Navbar } from "../components/Home";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <LoginPage />
    </>
  );
};

export default About;