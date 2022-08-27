import { useState, useContext } from "react";
import { tsvParse } from "d3-dsv";
import { useQuery } from "react-query";
import GlobalContext from "../../../utils/globalContext";

import okresy from "../../../public/okresy.json";

import styles from "../../../styles/Obec.module.css";

const Obec = ({ obecData, okresData }) => {
  const global = useContext(GlobalContext);
  return <ObecPage obecData={obecData} okresData={okresData} global={global} />;
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
      <h1>{obecData.NAZEVZAST}</h1>
      <h4>
        okres {okresData.NAZEVNUTS} , {obecData.MANDATY} mandátů
      </h4>
      <p>{data.length}</p>
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
