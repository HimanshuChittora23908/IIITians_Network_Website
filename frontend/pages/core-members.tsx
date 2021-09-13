import type { NextPage } from "next";
import { WorkingTeam, WhatWeDo, OurApproach, OurRoles, Leadership } from "../components/CoreMembers";
import { Navbar } from "../components/Home";
import { Footer_Main } from "../components/Footer";

const CoreMembers: NextPage = () => {
  return (
    <>
      <Navbar />
      <WorkingTeam />
      <WhatWeDo />
      <OurApproach />
      <OurRoles />
      <Leadership />
      <Footer_Main />
    </>
  );
};

export default CoreMembers;
