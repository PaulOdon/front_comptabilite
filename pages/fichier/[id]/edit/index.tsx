import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import IndexComptaFile from "../../../../components/fichier/edit/Index";
import useBasePath from "../../../../hooks/useBasePath";
import BackOfficeLayout from "../../../../layouts/backOffice";
const Edit = () => {
  const basePath = useBasePath();
  return (
    <BackOfficeLayout>
      <Head>
        <title>Fiche comptable - Modifier</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <Container maxWidth="xl">
        <IndexComptaFile></IndexComptaFile>
      </Container>
    </BackOfficeLayout>
  );
};

export default Edit;