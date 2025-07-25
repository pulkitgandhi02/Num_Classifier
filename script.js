function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function checkNumber() {
  const input = document.getElementById('numberInput').value.trim();
  const num = Number(input);
  const resultText = document.getElementById('resultText');

  resultText.classList.remove("error", "success");

  if (input === '' || isNaN(num) || num <= 0 || !Number.isInteger(num)) {
    alert("⚠ Please enter a valid **positive whole number**.");
    resultText.textContent = '❌ Invalid input! Please enter a positive whole number.';
    resultText.classList.add("error");
    return;
  }

  const isEven = num % 2 === 0;
  const primeStatus = isPrime(num) ? 'Prime' : 'Non-Prime';
  const parity = isEven ? 'Even' : 'Odd';

  let message = `${num} is ${primeStatus} and ${parity}.`;

  if (num === 2) {
    message += ' It is the only even prime number.';
  }

  alert(`📢 Result:\n${message}`);
  resultText.textContent = `✅ ${message}`;
  resultText.classList.add("success");
}
