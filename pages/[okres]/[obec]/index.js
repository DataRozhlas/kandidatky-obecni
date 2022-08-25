import { useState, useContext } from "react";
import { tsvParse } from "d3-dsv";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalContext from "../../../utils/global-context";

import okresy from "../../../public/okresy.json";

import { Text, Link } from "@nextui-org/react";
import styles from "../../../styles/Obec.module.css";

const queryClient = new QueryClient();

const Obec = ({ obecData, okresData }) => {
  const global = useContext(GlobalContext);
  return (
    <QueryClientProvider client={queryClient}>
      <ObecPage obecData={obecData} okresData={okresData} global={global} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

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
      <Text h1>{obecData.NAZEVZAST}</Text>
      <Text h4>
        <Link
          href={`https://data.irozhlas.cz/kandidatky-obecni/${okresData.key}/${obecData.key}`}
        >
          okres {okresData.NAZEVNUTS}{" "}
        </Link>
        , {obecData.MANDATY} mandátů
      </Text>
    </>
  );
};

export default Obec;

export async function getStaticProps({ params }) {
  //info o obci
  const okresZastupitelstva = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${params.okres}/zastupitelstva.tsv`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));
  const obecData = okresZastupitelstva.find(obec => obec.key === params.obec);
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
