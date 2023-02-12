const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(
          path.join(__dirname, "files", "starter.txt")
        , "utf8");
        console.log(data);
        await fsPromises.writeFile()
    } catch (error) {
        console.error(error)
        
    }
}

fileOps();

 console.log('Hello...')


//   fs.writeFile(
//     path.join(__dirname, "files", "changes.txt"),
//     "Chizaalabs",
//     (err) => {
//       if (err) throw err;
//       console.log("Write complete");
    

//     fs.appendFile(
//     path.join(__dirname, "files", "\n\nchanges.txt"),
//     "Chizaalabs Inc",
//     (err) => {
//       if (err) throw err;
//       console.log("Append complete");


//     fs.rename(
//       path.join(__dirname, "files", "newchanges.txt"),
//       "Chizaalabs Inc",
//       (err) => {
//         if (err) throw err;
//         console.log("rename complete");
//       })
//     })
// });


  

 //exit on uncaught errors
 process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
 })