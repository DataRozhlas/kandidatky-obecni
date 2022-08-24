import { tsvParse } from "d3-dsv";

import okresy from "../../../public/okresy.json";

import styles from "../../../styles/Obec.module.css";

export async function getStaticProps({ params }) {
  //info o obci
  const okresZastupitelstva = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${params.okres}/zastupitelstva.tsv`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));
  const obecData = okresZastupitelstva.find(obec => obec.key === params.obec);
  //seznam kandidátů
  const obecKandidati = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${params.okres}/${params.obec}/kandidati.tsv`
  )
    .then(res => res.text())
    .then(res => tsvParse(res));

  return {
    props: {
      obecData,
      obecKandidati,
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

const Obec = ({ obecData, obecKandidati }) => {
  return (
    <>
      <h1>{obecData.NAZEVZAST}</h1>
    </>
  );
};

export default Obec;
