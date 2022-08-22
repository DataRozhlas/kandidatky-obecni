import Link from "next/link";
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
  // generate data for each okres
  const okresData = okresy.find(okres => okres.key === params.okres);
  const zastupitelstva = await readCSVdata("2022/kvrzcoco")
    .filter(zastupitelstvo => zastupitelstvo.OKRES === okresData.NUMNUTS)
    .map(zastupitelstvo => {
      return {
        ...zastupitelstvo,
        key: zastupitelstvo.NAZEVZAST.normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .replaceAll(" ", "-")
          .toLowerCase(),
      };
    });
  return {
    props: { okresData, zastupitelstva },
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
            <Link href={`/${zastupitelstvo.key}`}>
              {zastupitelstvo.NAZEVZAST}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Okres;
