let fs = require("fs");

console.log("start");

// async task
fs.readFile("./f1.txt" , cb);

function cb(error , data){
    console.log("Content = "+ data);
}


console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");
console.log("end");


// let count=1;
// while(true){
//     console.log(count);
// count++;
// }
