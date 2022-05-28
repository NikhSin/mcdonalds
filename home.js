var image = [{veg:"https://cdn.tarladalal.com/members/9306/big/big_cheesy_stuffed_veggie_burger,_veg_cheese_burger-15114.jpg"},
{burger:"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg"},
{Donut:"https://media.wired.com/photos/6074aa620dfeac35a0cca839/master/pass/Science_donuts_465529983.jpg"}]

document.querySelector("form").addEventListener("submit", orderfood)
var div=document.createElement("div")
function orderfood(){
    event.preventDefault();
    
    let order=document.querySelector("#burger").checked
    let order1=document.querySelector("#ve-burger").checked
    let order2=document.querySelector("#Donut").checked
    div.innerHTML=null
function whatstheorder(order,order1,order2){
  
 var img= document.createElement("img")
 var img1= document.createElement("img")
 var img2= document.createElement("img")
 var p= document.createElement("p")
 var p1= document.createElement("p")
 var p2= document.createElement("p")
   
  if(order==true){
    img.src=image[1].burger
    p1.innerText="01"
    div.append(p1,img)
    document.querySelector("body").append(div)
  }
  if(order1==true){
    img1.src=image[0].veg
    p.innerText="00"
    div.append(p,img1)
    document.querySelector("body").append(div)
  }
  if(order2==true){
    img2.src=image[2].Donut
    p2.innerText="02"
    div.append(p2,img2)
    document.querySelector("body").append(div)
  }
  else if(order==false&&order1==false&&order2==false){
    alert("Please select order")
  }
}



    
let myFirstPromise = new Promise((resolve, reject) => {
    
    setTimeout( function() {
        whatstheorder(order,order1,order2)
      resolve(order) 
    }, 3000)
  })
}

