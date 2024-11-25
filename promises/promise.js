 //promise on the  
 let p = new Promise ((resolve , reject ) => {
    let a = 1 + 1
    if (a==2)
    
resolve(success)
else {
    reject (failed)
}
 })

 // promise
 p.then((message) =>{
    console.log ("this is the then" + message)
 }) .catch((message) => {
    console.log ('this is the catch ' + message)
 })
// premio
