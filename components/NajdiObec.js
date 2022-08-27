import { useRouter } from "next/router";
import { Container, TextField, Autocomplete } from "@mui/material";
import { useQuery } from "react-query";
import { tsvParse } from "d3-dsv";

const fetchAutocomplete = async () => {
  const data = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/zast-autocomplete.tsv`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));
  return data;
};

export default function NajdiObec() {
  const router = useRouter();
  const { isLoading, error, data } = useQuery(
    "autocomplete",
    fetchAutocomplete,
    { staleTime: Infinity }
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
          if (value) {
            router.push(`/${value.value}`);
          }
        }}
      />
    </Container>
  );
}
