// Mis campos de entrada
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip'); 
const resultDiv = document.getElementById('result');

// Funcin para calcular la propina
function calcularPropina() {
    // Obtener valores de mis campos de entrada
    const bill = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipInput.value);

    // Comprobar que los valores sean correctos
    if (isNaN(bill) || isNaN(tipPercentage) || bill <= 0 || tipPercentage < 0) {
        resultDiv.textContent = 'Por favor, ingrese valores válidos.';
        return;
    }

    // Calcular la propina y el total
    const tipAmount = (bill * tipPercentage) / 100;
    const total = bill + tipAmount;

    // Mostrar el resultado
    resultDiv.textContent = `Propina: $${tipAmount.toFixed(2)}\nTotal a pagar: $${total.toFixed(2)}`;
}


