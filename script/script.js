// // Add Up Task
// const numberss = [1,2,3,4,5]
// const sum = numberss.reduce((total,num)=> total + num,0);

// let btn1 = document.querySelector('.inc');
// let span = document.querySelector('.addPara')

// btn1.addEventListener('click', ()=>{
//     span.innerHTML = sum
// })

document.querySelector('.inc').addEventListener('click', function() {
    // Get the input value
    const input = document.getElementById('numbersInput').value;
    // Split the input string into an array of numbers
    const numbers = input.split(',').map(Number);
    // Calculate the sum of the numbers
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    // Display the result in the paragraph tag
    document.querySelector('.addPara').innerText = sum;
});