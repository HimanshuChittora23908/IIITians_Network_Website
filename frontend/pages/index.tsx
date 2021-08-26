import type { NextPage } from "next";
import { Performance, WorkingFields, Thinking, Community, StartPage, Statistics, Work, Navbar } from "../components/Home";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <StartPage />
      <Performance />
      <WorkingFields />
      <Thinking />
      <Community />
      <Statistics />
      <Work />
    </>
  );
};

export default Home;
