import type { NextPage } from "next";
import Head from "next/head";
import BackOfficeLayout from "../layouts/backOffice";
import useBasePath from "../hooks/useBasePath";
import FichierComptable from "../components/fichier/FichierComptable";

const Home: NextPage = () => {
  const basePath = useBasePath();
  return (
    <BackOfficeLayout>
      <Head>
        <title>MV - Comptabilité - Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <FichierComptable />
    </BackOfficeLayout>
  );
};

export default Home;
