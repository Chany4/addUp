document.querySelector('.inc').addEventListener('click', function() {
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    document.querySelector('.addPara').innerText = sum;
});