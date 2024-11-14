const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

function appendNumber(number) {
    if (number === '.' && display.value.includes('.')) return;
    display.value = display.value === '0' ? number : display.value + number;
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/x/g, '*').replace(/÷/g, '/'));
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function updateButtonValues() {
    buttons.forEach(button => {
        button.setAttribute('data-value', button.textContent);
    });
}

updateButtonValues(); // 初始化按钮值

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

// 监听键盘输入
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        calculate();
    }
});