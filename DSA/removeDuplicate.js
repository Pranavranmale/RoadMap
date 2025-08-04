 const removeDuplicate=(arr)=>{
    arr= [...new Set(arr)]
    return arr
 }
  console.log(removeDuplicate([1,2,2,3,4,4,5,]))

  