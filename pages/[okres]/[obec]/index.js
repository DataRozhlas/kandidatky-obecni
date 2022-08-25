import { tsvParse } from "d3-dsv";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import okresy from "../../../public/okresy.json";

import styles from "../../../styles/Obec.module.css";

const queryClient = new QueryClient();

export async function getStaticProps({ params }) {
  //info o obci
  const okresZastupitelstva = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${params.okres}/zastupitelstva.tsv`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));
  const obecData = okresZastupitelstva.find(obec => obec.key === params.obec);
  //seznam kandidátů
  // const obecKandidati = await fetch(
  //   `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${params.okres}/${params.obec}/kandidati.tsv`
  // )
  //   .then(res => res.text())
  //   .then(res => tsvParse(res));
  const okresData = okresy.find(okres => okres.NUMNUTS === obecData.OKRES);

  return {
    props: {
      obecData,
      okresData,
      // obecKandidati,
    },
  };
}
export async function getStaticPaths() {
  const zastupitelstva = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/zastupitelstva.tsv`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));

  return {
    paths: zastupitelstva.map(obec => {
      const okres = okresy.find(okres => okres.NUMNUTS === obec.OKRES);
      return { params: { okres: okres.key, obec: obec.key } };
    }),
    fallback: false,
  };
}

const ObecPage = ({ obecData, okresData }) => {
  const { isLoading, error, data } = useQuery("candidatesData", () =>
    fetch(
      `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${okresData.key}/${obecData.key}/kandidati.tsv`
    )
      .then(res => res.text())
      .then(res => tsvParse(res))
  );

  if (isLoading) return "Stahuji data...";

  if (error) return "Stala se chyba: " + error.message;

  return (
    <>
      <h1>{obecData.NAZEVZAST}</h1>
      <h2>{data.length} kandidátů</h2>
    </>
  );
};

const Obec = ({ obecData, okresData }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ObecPage obecData={obecData} okresData={okresData} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Obec;
