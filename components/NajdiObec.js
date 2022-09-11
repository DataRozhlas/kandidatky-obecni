import { useRouter } from "next/router";
import {
  Container,
  TextField,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
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

export default function NajdiObec({ embed }) {
  const router = useRouter();
  const { isLoading, error, data } = useQuery(
    "autocomplete",
    fetchAutocomplete,
    { staleTime: Infinity }
  );

  if (isLoading)
    return (
      <Container maxWidth="xs">
        <CircularProgress />
      </Container>
    );

  if (error) return "Stala se chyba: " + error.message;

  return (
    <Container maxWidth="xs" sx={{ ml: 0 }}>
      <Autocomplete
        disablePortal
        autoHighlight
        options={data}
        getOptionLabel={option => `${option.label}, okr. ${option.okres}`}
        renderInput={params => <TextField {...params} label="Najdi obec" />}
        noOptionsText="Obec nenalezena"
        onChange={(e, value) => {
          if (value) {
            embed
              ? router.push(`/${value.value}/embed`)
              : router.push(`/${value.value}`);
          }
        }}
      />
    </Container>
  );
}
