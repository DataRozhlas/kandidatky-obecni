import Link from "../../utils/Link";
import Head from "next/head";
import { tsvParse } from "d3-dsv";

import okresy from "../../public/okresy.json";

import styles from "../../styles/Okres.module.css";

export async function getStaticProps({ params }) {
  // generate data for each okres
  const okresData = okresy.find(okres => okres.key === params.okres);
  const zastupitelstva = await fetch(
    `https://data.irozhlas.cz/kandidatky-obecni-data/2022/${okresData.key}/zastupitelstva.tsv`
  ).then(res => res.text());
  return {
    props: {
      okresData,
      zastupitelstva: tsvParse(zastupitelstva),
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: okresy.map(okres => {
      return { params: { okres: okres.key } };
    }),
    fallback: false,
  };
}

const Okres = ({ okresData, zastupitelstva }) => {
  return (
    <>
      <Head>
        <title>
          {`Okres ${okresData.NAZEVNUTS} – interaktivní kandidátky pro komunální volby`}
        </title>
      </Head>

      <h1>Okres {okresData.NAZEVNUTS}</h1>
      <ul>
        {zastupitelstva.map(zastupitelstvo => (
          <li key={zastupitelstvo.KODZASTUP}>
            <Link href={`/${okresData.key}/${zastupitelstvo.key}`}>
              {zastupitelstvo.NAZEVZAST}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Okres;
