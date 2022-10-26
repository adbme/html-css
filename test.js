console.log("aaaaaaaarh")

let adil = {
  name: "Adil"

}
console.log(adil.name)

const t = 0

let ta = [1, 6, 4] 


function average (tableau) {
    let total = 0

    for (const note of tableau){
        total+=note   
    }
    
    return total/tableau.length 
}


console.log(average(ta))