const path = require('path');
const fs = require('fs');
let objTree = [];
let level = 1;

/* function getAllFiles(rootDir, levels){
    let objTemp = [];
    fs.readdirSync(rootDir).forEach(function(file) {
        let filepath = path.join(rootDir , file);
        let stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            console.log(`d${file} ${level}`); // file name
            Object.assign(objTree, {
                                'name': `${rootDir}`,
                                'path': `${rootDir}`, 
                                'size': `${stat.size}`,
                                'type': `dir`,
                                'children': objTemp,
                            });
            getAllFiles(filepath); // recursively call
        } else {
            // directory name
/*
          objTemp.push({
                        'name': `${file}`,
                        'path': `${filepath}`,
                        'type': `${(stat.isDirectory() == true)? 'dir': 'file'}`,
                        'size': `${stat.size}`,
                        });  
          //console.log(`${filepath} ${file} ${level}\n`);
          console.log(`f${file} ${level}\n`);
        }
        // directory name
    });
} */

//getAllFiles('../../codechef/');
//console.log(objTree);
function readDirRecursive(dirPath) {
    let objChild = [];
    fs.readdir(dirPath, (err, files) => {
      if (err) throw err;
  
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        fs.stat(filePath, (err, stats) => {
          if (err) throw err;
  
          if (stats.isDirectory()) {
            objTree.push({
                "name": `${filePath}`,
                "children": objChild
            });
            console.log(`d-${filePath}`);
            readDirRecursive(filePath);
          } else {
            //fs.readFile(filePath, 'utf8', (err, contents) => {
            //  if (err) throw err;
            //  console.log(`Content of ${file}: ${contents}`);
            //});
            objChild.push({
                "name": `${filePath}`,
            });
            console.log(`f-${filePath}`);
          }
        });
      });
    });
  }
  
  readDirRecursive('../../codechef/Arrays');
  console.log(objTree);