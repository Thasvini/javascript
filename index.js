console.log("jj2j")

const fs=require("fs")

const file=fs.readFileSync("./data.json")
console.log(file)

const demo=JSON.parse(file)
console.log(demo)
// demo.kkk="345387685"
// fs.writeFileSync("./data.json",JSON.stringify(demo))