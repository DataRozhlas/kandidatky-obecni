import { useMemo, useEffect } from "react";
import { DataGrid, csCZ } from "@mui/x-data-grid";
import { Tooltip, Typography } from "@mui/material";

const Tablica = ({ vybarveniKandidati, strany, isMobile, cvs }) => {
  //console.log(strany, vybarveniKandidati);
  const getFullName = params => {
    const prvniTitul = params.row.TITULPRED;
    return (
      <Tooltip
        arrow
        enterTouchDelay={0}
        title={`${params.row.TITULPRED || ""} ${params.row.JMENO || ""} ${
          params.row.PRIJMENI || ""
        } ${params.row.TITULZA || ""}`}
      >
        <Typography
          style={{
            cursor: "help",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <span style={{ fontSize: "70%" }}>
            {typeof prvniTitul === "undefined" ? "" : prvniTitul + "\xa0"}
          </span>
          {params.row.JMENO || ""}&nbsp;
          <strong>{params.row.PRIJMENI || ""}</strong>&nbsp;
          <span style={{ fontSize: "70%" }}>{params.row.TITULZA || ""}</span>
        </Typography>
      </Tooltip>
    );
  };

  const getOStrana = params => {
    const strana = strany.find(s => s.OSTRANA === params.row.OSTRANA);
    return (
      <Tooltip arrow enterTouchDelay={0} title={strana.NAZEVCELK}>
        <Typography
          style={{
            cursor: "help",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {strana.NAZEVCELK}
        </Typography>
      </Tooltip>
    );
  };

  const getNStrana = params => {
    const strana = cvs.find(s => s.VSTRANA === params.row.NSTRANA);
    return (
      <Tooltip arrow enterTouchDelay={0} title={strana.NAZEVCELK}>
        <Typography
          style={{
            cursor: "help",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {strana.ZKRATKAV8}
        </Typography>
      </Tooltip>
    );
  };

  const ukazPovolani = params => {
    return (
      <Tooltip arrow enterTouchDelay={0} title={params.row.POVOLANI}>
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            cursor: "help",
          }}
        >
          {params.row.POVOLANI}
        </span>
      </Tooltip>
    );
  };

  const columns = useMemo(() => {
    return [
      {
        field: "PORCISLO",
        headerName: "#",
        description: "po??ad?? na kandid??tce",
        flex: 1,
        minWidth: 40,
        disableColumnMenu: true,
        type: "number",
      },
      {
        field: "fullName",
        headerName: "Cel?? jm??no",
        // valueGetter: getFullName,
        // valueFormatter: getFullName,
        renderCell: getFullName,
        valueGetter: params => {
          return params.row.JMENO + " " + params.row.PRIJMENI;
        },
        sortComparator: (v1, v2, cellParams1, cellParams2) =>
          cellParams1.api
            .getCellValue(cellParams1.id, "PRIJMENI")
            .localeCompare(
              cellParams1.api.getCellValue(cellParams2.id, "PRIJMENI"),
              "cs-CZ"
            ),
        flex: 3,
        minWidth: 140,
      },
      {
        field: "OSTRANA",
        headerName: "Volebn?? strana",
        description: "volebn?? strana",
        renderCell: getOStrana,
        valueGetter: params => {
          const strana = strany.find(s => s.OSTRANA === params.row.OSTRANA);
          return strana.NAZEVCELK + " " + strana.ZKRATKAO8;
        },
        minWidth: 100,
        flex: 3,
      },
      {
        field: "NSTRANA",
        headerName: "Navrhuj??c?? strana",
        description: "navrhuj??c?? strana",
        renderCell: getNStrana,
        valueGetter: params => {
          const strana = cvs.find(s => s.VSTRANA === params.row.NSTRANA);
          return strana.NAZEVCELK + " " + strana.ZKRATKAV8;
        },
        minWidth: 100,
        flex: 3,
      },
      {
        field: "VEK",
        headerName: "V??k",
        flex: 1,
        disableColumnMenu: true,
        minWidth: 50,
        type: "number",
      },
      {
        field: "POVOLANI",
        headerName: "Povol??n??",
        flex: 6,
        renderCell: ukazPovolani,
        minWidth: 120,
      },
    ];
  }, [vybarveniKandidati]);

  return (
    <DataGrid
      autoHeight
      localeText={csCZ.components.MuiDataGrid.defaultProps.localeText}
      density={"compact"}
      rows={vybarveniKandidati.map(kandidat => {
        return {
          ...kandidat,
          id: `${kandidat.KODZASTUP}-${kandidat.COBVODU}-${kandidat.POR_STR_HL}-${kandidat.PORCISLO}`,
        };
      })}
      columns={columns}
      rowsPerPageOptions={isMobile ? [10] : [20]}
      pageSize={isMobile ? 10 : 20}
      disableSelectionOnClick
    />
  );
};

export default Tablica;
