console.log('Why your looking here😑');
const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');
const resetBtn = document.getElementById('resetBtn');
// console.log(subhanAllahDisplay); // sb thik thak moto kaj kortasa ni ta dekhar jonno aita korsi
let subhanAllahInitialValue = 0;
let alhamdulillahAllahInitialValue = 0;
let allahAkberInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener('click', function () {
    if(subhanAllahInitialValue === 33){
        return alert("subhan Allah Read Done start Allhamdulillah");
    }
    subhanAllahInitialValue += 1;
    // console.log(subhanAllahInitialValue);
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
subhanAllahDecrimentBtn.addEventListener('click', function () {
    if(subhanAllahInitialValue === 0 ){
        return alert("You can't added negative value")
    }
    subhanAllahInitialValue -= 1;
    // console.log(subhanAllahInitialValue);
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
alhamdulillahIncrimentBtn.addEventListener('click', function () {
    if(alhamdulillahAllahInitialValue === 33){
        return alert("Allhamdulillah Read Done start Allahu Akber");
    }
    alhamdulillahAllahInitialValue += 1;
    // console.log(subhanAllahInitialValue);
    alhamdulillahDisplay.innerText = alhamdulillahAllahInitialValue;
})
alhamdulillahDecrimentBtn.addEventListener('click', function () {
    if(alhamdulillahAllahInitialValue === 0 ){
        return alert("You can't added negative value")
    }
    alhamdulillahAllahInitialValue -= 1;
    // console.log(subhanAllahInitialValue);
    alhamdulillahDisplay.innerText = alhamdulillahAllahInitialValue;
})
allahAkberIncrimentBtn.addEventListener('click', function () {
    if(allahAkberInitialValue === 34){
        return alert("Allahu Akber Read Complete. Now You can Reset the Tasbih");
    }
    allahAkberInitialValue += 1;
    // console.log(subhanAllahInitialValue);
    allahAkberDisplay.innerText = allahAkberInitialValue;
})
allahAkberDecrimentBtn.addEventListener('click', function () {
    if(allahAkberInitialValue === 0 ){
        return alert("You can't added negative value")
    }
    allahAkberInitialValue -= 1;
    // console.log(subhanAllahInitialValue);
    allahAkberDisplay.innerText = allahAkberInitialValue;
})

resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahAllahInitialValue = 0;
    allahAkberInitialValue = 0;
})