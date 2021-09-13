import type { NextPage } from "next";
import { BrandIdentity, WeAre, WhoWeAre } from "../components/WebsiteTeamMembers";
import { Navbar } from "../components/Home";
import { Footer_Main } from "../components/Footer";

const WebsiteTeamMembers: NextPage = () => {
  return (
    <>
      <Navbar />
      <BrandIdentity />
      <WeAre />
      <WhoWeAre />
      <Footer_Main />
    </>
  );
};

export default WebsiteTeamMembers;
