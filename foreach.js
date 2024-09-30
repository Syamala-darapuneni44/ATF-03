//foreach willnot return anything
//map will return array values
//filter -> filter the values according to that like even ,odd if condition is true then it will return 
let n =[1,2,3,4,5];
let new_array = n.forEach((ele,i) => {
    return ele*2;
})
let new_array= n.