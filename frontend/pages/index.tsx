import type { NextPage } from "next";
import Image from "next/image";
import isometric_image from "../images/isometric_Image.png";
import info from "../images/info.png";
import { Performance, WorkingFields, Thinking, Community, StartPage, Statistics } from "../components/Home";
import triangle_right from "../images/triangle_right.png";

const Home: NextPage = () => {
  return (
    <>
      <StartPage />
      <Performance />
      <WorkingFields />
      <Thinking />
      <Community />
      <Statistics />
    </>
  );
};

export default Home;
