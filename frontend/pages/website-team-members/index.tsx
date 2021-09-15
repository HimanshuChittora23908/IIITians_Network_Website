import type { NextPage } from "next";
import { BrandIdentity, WeAre, WhoWeAre } from "../../components/WebsiteTeamMembers";
import { Navbar } from "../../components/Home";
import { Footer_Main } from "../../components/Footer";

// export const getStaticProps: GetStaticProps = async() => {
//     const res = await fetch(''); // link for data (for links in the "whoweare" section)
//     const data = await res.json();

//     return {
//         props: { ninjas: data }
//     }
// }

const WebsiteTeamMembers: NextPage = () => { // have to import the data here as { ninjas }
  return (
    <>
      <Navbar />
      <BrandIdentity />
      <WeAre />
      <WhoWeAre />
      {/* The data will come here. */}
      <Footer_Main />
    </>
  );
};

export default WebsiteTeamMembers;
