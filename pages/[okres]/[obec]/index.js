import okresy from "../../../data/processed/okresy.json";
import styles from "../../../styles/Obec.module.css";

export async function getStaticProps({ params }) {
  //info o obci
  const okresData = okresy.find(okres => okres.key === params.okres);
  const okresZastupitelstva = require(`../../../data/processed/${okresData.key}/zastupitelstva.json`);
  const obecData = okresZastupitelstva.find(obec => obec.key === params.obec);
  //seznam kandidátů
  const okresKandidati = require(`../../../data/processed/${okresData.key}/kandidati.json`);
  const obecKandidati = okresKandidati.filter(
    kandidat => kandidat.KODZASTUP === obecData.KODZASTUP
  );

  return {
    props: {
      obecData,
      obecKandidati,
    },
  };
}
export async function getStaticPaths() {
  const zastupitelstva = require(`../../../data/processed/zastupitelstva.json`);

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
