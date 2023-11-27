function sl(array){
const min=Math.min(array)
const max=Math.max(array)
return {min,max};
}
const arr=[23,54,523,36,523,456]
console.log(sl(arr))