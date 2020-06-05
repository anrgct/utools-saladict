import Dexie from "dexie";
import { importInto, exportDB } from "dexie-export-import";
const databaseName = "SaladictWords";
export async function exportDatabase() {
  const db = await new Dexie(databaseName).open();
  let blob = await exportDB(db);
  blob = await blobToDataURL(blob);
  return blob;
}

export async function importDatabase(file) {
  file = dataURLtoBlob(file);
  const db = new Dexie(databaseName);
  db.version(1).stores({
    notebook: "date,text,context,url",
    history: "date,text,context,url",
    syncmeta: "id",
  });
  await db.open();
  const result = await importInto(db, file, {
    acceptMissingTables: true,
    acceptVersionDiff: true,
    overwriteValues: true
    // clearTablesBeforeImport:true
  });
  return result;
}
function blobToDataURL(blob) {
  return new Promise((res) => {
    let a = new FileReader();
    a.onload = function (e) {
      res(e.target.result);
    };
    a.readAsDataURL(blob);
  });
}
function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
