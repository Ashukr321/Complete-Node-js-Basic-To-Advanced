import fs from 'fs';
import path from 'path'


// crud operation
// 1. create file 
const createFile = () => {
    const fileName = "testFile";
    fs.writeFileSync(fileName, "this is file data ");
    console.log("file create successfully")
    setTimeout(() => {
        // fs.unlink is the  asynchornous function 
        // fs.unlink("testFile", (err) => {
        //     if (err) {
        //         console.log(
        //             "error deleting file", err.message
        //         )
        //     }
        //     console.log("file deleted successfully after 2second")
        // }, 5000)

        setTimeout(() => {
            fs.unlinkSync("testFile");
        }, 10000)
    })
}


// create directory 
const createDirectory = () => {
    fs.mkdir("asyncFolder", (err) => {
        if (err) {
            console.log("something went wrong" || err.message);
        }
        console.log("directory created sucessfuly!");
    })
}

// delete dir ;
const deleteDir = () => {
    // here we use recursive bec  ,might be inside folder contains multiple sub directory and folder with recursive we are able to delete all file and folder 
    fs.mkdir("asyncFolder/hello", (err) => {
        if (!err) {
            console.log("nested folder and files are created successfuly!");
        }
    })

    setTimeout(() => {
        fs.rm("asyncFolder", { recursive: true }, (err) => {
            if (!err) {
                console.log("direcotry deleteed successfuly!");
            }
        })
    }, 10000)
}


const readingFile = () => {
    fs.readFile("file.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("something went wrong"
                || err.message
            )
        }
        console.log("file read successfuly!")
        console.log(data);
    })
}

export { createFile, createDirectory, deleteDir, readingFile }

// fs.writeFile()

// File create karta hai ya existing file ka content overwrite karta hai.

//     fs.writeFileSync()
// File synchronously create ya overwrite karta hai.

//     fs.appendFile()
// Existing file ke end mein data add karta hai.

//     fs.appendFileSync()
// File ke end mein data synchronously add karta hai.

//     fs.unlink()

// File delete karta hai.

//     fs.unlinkSync()

// File synchronously delete karta hai.

//     fs.mkdir()

// Naya folder create karta hai.

//     fs.mkdirSync()

// Folder synchronously create karta hai.

//     fs.readdir()

// Folder ke andar ki files aur folders ki list deta hai.

//     fs.rmdir()

// Folder delete karta hai; modern Node.js mein fs.rm() preferred hai.

//     fs.rm()

// File ya folder delete karta hai, aur options ke saath recursive deletion bhi kar sakta hai.

//     fs.rename()

// File ya folder ka naam change ya usse move karta hai.

//     fs.stat()

// File ya folder ka size, type aur modification details deta hai.

//     fs.existsSync()

// Check karta hai ki path exist karta hai ya nahi.

//     fs.access()

// File ya folder ki accessibility aur permissions check karta hai.

//     fs.copyFile()

// Ek file ko doosri location par copy karta hai.

//     fs.createReadStream()

// Badi file ko chunks mein read karta hai.

//     fs.createWriteStream()

// Data ko stream ke through file mein write karta hai.

//     fs.watch()

// File ya folder mein changes observe karta <hai className=""></hai>

