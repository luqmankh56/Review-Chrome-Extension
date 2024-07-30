let myLeads =[]
const inputEl =document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl =document.getElementById("ul-el")

let name= localStorage.getItem("myLeads")
console.log(myLeads)

inputBtn.addEventListener("click",function() {
    myLeads.push (inputEl.value)
    inputEl.value= ""
    console.log (myLeads)
    renderLeads()
})

function renderLeads() {
    let listItems =""
    for(let i=0; i < myLeads.length;i++) {
    console.log(myLeads[i])}
    }
