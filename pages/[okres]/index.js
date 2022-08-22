import { useRouter } from "next/router";
import readCSVdata from "../../utils/dataProvider";
import styles from "../../styles/Okres.module.css";

const okresy = readCSVdata("2022/cnumnuts")
  .filter(nuts => nuts.NUTS.length === 6)
  .map(okres => {
    return {
      ...okres,
      key: okres.NAZEVNUTS.normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replaceAll(" ", "-")
        .toLowerCase(),
    };
  });

export async function getStaticProps({ params }) {
  // generate aggregated data for each okres
  return {
    props: { okresData: okresy.find(okres => okres.key === params.okres) },
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

const Okres = ({ okresData }) => {
  const router = useRouter();
  const { okres } = router.query;

  return <h1>{okresData.NAZEVNUTS}</h1>;
};

export default Okres;
