/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
       arr.map((dev) =>{
        if(arr.profession === "developer"){
          console.log(dev)
        }
       })
      }
      PrintDeveloperbyMap();
  
      function PrintDeveloperbyForEach() {
        //Write your code here, just console.log
        arr.forEach((dev) => {
          if(dev.profession ==="developer"){
            console.log(dev)
          }
        })
        }
        PrintDeveloperbyForEach()
  
  function addData() {
    //Write your code here, just console.log
    let employee=[{ic:4,name:"Ramesh",age:28,profession:"banker"}]
    arr.push(employee)
    console.log( arr);
  }
  addData()
  
  function removeAdmin() {
    //Write your code here, just console.log
    const filteredArray = arr.filter(employee => employee.profession !== 'admin');
    console.log(filteredArray);
  }
  removeAdmin();
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newarr=[
      {id:4,name:"jhon",age:30,profession:"admin"},
      {id:5,name:"Arun",age:35,profession:"CEO"},
      {id:6,name:"Ankur",age:25,profession:"Cricetor"},
    ]
    let result=arr.concat(newarr)
    console.log(result)
  }
  ConcatenateArray();