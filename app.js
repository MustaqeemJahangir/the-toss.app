
var h1=document.querySelector("#name")
var img= document.querySelector("img")
function toss(val) {
   //console.log(val)
var calculated=Math.ceil(Math.random()*2)
// console.log(calculated)
if (calculated===1) {
   console.log('you won the toss')
   h1.innerHTML ='you won the toss'
   img.src="head.jpg"

   
}
else{
   console.log('you loss the toss')
   h1.innerHTML ='you loss the toss'
   img.src="tails.jpg"


}




}
function tossy(val) {
   //console.log(val)
var calculated=Math.ceil(Math.random()*2)
// console.log(calculated)
if (calculated===2) {
   console.log('you won the toss')
   h1.innerHTML ='you won the toss'
   img.src="tails.jpg"

   
}
else{
   console.log('you loss the toss')
   h1.innerHTML ='you loss the toss'
   img.src="head.jpg"


}




}