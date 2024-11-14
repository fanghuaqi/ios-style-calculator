const display = document.querySelector('.calculator input');
const buttons = document.querySelectorAll('.calculator .btn');

function appendNumber(number) {
    if (number === '.' && display.value.includes('.')) return;
    display.value += number;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '=':
                calculate();
                break;
            case '.':
                appendNumber('.');
                break;
            default:
                appendNumber(value);
        }
    });
});