import React from "react";
import Container from "@mui/material/Container";
import BackOfficeLayout from "../../../../layouts/backOffice";
import FormFichierComptable from "../../../../components/configurations/fichier-comptable/add/FormFichierComptable";

const index = () => {
	return (
		<BackOfficeLayout>
			<FormFichierComptable />
		</BackOfficeLayout>
	);
};

export default index;
