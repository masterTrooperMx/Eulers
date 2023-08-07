const path = require('path');
const fs = require('fs');

const rootDir = 'tests';

//console.log(`Normalize ${path.normalize(rootDir)}`)
//console.log(`${path.resolve(rootDir)}`)
let Files = []; // insede are part of function stack
let Dirs = [];
listFiles = (rootDir, level) => {
    let objTemp = [];
    files = fs.readdirSync(rootDir);
    for(file in files){ // base code
        filePath = `${rootDir}/${files[file]}`;
        stat = fs.statSync(filePath);
        console.log(`${files[file]} ${filePath}`);
        if(stat.isFile()) {
            objTemp.push({
                'name': `${files[file]}`,
                'path': `${filePath}`,
                'type': `${(stat.isDirectory() == true)? 'dir': 'file'}`,
                'size': `${stat.size}`,
                'level': `${level}`,
            });
            Files.push(objTemp);
        }
        if(stat.isDirectory()){ // recursive code
            //console.log(`DIR - ${level}`);
            objTemp.push({
                'name': `${files[file]}`,
                'path': `${filePath}`,
                'type': `${(stat.isDirectory() == true)? 'dir': 'file'}`,
                'size': `${stat.size}`,
                'level': `${level}`,
                });
            Dirs.push(objTemp);
            listFiles(filePath, level+1);
        }
    }
    return [Files, Dirs];
}
console.log(JSON.stringify(listFiles(rootDir, 0), null, 4)); // for better printing

getDirs = (rootDir) => {
    const files = fs.readdirSync(rootDir);
    let dirs = [];
    console.log(`${rootDir} ${dirs}`);
    for(file in files) {
        if(files[file] != '.'){
            filePath = `${rootDir}/${files[file]}`;
            stat = fs.statSync(filePath);
            console.log(`f ${filePath} s${fs.stat}`);
            dirs.push(files[file]);
            if(stat.isDirectory()){ // recursive code
                getDirs(files[file]);
            }
        }
    }
    return dirs; // stop code
}

//console.log(getDirs(rootDir));

let objTree = {};
function getAllFiles(dirPath, levels){
    let objTemp = [];
    let level = 1;
    fs.readdirSync(dirPath).forEach(function(file) {
        let filepath = path.join(dirPath , file);
        let stat= fs.statSync(filepath);
        if (stat.isDirectory()) {         
            getAllFiles(filepath); // recursively call
            level++;
        } else {
            // file name
          objTemp.push({
                        'name': `${file}`,
                        'path': `${filepath}`,
                        'type': `${(stat.isDirectory() == true)? 'dir': 'file'}`,
                        'size': `${stat.size}`,
                        });  
          console.log(`${filepath} ${level}\n`);                      
        }
        // directory name
        Object.assign(objTree, {'name': `${dirPath}`,
                                'path': `${dirPath}`, 
                                'size': `${stat.size}`,
                                'type': `dir`,
                                'children': objTemp});
    });
}

//getAllFiles('../../codechef/');
//console.log(objTree);
//console.log(path);
const listDirs = (dirPath, level) => {
    let objTemp = [];
    const files = fs.readdirSync(dirPath);
    // base code
    for(file in files) { // get index
        if(files[file] != '.'){
            let filepath = dirPath +"/"+ files[file];
            let stat = fs.statSync(filepath);
            console.log(`${stat}`);
            objTemp.push({
                'name': `${files[file]}`,
                'path': `${filepath}`,
                'type': `${(stat.isDirectory() == true)? 'dir': 'file'}`,
                'size': `${stat.size}`,
                'level': `${level}`,
                }); 
            if(stat.isDirectory()) { 
                // recursive code
                listDirs(stat, level+1);
            }
        } else { // stop condition
            return objTemp;
        }
    }
}

//console.log(listDirs('./tests', 0));