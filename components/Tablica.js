import { DataGrid, csCZ } from "@mui/x-data-grid";
import { Tooltip, Typography } from "@mui/material";

const Tablica = ({ vybarveniKandidati, isMobile, strany }) => {
  const getFullName = params => {
    const prvniTitul = params.getValue(params.id, "TITULPRED");
    return (
      <Tooltip
        arrow
        enterTouchDelay={0}
        title={`${params.getValue(params.id, "TITULPRED") || ""} ${
          params.getValue(params.id, "JMENO") || ""
        } ${params.getValue(params.id, "PRIJMENI") || ""} ${
          params.getValue(params.id, "TITULZA") || ""
        }`}
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
          {params.getValue(params.id, "JMENO") || ""}&nbsp;
          <strong>{params.getValue(params.id, "PRIJMENI") || ""}</strong>&nbsp;
          <span style={{ fontSize: "70%" }}>
            {params.getValue(params.id, "TITULZA") || ""}
          </span>
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

  const ukazPovolani = params => {
    return (
      <Tooltip
        arrow
        enterTouchDelay={0}
        title={params.getValue(params.id, "POVOLANI")}
      >
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            cursor: "help",
          }}
        >
          {params.getValue(params.id, "POVOLANI")}
        </span>
      </Tooltip>
    );
  };

  const columns = [
    {
      field: "PORCISLO",
      headerName: "Pořadí",
      description: "pořadí na kandidátce",
      flex: 1,
      minWidth: 15,
      disableColumnMenu: true,
      type: "number",
    },
    {
      field: "fullName",
      headerName: "Celé jméno",
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
      headerName: "Strana",
      description: "volební strana",
      renderCell: getOStrana,
      valueGetter: params => {
        const strana = strany.find(s => s.OSTRANA === params.row.OSTRANA);
        return strana.NAZEVCELK + " " + strana.ZKRATKAO8;
      },
      minWidth: 100,
      flex: 3,
    },
    {
      field: "VEK",
      headerName: "Věk",
      flex: 1,
      disableColumnMenu: true,
      minWidth: 15,
      type: "number",
    },
    {
      field: "POVOLANI",
      headerName: "Povolání",
      flex: 6,
      renderCell: ukazPovolani,
      minWidth: 120,
    },
  ];

  return (
    <div style={{ width: "100%", marginTop: isMobile ? null : "1.6rem" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
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
        </div>
      </div>
    </div>
  );
};

export default Tablica;
