import type { NextPage } from "next";
import { Culture, Discord, FounderStory, LandingPage } from "../components/About_Us";
import { Navbar } from "../components/Home";
import { Footer_Main } from "../components/Footer";

const About: NextPage = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Discord />
      <FounderStory />
      <Culture />
      <Footer_Main />
    </>
  );
};

export default About;