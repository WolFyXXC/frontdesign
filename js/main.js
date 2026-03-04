console.log("new hello javascript!");

function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const sum = num1 + num2;
    
    const resultElement = document.getElementById('sumResult');
    resultElement.innerHTML = `Результат: <span class="result-highlight">${num1} + ${num2} = ${sum}</span>`;
    
    resultElement.style.animation = 'none';
    resultElement.offsetHeight;
    resultElement.style.animation = 'fadeIn 0.5s ease-out';
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function checkPrime() {
    const num = parseInt(document.getElementById('primeNum').value);
    const isPrimeResult = isPrime(num);
    const result = isPrimeResult ? 'простое число' : 'не простое число';
    
    const resultElement = document.getElementById('primeResult');
    resultElement.innerHTML = `Результат: <span class="result-highlight">${num} — ${result}</span>`;
    
    resultElement.style.animation = 'none';
    resultElement.offsetHeight;
    resultElement.style.animation = 'fadeIn 0.5s ease-out';
}

function findDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== num / i) divisors.push(num / i);
        }
    }
    return divisors.sort((a, b) => a - b);
}

function generateDivisors() {
    const randomNum = Math.floor(Math.random() * 10000) + 1;
    const divisors = findDivisors(randomNum);
    
    const resultElement = document.getElementById('divisorsResult');
    
    const divisorsHtml = divisors.map(d => `<span>${d}</span>`).join('');
    
    resultElement.innerHTML = `
        <div class="number-highlight">
            🎲 Случайное число: <strong>${randomNum}</strong>
        </div>
        <div class="stats">
            <div class="stat-item">
                <strong>${divisors.length}</strong> делителей
            </div>
            <div class="stat-item">
                <strong>${randomNum % 2 === 0 ? 'Чётное' : 'Нечётное'}</strong>
            </div>
            <div class="stat-item">
                <strong>${isPrime(randomNum) ? 'Простое' : 'Составное'}</strong>
            </div>
        </div>
        <div class="divisors-list">
            <strong>🔢 Все делители:</strong><br>
            ${divisorsHtml}
        </div>
    `;
    
    resultElement.style.animation = 'none';
    resultElement.offsetHeight;
    resultElement.style.animation = 'fadeIn 0.5s ease-out';
}

window.onload = function() {
    generateDivisors();
    calculateSum();
    checkPrime();
};