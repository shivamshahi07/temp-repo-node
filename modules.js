// const amount=1
// if (amount<10){
//     console.log('small number');

// }
// else{
//     console.log('large number');

// }
// console.log('first node app');
//modules 
//every file in node is a module by default 

const names=require('./firstmodule')
const sayhi=require('./function')
console.log(names)

sayhi(names.john)
sayhi('susan')
