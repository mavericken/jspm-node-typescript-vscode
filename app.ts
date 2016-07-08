console.log("beginning of the file")
async function whatDoISay(){
  debugger;
  return "Hello world."
}
async function sayHelloWorld(){
  console.log(await whatDoISay());
}
sayHelloWorld().then(()=>{
  console.log("success");
}).catch(()=>{
  console.error("failure");
})
console.log("end of the file");