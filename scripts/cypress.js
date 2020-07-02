const fse = require("fs-extra");

async function fileCleanup() {
  await fse.emptyDir("cypress/results"); // remove contents of the results folder
  await fse.remove("results/json/mochawesome.json");
  await fse.remove("public/assets");
  await fse.remove("public/screenshots");
  await fse.remove("public/videos");
  await fse.remove("public/index.html");
}

fileCleanup();
