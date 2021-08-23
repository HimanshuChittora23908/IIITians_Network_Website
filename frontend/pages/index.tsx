import type { NextPage } from "next";
import {
  Performance,
  WorkingFields,
  Thinking,
  StartPage,
  Statistics,
} from "../components/Home";

const Home: NextPage = () => {
  return (
    <>
      <StartPage />
      <Performance />
      <WorkingFields />
      <Thinking />
      <Statistics />
    </>
  );
};

export default Home;
