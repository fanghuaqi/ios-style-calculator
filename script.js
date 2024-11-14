const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

function appendNumber(number) {
    if (display.value === 'Error') {
        display.value = ''; // 清除错误信息
    }
    display.value += number;
}

function calculate() {
    try {
        // 将 'x' 替换为 '*' 进行计算
        const expression = display.value.replace(/x/g, '*');
        display.value = eval(expression);
    } catch {
        display.value = 'Error'; // 捕获错误并显示
    }
}

function clearDisplay() {
    display.value = ''; // 清空显示
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; // 使用按钮的文本内容
        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '=':
                calculate();
                break;
            default:
                appendNumber(value);
        }
    });
});

// 监听键盘输入
document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
        appendNumber(e.key); // 数字键
    } else if (e.key === 'Enter') {
        calculate(); // 回车键
    } else if (e.key === 'Backspace') {
        clearDisplay(); // 清除
    } else if (['+', '-', '*', '/'].includes(e.key)) {
        appendNumber(e.key); // 运算符
    }
});