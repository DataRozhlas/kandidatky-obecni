import fs from "fs";
import { csvParse } from "d3-dsv";

const readCSVdata = fileName => {
  const rawData = fs.readFileSync(`data/${fileName}.csv`, "utf8");
  const data = csvParse(rawData);
  return data;
};

export default readCSVdata;
