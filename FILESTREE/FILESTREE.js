/**
 * Walking a directory tree on a file system programmatically is a commonplace task. 
 * In this challenge, you'll use Node.js's file system library to produce an object tree containing information for a directory and all of its subdirectories up to a specified depth. 
 * This structure could be useful for manipulating in memory or transmitting and displaying a file system on a web page or terminal application.
 * For the purposes of this challenge, assume a Linux file system.
 */
const process = require('process');
const path = require('path');
const fs = require('fs');
const { dir } = require('console');
let objTree = {};

function getAllFiles(dirPath){
    let objTemp = [];
    let level = 1;
    fs.readdirSync(dirPath).forEach(function(file) {
        let filepath = path.join(dirPath , file);
        let stat= fs.statSync(filepath);
        if (stat.isDirectory()) {            
            level++;
            getAllFiles(filepath); // recursively call
        } else {
          objTemp.push({
                        'name': `${file}`,
                        'path': `${filepath}`,
                        'type': `${(stat.isDirectory() == true)? 'dir': 'file'}`,
                        'size': `${stat.size}`,
                        });  
          console.log(`${filepath} ${level} \n`);                      
        }
        Object.assign(objTree, {'name': `${dirPath}`,
                                'path': `${dirPath}`, 
                                'size': `${stat.size}`,
                                'type': `${dir}`,
                                'children': objTemp});
    });
    
}

/**
 * 
 * @param {String - A path to the root directory to be processed (not the root directory of the file system). This is always relative to process.cwd()} rootDir 
 * @param {Number - the number of levels in the directory tree to include in the result structure; must be >= 0 where 0 represents the root level, inclusive} depth 
 */
function directoryToTree(rootDir, depth){
    let level = 0;
    if(rootDir != "" && depth > 0) {
        // check rootDir pattern for path in file system
       rootDir = path.normalize(rootDir);
       // verify if path exists
       try {
        absRootDir = path.resolve('../');
       } catch(err) {
        console.log(`Could not resolve ${absRootDir} existence in HD, ${err}`);
       }
       objTree = getAllFiles(rootDir);
    }
    return objTree;
}

function main(){
    const arg = process.argv.slice(2); // FILESTREE tests
    console.table(arg);
    if(arg.length > 0){
        const dirR = arg[0];
        const objTree = directoryToTree(dirR, 3);
        console.log(objTree);    
    } else {
        console.log("Error, usage: node FILESTREE.js <NAMEDIR>");
    }
}

main()