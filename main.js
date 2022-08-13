let weight = document.querySelector('.weight');
let height = document.querySelector('.height');

let btn = document.querySelector('.btn');
let res = document.querySelector('.res');
let desc = document.querySelector('.desc');
let bmi;
btn.addEventListener('click', calc);


function calc() {
    let w = weight.value;
    let h = height.value * height.value;
    let ans = (w / h) * 10000;
    res.innerText = ans.toFixed(2);
    bmi = ans.toFixed(2);
    if (bmi <= 18.5) {
        desc.innerText = `Your bmi value is ${bmi} and you're Underweight`;
    } else if (18.5 < bmi & bmi <= 24.9) {
        desc.innerText = `Your bmi value is ${bmi} and you're in the healthy weight range`;
    } else if (25 <= bmi & bmi <= 29.9) {
        desc.innerText = `Your bmi value is ${bmi} and you're Overweight`;
    } else if (bmi > 30) {
        desc.innerText = `Your bmi value is ${bmi} and you're Obese`;
    }
}