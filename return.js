// Return only numbers in the years array greater than 1950.
function checking(year){
    const result=year.filter(y=>y>1950)
    return result
}
const years=[1900,2000,2980,1950,2030,3953,3207,3649,1500,1200,1350];
console.log(checking(years));