import type { NextPage } from "next";
import {
  Performance,
  WorkingFields,
  Thinking,
  StartPage,
} from "../components/Home";

const Home: NextPage = () => {
  return (
    <>
      <StartPage />
      <Performance />
      <WorkingFields />
      <Thinking />
    </>
  );
};

export default Home;
