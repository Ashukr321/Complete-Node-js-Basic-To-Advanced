
import path from 'path'
import fs from 'fs';
import { fileURLToPath } from 'url';

console.log(path.extname(fileURLToPath(import.meta.url))) // <div className="js">
// </div>
const segments = [
    "api",
    "v1",
    "docs",
    "user",
]


const showPathResult = () => {
    const result = path.join(...segments);
    console.log(result);
}

const showAbsolutePath = () => {
    // resolve do kaam krte hai phle abosult path, and if we send segement that aslo merge
    console.log(path.resolve("path", "path.js")); // this reolve from current working directly , 
}



// task create uploaded folder fiels for user profile 

const createUploadedFiles = () => {
    // process.cwd(): always return the current working directory;
    // it solve give the abdolute path 
    console.log(process.cwd()); // current working directy deta hai 
    console.log();
    const filePath = path.join(process.cwd(), "uploads", "profile");
    console.log(filePath);
    fs.mkdirSync(filePath, { recursive: true });
}



// know absolute file folder path 
const __filePath = fileURLToPath(import.meta.url);
console.log(__filePath)// it return current file absolute path , 

console.log("show the current js file abosulte path")
const __dirname = path.dirname(__filePath);
console.log(__dirname);

console.log(path.resolve("path") == __dirname);

const getComponentsOfPath = () => {
    console.log(path.parse(__dirname));
}


const isAbsolutePath = () => {
    const absolutePath = path.resolve("path");
    console.log(path.isAbsolute(absolutePath));// true or false; 
}

export { showPathResult, showAbsolutePath, createUploadedFiles, getComponentsOfPath, isAbsolutePath };



