
let count=0;

function increment(){
    count++;
    console.log(count);
    document.getElementById("counter").textContent=count   //textContent --> alternative for innerText because 1.only show human readable element(not show speace) 
    //document.getElementById("counter") - get the relative element by its id(in this its call for H2)
    //innerText=count - H2 element eke value eka count ekata change karanawa
}

let showCount = document.getElementById("save-count")   //identify the element by ID and store that element to showCount veriable  
function save(){
    let countStr = count + " - "
    showCount.textContent += countStr
    count = 0
    document.getElementById("counter").textContent=count
}