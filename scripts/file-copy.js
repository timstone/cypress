import fse from "fs-extra";

async function fileCopy() {
  try {
    await fse.copy("/cypress/screenshots", "/public/screenshots");
    await fse.copy("/cypress/videos", "/public/videos");
    console.log("success!");
  } catch (err) {
    console.error(err);
  }
}

fileCopy();
