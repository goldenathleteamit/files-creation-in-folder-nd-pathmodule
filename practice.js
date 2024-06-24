//making files inside a folder 
//use of path module
//reading of files
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
for(let i=0;i<2;i++){
    fs.writeFileSync(dirPath+"/helo"+i+".txt",'this is a page');
}
fs.readdir(dirPath,(err,items)=>{
    console.log(items);
})