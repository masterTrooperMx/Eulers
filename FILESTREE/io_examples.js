const path = require('path');
const fs = require('fs');

const rootDir = '../LARPRIMFACTOR';

//console.log(`Normalize ${path.normalize(rootDir)}`)
//console.log(`${path.resolve(rootDir)}`)
console.log(`${files = fs.readdirSync(rootDir)}`);
for(file in files){
    console.log(files[file]);
}

getDirs = (rootDir) => {
    const files = fs.readdirSync(rootDir);
    let dirs = [];

    for(file in files) {
        if(files[file] != '.'){
            filePath = `${rootDir}/${files[file]}`;
            stat = fs.statSync(filePath);
            if(stat.isDirectory()){
                dirs.push(files[file]);
            }
        }
    }
    return dirs
}


//console.log(getDirs('../LARPRIMFACTOR'));

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

getAllFiles('../../codechef/');
console.log(objTree);