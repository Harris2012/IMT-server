const path = require("path");
const fs = require("fs");

// 读取文件
const readFile = (fileName) => {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const asyncReadFile = () => {
  // const dir = await asynccmd(url);
  const f1 = readFile('D:\\bilibili\\imt-server\\browsertime.har');
  // return f1
  return f1.toString().replace(/\n/g, "");
};
// JSON.parse(JSON.stringify(data))
const dir = asyncReadFile()
const fdir = JSON.stringify(dir)
const lastDir = JSON.parse(fdir)
console.log(fdir)