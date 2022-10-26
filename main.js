console.log("aaaaaaaaarh")

let toto = document.getElementById("jd")
console.log(toto)
toto.addEventListener("click", function() {
    console.log("j'ai")
    let articles = document.getElementsByTagName("h1")

    for (const article of articles){
    article.style.backgroundColor = "#" +(Math.random()*0xFFFFFF<<0).toString(16);
    }
    

    
})


