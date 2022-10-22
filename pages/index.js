import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero.jsx";
import css from "../styles/Home.module.css";
import Services from "../components/Services.jsx";
import { client } from "../lip/client"
import Menu from "../components/Menu.jsx"



export default function Home({pizzas}) {
  return (
      <Layout>
      <div className={css.container}>
        <Head>
          <title>FUDO</title>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"/>
          <meta charset="UTF-8" />
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <Hero/>
          <Services/>
          <Menu pizzas={pizzas}/>
        </main>
      </div>
      </Layout>
  );
};


export const getServerSideProps = async()=> {
  const query = `*[_type == "pizza"]`;
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas
  }

}}
