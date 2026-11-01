const p=new Promise(function(res,rej){
    // res("hi");
    rej("serever is down")
})

console.log(p);
p.then(function onfulfilled(val){
    console.log(val)
},function onrejected(val){
    console.log(val)
})