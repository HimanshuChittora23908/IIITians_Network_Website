import type { NextPage } from "next";
import { WorkingTeam } from "../components/CoreMembers";
import { Navbar } from "../components/Home";

const CoreMembers: NextPage = () => {
  return (
    <>
      <Navbar />
      <WorkingTeam />
    </>
  );
};

export default CoreMembers;
