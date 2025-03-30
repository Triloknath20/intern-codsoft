document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    
    let currentNumber = '0';
    let previousNumber = '';
    let operation = null;
    let shouldResetDisplay = false;

    // Update display function
    const updateDisplay = () => {
        display.textContent = currentNumber;
    };

    // Clear all function
    const clearAll = () => {
        currentNumber = '0';
        previousNumber = '';
        operation = null;
        updateDisplay();
    };

    // Clear entry function
    const clearEntry = () => {
        currentNumber = '0';
        updateDisplay();
    };

    // Handle number input
    const handleNumber = (number) => {
        if (shouldResetDisplay) {
            currentNumber = number;
            shouldResetDisplay = false;
        } else {
            currentNumber = currentNumber === '0' ? number : currentNumber + number;
        }
        updateDisplay();
    };

    // Handle decimal point
    const handleDecimal = () => {
        if (shouldResetDisplay) {
            currentNumber = '0.';
            shouldResetDisplay = false;
        } else if (!currentNumber.includes('.')) {
            currentNumber += '.';
        }
        updateDisplay();
    };

    // Handle operator
    const handleOperator = (op) => {
        if (operation !== null) {
            calculate();
        }
        previousNumber = currentNumber;
        operation = op;
        shouldResetDisplay = true;
    };

    // Calculate function
    const calculate = () => {
        if (!previousNumber || !operation) return;
        
        const prev = parseFloat(previousNumber);
        const current = parseFloat(currentNumber);
        
        let result;
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = current !== 0 ? prev / current : 'Error';
                break;
            case '%':
                result = (prev * current) / 100;
                break;
        }

        currentNumber = result.toString();
        operation = null;
        shouldResetDisplay = true;
        updateDisplay();
    };

    // Add event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            // Handle different button types
            if (value >= '0' && value <= '9') {
                handleNumber(value);
            } else if (value === '.') {
                handleDecimal();
            } else if (value === 'AC') {
                clearAll();
            } else if (value === 'CE') {
                clearEntry();
            } else if (value === '=') {
                calculate();
            } else {
                handleOperator(value);
            }
        });
    });

    // Add keyboard support
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        
        // Prevent default behavior for calculator keys
        if (
            (key >= '0' && key <= '9') ||
            key === '.' ||
            key === '+' ||
            key === '-' ||
            key === '*' ||
            key === '/' ||
            key === 'Enter' ||
            key === 'Escape'
        ) {
            event.preventDefault();
        }

        // Map keyboard keys to calculator functions
        if (key >= '0' && key <= '9') {
            handleNumber(key);
        } else if (key === '.') {
            handleDecimal();
        } else if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Escape') {
            clearAll();
        } else if (key === 'Backspace') {
            clearEntry();
        } else if (key === '+') {
            handleOperator('+');
        } else if (key === '-') {
            handleOperator('-');
        } else if (key === '*') {
            handleOperator('×');
        } else if (key === '/') {
            handleOperator('÷');
        } else if (key === '%') {
            handleOperator('%');
        }
    });
}); 