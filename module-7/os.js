const os= require("os");// import os statement

// these below codes gives this pc os details

console.log("free memory ",os.freemem());
console.log("Total memory ",os.totalmem());// it gives bytes values
console.log("Total memory ",os.totalmem()/1024/1024/1024);// it gives gb values
console.log("OS version ",os.version());
console.log("CPUS ",os.cpus());
console.log("Platform ",os.platform());
console.log("Arch ",os.arch());
console.log("UserInfo ",os.userInfo());
