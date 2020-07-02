const fse = require("fs-extra");

async function fileCleanup() {
  await fse.emptyDir("cypress/results"); // remove contents of the results folder
  await fse.remove("results/json/mochawesome.json");
  await fse.emptyDir("cypress/screenshots");
  await fse.emptyDir("cypress/videos");
  await fse.emptyDir("public/assets");
  await fse.emptyDir("public/screenshots");
  await fse.emptyDir("public/videos");
  await fse.remove("public/index.html");
}

fileCleanup();
