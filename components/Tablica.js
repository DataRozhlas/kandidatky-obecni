import { DataGrid, csCZ } from "@mui/x-data-grid";
import { Tooltip, Typography } from "@mui/material";

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
        style={{ cursor: "help", overflow: "hidden", textOverflow: "ellipsis" }}
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

const Tablica = ({ vybarveniKandidati, isMobile, strany }) => {
  const columns = [
    {
      field: "PORCISLO",
      headerName: "#",
      description: "pořadí na kandidátce",
      type: "number",
      flex: 1,
      minWidth: 15,
      disableColumnMenu: true,
    },
    {
      field: "fullName",
      headerName: "Celé jméno",
      filterable: false,
      // valueGetter: getFullName,
      // valueFormatter: getFullName,
      renderCell: getFullName,
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
      renderCell: params => {
        const strana = strany.find(s => s.OSTRANA === params.value);
        return (
          <Tooltip arrow enterTouchDelay={0} title={strana.ZKRATKAO30}>
            <Typography
              style={{
                cursor: "help",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {strana.ZKRATKAO30}
            </Typography>
          </Tooltip>
        );
      },
      disableColumnMenu: true,
      minWidth: 100,
      flex: 3,
    },
    {
      field: "VEK",
      headerName: "Věk",
      type: "number",
      flex: 1,
      disableColumnMenu: true,
      minWidth: 15,
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
                id: `${kandidat.KODZASTUP}${kandidat.POR_STR_HL}${kandidat.PORCISLO}`,
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
