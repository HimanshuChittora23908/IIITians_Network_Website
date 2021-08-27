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

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <StartPage />
      <Performance />
      {/* <WorkingFields /> */}
      {/* <Thinking /> */}
      <Community />
      {/* <Statistics />  */}
      {/* <Work />  */}
      <ProjectsEvents /> 
      <Overpass />  
    </>
  );
};

export default Home;
