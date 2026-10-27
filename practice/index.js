import { showPathResult, showAbsolutePath, createUploadedFiles, getComponentsOfPath, isAbsolutePath } from "./path/path.js";

console.log("\n")
console.log("show path.join , multiple segments")
showPathResult();
console.log("\n")

console.log("-------------------------------")
console.log("\n")
console.log("show abosulte path of files ")

showAbsolutePath();
console.log("\n")


createUploadedFiles();

getComponentsOfPath();
isAbsolutePath();
