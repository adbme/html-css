console.log("aaaaaaaarh")

let adil = {
  name: "Adil"

}
console.log(adil.name)

const t = 0

let ta = [6, 10, 4] 


function average (tableau) {
    let total = 0

    for (const note of tableau){
        total+=note   
    }
    
    return total/tableau.length 
}


console.log(average(ta))

let avg_ta = average(ta)

function pass(avg){
if (avg > 6){
    console.log("tricher n'est pas boooon !")
    return
}
    if (avg < 4) {
    console.log("ils ont échouéééé")
}
else{
    console.log("bien joué mec")
}
}

pass(avg_ta)