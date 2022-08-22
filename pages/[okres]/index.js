import Link from "next/link";
import okresy from "../../data/processed/okresy.json";
import styles from "../../styles/Okres.module.css";

export async function getStaticProps({ params }) {
  // generate data for each okres
  const okresData = okresy.find(okres => okres.key === params.okres);
  return {
    props: {
      okresData,
      zastupitelstva: require(`../../data/processed/${okresData.key}/zastupitelstva.json`),
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
      <h1>{okresData.NAZEVNUTS}</h1>
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
