import { useRef, useEffect } from "react";
import { selectAll } from "d3-selection";
import barvickyZdroj from "../public/barvicky.json";

import GrafGenerator from "./../utils/GrafGenerator.js";

const Graf = ({
  kandidati,
  vybarveniKandidati,
  isMobile,
  vybraneStrany,
  setVybraneStrany,
  view,
}) => {
  const containerRef = useRef(null);
  const meritko = 1; //kandidati.length > 1849 ? 10 : 1;

  useEffect(() => {
    // kolik stran, jež mají definovanou barvičku, je mezi vybranými kandidáty a které to jsou?
    const zjistiVybraneStrany = (kandidati, barvickyZdroj) => {
      const barvicky = barvickyZdroj.map(d => Object.assign({}, d)); //zkopíruj objekt s barvičkami
      const strany = kandidati
        .reduce((acc, curr) => {
          const barvicka = acc.filter(b => b.vstrana === curr[view])[0];
          const index = acc.indexOf(barvicka);
          if (index !== -1) {
            const novaBarvicka = { ...barvicka, pocet: barvicka.pocet + 1 };
            acc.splice(index, 1, novaBarvicka);
          }
          return acc;
        }, barvicky)
        .filter(s => {
          // jen strany, které se mezi kandidáty vyskytují
          return s.pocet > 0;
        })
        .map(s => {
          const pocetKulicek = Math.floor(s.pocet / meritko);
          return { ...s, pocet: pocetKulicek };
        });
      const pocetVybarvenych = barvicky.reduce((acc, curr) => {
        return acc + curr.pocet;
      }, 0);
      const result =
        kandidati.length > pocetVybarvenych // kandidáty, pro které se nenašla starna, dej jako Ostatní
          ? [
              ...strany,
              {
                nazev: "Ostatní",
                barva: "#349DB2",
                vstrana: 0,
                pocet: Math.floor(
                  (kandidati.length - pocetVybarvenych) / meritko
                ),
              },
            ]
          : strany;
      return result;
    };

    const kulicky = zjistiVybraneStrany(kandidati, barvickyZdroj);
    setVybraneStrany(kulicky);
  }, [kandidati, setVybraneStrany, meritko, view]);

  useEffect(() => {
    selectAll(".singleChart").remove();
    selectAll(".doubleChart").remove();

    let destroyFn;
    let nodesFn;
    if (containerRef.current) {
      //console.log(vybraneStrany);
      const { destroy, nodes } = GrafGenerator(
        containerRef.current,
        vybraneStrany,
        isMobile
      );
      destroyFn = destroy;
      nodesFn = nodes;
    }
    //console.log(nodesFn());
    //  return [destroyFn, nodesFn];
  }, [vybraneStrany, isMobile]);

  useEffect(() => {
    //const zobrazeniKandidati = d3.selectAll(".kand")._groups;
    // pro každou stranu zjisti, kolik z vybraných nemá být vybarveno
    // console.log(vybraneStrany);
    const vybarvenych = vybraneStrany.map(s => {
      if (s.vstrana !== 0) {
        return vybarveniKandidati.filter(k => k[view] === s.vstrana).length;
      } else return 0;
    });
    // console.log(vybarvenych);
    //ostatni
    if (
      (vybarvenych.length > 1 && vybarvenych[vybarvenych.length - 1] === 0) ||
      vybarvenych[0] === 0
    ) {
      vybarvenych[vybarvenych.length - 1] =
        vybarveniKandidati.length -
        vybarvenych.reduce((acc, curr) => acc + curr, 0);
    }
    //console.log(vybarvenych);
    //odbarvuj
    vybraneStrany.forEach((s, i) => {
      const odbarvit = s.pocet - Math.floor(vybarvenych[i] / meritko);
      const kandidatikOdbarveni = document.getElementsByClassName(
        `kand ${s.vstrana}`
      );
      const kandidatikOdbarveniArray = Array.from(kandidatikOdbarveni);
      kandidatikOdbarveniArray.sort((a, b) => a.__data__.y - b.__data__.y);
      kandidatikOdbarveniArray.forEach(k => {
        k.style.fill = s.barva;
      });

      for (i = 0; i < odbarvit; i++) {
        kandidatikOdbarveniArray[i].style.fill = "#C8C8C8";
        // console.log(i);
      }
      //  console.log(odbarvit, s);
    });

    //  console.log(vybarvenych);
  }, [vybraneStrany, vybarveniKandidati, meritko, view]);

  // const kulicky = vyrobKulicky(kandidati, vybraneStrany);}, [vybraneStrany])

  return <div ref={containerRef} className="chartWrapper"></div>;
};

export default Graf;
