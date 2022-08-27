import { useRouter } from "next/router";
import { Container, TextField, Autocomplete } from "@mui/material";
import { useQuery } from "react-query";
import { tsvParse } from "d3-dsv";

export default function NajdiObec() {
  const router = useRouter();
  const { isLoading, error, data } = useQuery("zastAutocomplete", () =>
    fetch(
      `https://data.irozhlas.cz/kandidatky-obecni-data/2022/zast-autocomplete.tsv`
    )
      .then(res => res.text())
      .then(res => tsvParse(res))
  );

  if (isLoading) return "Stahuji data...";

  if (error) return "Stala se chyba: " + error.message;

  return (
    <Container maxWidth="xs">
      {" "}
      <Autocomplete
        disablePortal
        autoHighlight
        options={data}
        getOptionLabel={option => `${option.label}, okr. ${option.okres}`}
        renderInput={params => <TextField {...params} label="Najdi obec" />}
        noOptionsText="Obec nenalezena"
        onChange={(e, value) => {
          router.push(`/${value.value}`);
        }}
      />
    </Container>
  );
}
