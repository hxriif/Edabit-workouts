function sort(drinks){
const result=drinks.slice().sort((a,b)=>a.price-b-price)
return result;
}
const arr=[{name:"apple",price:50},{name:"orange",price:30},{name:"mango",price:20}]
console.log(sort(arr))