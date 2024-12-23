let colors = document.querySelectorAll(".color");
let body = document.querySelectorAll("body");


colors.forEach((color)=>{
    console.log(color);

    color.addEventListener("click",(i)=>{
        // console.log(i);
        console.log(i.target);
        if (i.target.id === "White") {
            body.style.backgroundColor = i.target.id;
        }
        else  if (i.target.id === "Grey") {
            body.style.backgroundColor = i.target.id;
        }
        else  if (i.target.id === "White") {
            body.style.backgroundColor = i.target.id;
        }
        else  if (i.target.id === "White") {
            body.style.backgroundColor = i.target.id;
        }
        
    })
    
})
