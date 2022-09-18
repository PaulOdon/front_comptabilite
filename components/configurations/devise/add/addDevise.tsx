import {
  Button,
  Container,
  styled,
  Typography,
  TextField,
  Stack,
  Divider,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Check, Close } from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material/Select";



const AddDevise = () => {
  const [article, setArticle] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setArticle(event.target.value as string);
  };
  const [demandeur, setDemandeur] = React.useState("");

  const handleChange_1 = (event: SelectChangeEvent) => {
    setDemandeur(event.target.value as string);
  };
  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <NavigationContainer>
        <SectionNavigation>
          <Stack flexDirection={"row"}>
            <Link href="/configurations/devise">
              <Button
                color="info"
                variant="text"
                startIcon={<ArrowBack />}
              >
                Retour
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<Check />}
              sx={{ marginInline: 3 }}
            >
              Enregistrer
            </Button>
            <Button
              variant="text"
              color="warning"
              size="small"
              startIcon={<Close />}
              sx={{ marginInline: 3 }}
            >
              Annuler
            </Button>
          </Stack>
          <Typography variant="h5">
            Formulaires
          </Typography>
        </SectionNavigation>
        <Divider />
      </NavigationContainer>

      <FormContainer spacing={2}>
      <TextField
          fullWidth
          id="outlined-basic"
          label="ISO"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Nom"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Séparateur de milliers"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Sigle"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Nombre de chiffre aprés la virgule"
          variant="outlined"
        />
      </FormContainer>
    </Container>
  );
};

export default AddDevise;

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  background: "#fff",
}));
const NavigationContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  flex: 1,
  width: "100%",
}));

const SectionNavigation = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: "5px",
}));
