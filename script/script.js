// Add Up Task
const numberss = [1,2,3,4,5]
const sum = numberss.reduce((total,num)=> total + num,0);

let btn1 = document.querySelector('.inc');
let span = document.querySelector('.addPara')

btn1.addEventListener('click', ()=>{
    span.innerHTML = sum
})