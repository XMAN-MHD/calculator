const themeBtn = document.querySelector('.theme-btn');
const bodyTag = document.querySelector('body');
const topBar = document.querySelector('#top-bar');
const calcTitle = document.querySelector('h1');
const themeTitle = document.querySelector('h6');
const spanElements = document.querySelectorAll('span');
const display = document.querySelector('#display');
const displayValue = document.querySelector('#display-value');
const buttons = document.querySelector('.buttons');
const btns = document.querySelectorAll('.btn');
const delBtn = document.querySelector('.del');
const equalBtn = document.querySelector('.equal');
const resetBtn = document.querySelector('.reset');
let clickBtnNumber = 1;

const moveThemeBtn = () => {
    clickBtnNumber += 1;
    if(clickBtnNumber === 2)
    {
        themeBtn.classList.add('theme-mode-2');
        bodyTag.style.backgroundColor = "rgb(230, 230, 230)";
        topBar.style.backgroundColor = "rgb(230, 230, 230)";
        calcTitle.style.color = 'black';
        themeTitle.style.color = 'black';
        spanElements.forEach(element => {
            element.style.color = 'black';
        });
        themeBtn.style.backgroundColor = "rgb(211, 205, 205)";
        display.style.backgroundColor = "rgb(238, 238, 238)";
        buttons.style.backgroundColor = "rgb(211, 205, 205)";
        displayValue.style.color = 'black';
        btns.forEach(element => {
            element.classList.replace('btn', 'btn-mode-2');  
        });
        delBtn.classList.replace('del', 'del-mode-2');  
        resetBtn.classList.replace('reset', 'reset-mode-2');  
        equalBtn.classList.replace('equal', 'equal-mode-2');  
        
    }
    else if(clickBtnNumber === 3)
    {
        themeBtn.classList.remove('theme-mode-2');
        themeBtn.classList.add('theme-mode-3');
        bodyTag.style.backgroundColor = "rgb(23, 6, 42)";
        topBar.style.backgroundColor = "rgb(23, 6, 42)";
        calcTitle.style.color = "rgb(255, 230, 62)";
        themeTitle.style.color = "rgb(255, 230, 62)";
        spanElements.forEach(element => {
            element.style.color = "rgb(255, 230, 62)";
        });
        themeBtn.style.backgroundColor = "rgb(30, 8, 54)";
        display.style.backgroundColor = "rgb(30, 8, 54)";
        buttons.style.backgroundColor = "rgb(30, 8, 54)";
        btns.forEach(element => {
            element.classList.replace('btn-mode-2', 'btn-mode-3');  
        });
        delBtn.classList.replace('del-mode-2', 'del-mode-3');  
        resetBtn.classList.replace('reset-mode-2', 'reset-mode-3'); 
        equalBtn.classList.replace('equal-mode-2', 'equal-mode-3');  
    }
    else 
    {
        themeBtn.classList.remove('theme-mode-3');
        clickBtnNumber = 1;
        bodyTag.style.backgroundColor = "rgb(59, 70, 100)";
        topBar.style.backgroundColor = "rgb(59, 70, 100)";
        calcTitle.style.color = "white";
        themeTitle.style.color = "white";
        spanElements.forEach(element => {
            element.style.color = "white";
        });
        themeBtn.style.backgroundColor = "rgb(24, 31, 50)";
        display.style.backgroundColor = "rgb(24, 31, 50)";
        buttons.style.backgroundColor = "rgb(24, 31, 50)";
        btns.forEach(element => {
            element.classList.replace('btn-mode-3', 'btn');  
        });
        delBtn.classList.replace('del-mode-3', 'del');  
        resetBtn.classList.replace('reset-mode-3', 'reset'); 
        equalBtn.classList.replace('equal-mode-3', 'equal');
    }
}

let number1 = '', number2 = '', operator = false, result, isEqualClicked = false, isDeleteClicked = false;

const getNumber = (e) => {
    console.log(number1)
    if (!operator) 
    {
        if (isDeleteClicked) {
            if(displayValue.textContent.length === 0)
            {
                number1 += e.target.textContent;
                displayValue.textContent = e.target.textContent;
            }
            else{
                number1 = e.target.textContent
                displayValue.textContent = number1;
            }
            isDeleteClicked = false;
        }
        else if(isEqualClicked)
        {
            number1 = e.target.textContent;
            number2 = '';
            displayValue.textContent = number1
            isEqualClicked = false;
        }
        else {
            number1 += e.target.textContent;
            displayValue.textContent = number1;
        }    
    }
    else 
    {
        if(isDeleteClicked && number2 === '')
        {
            number2 = e.target.textContent;
        }
        else{
            number2 += e.target.textContent;
        }
        displayValue.textContent = number2; 
    }
    
};

const addition = () => {
    if(isEqualClicked)
    {
        displayValue.setAttribute('id', 'display-value');
        number1 = displayValue.textContent;
        number2 = '';
        isEqualClicked = false;
    }
    
    operator = '+';
    displayValue.textContent = '';    
};

const soustraction = () => {
    if(isEqualClicked)
    {
        displayValue.setAttribute('id', 'display-value');
        number1 = displayValue.textContent;
        number2 = '';
        isEqualClicked = false;
    }

    operator = '-';
    displayValue.textContent = '';    
};

const multiply = () => {
    if(isEqualClicked)
    {
        displayValue.setAttribute('id', 'display-value');
        number1 = displayValue.textContent;
        number2 = '';
        isEqualClicked = false;
    }

    operator = 'x';
    displayValue.textContent = '';    
};

const division = () => {
    if(isEqualClicked)
    {
        displayValue.setAttribute('id', 'display-value');
        number1 = displayValue.textContent;
        number2 = '';
        isEqualClicked = false;
    }

    operator = '/';
    displayValue.textContent = '';    
};

const getResult = () => {
    if(isEqualClicked)
    {
        return;
    }
    else if(operator == '+')
    {
        result = Number(number1) + Number(number2);
    }
    else if(operator == '-')
    {
        result = Number(number1) - Number(number2);
    } 
    else if(operator == 'x')
    {
        result = Number(number1) *  Number(number2);
    }
    else {
        result = Number(number1) / Number(number2);
    }
    
    if(Number.isInteger(result))
    {
        displayValue.textContent = result;
    }
    else 
    {
        displayValue.textContent = result.toFixed(5);
    }

    displayValue.setAttribute('id', 'result-value-style');
    isEqualClicked = true;
    operator = false;
    isDeleteClicked = false;
};

const resetCalculator = () => {
    operator = false;
    number1 = '';
    number2 = '';
    displayValue.textContent= ''; 
    displayValue.setAttribute('id', 'display-value');
};

const deleteCharacter = () => {
    isDeleteClicked = true;
    displayValue.textContent= displayValue.textContent.slice(0, -1); 
    if(isEqualClicked)
    {
        number1 = displayValue.textContent;
        number2 = ''
        isEqualClicked = false;
    }
    else {
        if(number2 === '')
        {
            if(displayValue.textContent.length === 0)
            {
                number1 ='';
            }
            else{number1 = displayValue.textContent;}
        }
        else 
        {
            number2 = displayValue.textContent;
        }
    }
    
};







