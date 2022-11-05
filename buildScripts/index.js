const fs = require("fs")
const path = require("path")
// var allfiles=[
//     ["./src/background", "./dist/background"],
//     ["./src/content", "./dist/content"],
//     ["./src/popup", "./dist/popup"],
//     ["./src/assets/js", "./dist//assets/js"],
//     ["./src/assets/img", "./dist//assets/img"],
//     // ["./src/manifest.json", "./dist/manifest.json"],
// ]
// function copyFolderSync(from, to) {
//     fs.readdirSync(from).forEach(element => {
//         if (fs.lstatSync(path.join(from, element)).isFile()) {
//             fs.copyFileSync(path.join(from, element), path.join(to, element));
//         } else {
//             fs.mkdirSync(to);
//             copyFolderSync(path.join(from, element), path.join(to, element));
//         }
//     });
// }
// allfiles.forEach(f=>{
//     copyFolderSync(f[0], f[1])
// })
fs.watch('./src/', (eventType, filename) => {
    console.log(eventType);
    // could be either 'rename' or 'change'. new file event and delete
    // also generally emit 'rename'
    console.log(filename);
    })