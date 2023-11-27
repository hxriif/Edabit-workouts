function array(arr1,arr2){
 const result=[arr1.slice(0),...arr2,arr1.slice(1)]
 return result;
}
const arr11=[1,10]
const arr22=[2,3,4,5,6,7,8,9]
console.log(array(arr11,arr22))