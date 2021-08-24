import type { NextPage } from "next";
import { Performance, WorkingFields, Thinking, Community, StartPage, Statistics, Work } from "../components/Home";

const Home: NextPage = () => {
  return (
    <>
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
