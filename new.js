
document.getElementById('btn').addEventListener('click', function() {
    
    const rows = parseInt(document.getElementById('rows').value);
    
    
    
    if (isNaN(rows) || rows <= 0)  {
        alert('Please enter valid positive integers for rows and columns.');
        return;
    }

   
    const matrixInput = document.getElementById('matrixInput');
     
  
    matrixInput.innerHTML = '';

   
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div'); 
        for (let j = 0; j < rows; j++) {
            const input = document.createElement('input'); 
            input.type = 'number'; 
            input.placeholder = Row ${i + 1} column ${j + 1}; 
            rowDiv.appendChild(input); 
        }
        matrixInput.appendChild(rowDiv); 
    }
});


document.getElementById('saveMatrix').addEventListener('click', function() {
    const matrixInput = document.getElementById('matrixInput').value;
    localStorage.setItem('matrixInput', matrixInput);
    window.location.href = 'Find_L.html';
});

function saveMatrix() {
    const matrixInput = document.getElementById("matrixInput").value;
    localStorage.setItem("matrix", matrixInput);
    alert("Matrix saved!");
}