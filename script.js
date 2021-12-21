let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let select = document.querySelector('select');
let resSpan = document.querySelector('.result');
let result;
let submitBtn = document.querySelector('.submit');
let resetBtn = document.querySelector('.reset');

let form = document.querySelector('form');

submitBtn.addEventListener('click', function(e) {
    if (form.checkValidity()) {
        e.preventDefault();
            switch (select[select.options.selectedIndex].value) {
                case 'addition':
                    result = +firstNumber.value + +secondNumber.value;
                    break;
                case 'subtraction':
                    result = firstNumber.value - secondNumber.value;
                    break;
                case 'multiplication':
                    result = firstNumber.value * secondNumber.value;
                    break;
                case 'division':
                    result = firstNumber.value / secondNumber.value;
                    break;
            };
        resSpan.innerHTML = result;
    }
});

resetBtn.addEventListener('click', function() {
    resSpan.innerHTML = '';
});
