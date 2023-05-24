// let fetch_fun = async ()=>{

//   let res =await  fetch("https://jsonplaceholder.typicode.com/users")

//  .then(async(res)=>{
//     return await res.json()
//  })
//  .then((data)=>{
// console.log(data)
//  })
    
  
// }

// fetch_fun()

//fetch by async awaft
let json_fetch = async ()=>{

    let res =await fetch("db.json",{
        method:"GET",
        // body : JSON.stringify(obj)
        headers : {"Content-Type"  : "aplication/json" } 

    })
  
   if(res.ok){
    let data =await res.json()
    console.log(data)
   }
   
  }
  
// json_fetch()



let json_fetch_post = async ()=>{

    let res =await fetch("db.json",{
        method:"POST",
        body : JSON.stringify({name : "sweta" , age : "22"}),
        headers : {"Content-Type"  : "aplication/json" } 

    })
  
   if(res.ok){
    let data =await res.json()
    console.log(data)
   }
   
  }
  
json_fetch_post()