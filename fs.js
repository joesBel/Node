const fs=require("fs");
console.log("a");

let fsRead=(txt)=>{
    return new  Promise((resolve,reject)=>{
        fs.readFile(txt,"utf-8",(err,data)=>{
            if(err){
                reject(err)
            }else {
                resolve(data)
            }
        })
    })
}
fsRead("sample.txt").then((data)=>{
    console.log(data);
    return fsRead("sample2.txt")
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
console.log("b");

