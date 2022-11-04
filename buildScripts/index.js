const fs = require("fs")
const path = require("path")
var allfiles=[
    ["./src/background", "./dist/background"],
    ["./src/content", "./dist/content"],
    ["./src/popup", "./dist/popup"],
    ["./src/assets/js", "./dist//assets/js"],
    ["./src/assets/img", "./dist//assets/img"],
    // ["./src/manifest.json", "./dist/manifest.json"],
]
function copyFolderSync(from, to) {
    fs.mkdirSync(to);
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}
allfiles.forEach(f=>{
    copyFolderSync(f[0], f[1])
})
