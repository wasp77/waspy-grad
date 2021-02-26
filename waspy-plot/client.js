const fs = require("fs");
const filename = "data.csv";
const rows = [
  ["loss", "iterations"],
  [0.2, 0.7],
  [0.1, 0.2],
];

let csvContent = "";

rows.forEach(function (rowArray) {
  let row = rowArray.join(",");
  csvContent += row + "\r\n";
});

try {
  fs.writeFileSync(filename, csvContent);
  //file written successfully
} catch (err) {
  console.error(err);
}
