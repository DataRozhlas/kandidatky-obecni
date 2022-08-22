import okresy from "../../../data/processed/okresy.json";
import styles from "../../../styles/Obec.module.css";

export async function getStaticProps({ params }) {
  // generate data for each okres
  const okresData = okresy.find(okres => okres.key === params.okres);
  const zastupitelstva = require(`../../../data/processed/${okresData.key}/zastupitelstva.json`);
  const obecData = zastupitelstva.find(obec => obec.key === params.obec);
  return {
    props: {
      obecData,
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

const Obec = ({ obecData }) => {
  return (
    <>
      <h1>{obecData.NAZEVZAST}</h1>
    </>
  );
};

export default Obec;
