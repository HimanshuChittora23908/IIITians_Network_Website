import type { NextPage } from "next";
import {
  Performance,
  WorkingFields,
  Thinking,
  Community,
  StartPage,
  Statistics,
  Work,
  Navbar,
  ProjectsEvents,
  Overpass,
} from "../components/Home";
import { Footer_Main } from "../components/Footer";

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
      {/* <ProjectsEvents /> 
      <Overpass /> */}
      <Footer_Main />
    </>
  );
};

export default Home;
