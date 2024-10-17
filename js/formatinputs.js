import {priceFormatter} from './formatters.js';

const inputCost =  document.querySelector('#input-cost');

const totalmonthpayment=document.querySelector('#total-month-payment');  

const inputDownPayment =  document.querySelector('#input-downpayment');

const inputTerm =  document.querySelector('#input-term');

const cleaveYears = {
numeral: true,

};

const cleaveTerm = new Cleave(inputTerm, cleaveYears)

var cleaveCost = new Cleave('#input-cost', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter:" ",
});
var cleavep = new Cleave('#input-downpayment', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter:" ",
});
var cleaveppp = new Cleave('#input-term', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter:" ",
});

const form = document.querySelector('#form');
form.addEventListener('input', function(){  
   calcMortgage();
});
const totalCost = document.querySelector('#total-cost');

function calcMortgage(){
    const totalAmount = +cleaveCost.getRawValue() - cleavep.getRawValue();
   
    totalCost.innerText = priceFormatter.format(totalAmount);
    const creditRate = +document.querySelector('input[name="program"]:checked').value;
    //console.log(creditRate);

   const years = +cleaveTerm.getRawValue();
  // console.log(years);
  const months = years *12;

const monthRate =  creditRate / 12;

  const monthhPayment =(totalAmount * monthRate) / 1 - (1+monthRate) * (1 - months);

  //console.log(monthhPayment);

  totalmonthpayment.innerText =priceFormatter.format(monthhPayment);

}

const sliderCost = document.getElementById('slider-cost');

noUiSlider.create(sliderCost, {
    start: 375000,
    connect: 'lower',
    step: 100000,
    tooltips:true, 

    range: {
        'min': 0,
        "50%": [10000000, 10000000],
        'max': 100000000,
    }
});

sliderCost.noUiSlider.on('update', function(){
    const sliderValue = parseInt(sliderCost.noUiSlider.get(true));
    inputCost.value = sliderValue;
    calcMortgage();
});

const sliderCoste = document.getElementById('slider-coste');
noUiSlider.create(sliderCoste, {
    start: 375000,
    connect: 'lower',
    step: 10000,
    tooltips:true, 

    range: {
        'min': 0,
        "50%": [10000000, 1000000],
        'max': 100000000,
    }
} );

sliderCoste.noUiSlider.on('update', function(){
    const sliderValues = parseInt(sliderCoste.noUiSlider.get(true));
    inputCost.value = sliderValues;
    calcMortgage();
});