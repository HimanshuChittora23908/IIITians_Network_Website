import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from 'next/link'
import type { NextPage } from "next";
import { Navbar } from "../../components/Home";
import { Footer_Main } from "../../components/Footer";

// export const getStaticPaths = async () => {
//     const res = await fetch('') // link
//     const data = await res.json();

//     const paths = data.map(ninja => {
//         return {
//             params: { id: ninja.id.toString() } // and anything else, such as name and position.
//         }
//     })

//     return {
//         paths: paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch('' + id) // link
//     const data = await res.json();

//     return {
//         props: { ninja: data }
//     }
// }

const Dashboard: NextPage = () => { // destructure the individual object here.
  return (
    <>
        <Navbar />
        <Footer_Main />
    </>
  );
};

export default Dashboard;
