function createMatrixInput() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const matrixInput = document.getElementById('matrixInput');
    matrixInput.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'matrix-row';
        for (let j = 0; j < size; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'matrix-cell';
            input.id = `cell-${i}-${j}`;
            input.step = 'any';
            row.appendChild(input);
        }
        matrixInput.appendChild(row);
    }
}

function displayMatrix(matrix, name) {
    let html = `<div class="matrix-display">`;
    if (name) {
        html += `<span style="margin-right: 10px;">${name} = </span>`;
    }
    html += `<div class="matrix-bracket">[</div>`;
    html += `<div style="display: inline-block;">`;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            html += `<span style="display: inline-block; width: 60px; text-align: center;">
                ${Number(matrix[i][j]).toFixed(3)}
            </span>`;
        }
        html += '<br>';
    }
    html += `</div><div class="matrix-bracket">]</div></div>`;
    return html;
}

function getInputMatrix() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            const value = parseFloat(document.getElementById(`cell-${i}-${j}`).value);
            if (isNaN(value)) {
                throw new Error('Please fill all cells with valid numbers');
            }
            matrix[i][j] = value;
        }
    }
    return matrix;
}

function calculateLDU() {
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    resultDiv.innerHTML = '';
    errorDiv.innerHTML = '';

    try {
        const A = getInputMatrix();
        const n = A.length;

        // Create copies for L, D, and U matrices
        const L = Array(n).fill().map(() => Array(n).fill(0));
        const D = Array(n).fill().map(() => Array(n).fill(0));
        const U = Array(n).fill().map(() => Array(n).fill(0));

        // Initialize L and U with 1's on diagonal
        for (let i = 0; i < n; i++) {
            L[i][i] = 1;
            U[i][i] = 1;
        }

        let html = '<h2>Step-by-step LDU Factorization</h2>';
        html += '<div class="step">Original Matrix A:<br>';
        html += displayMatrix(A, 'A');
        html += '</div>';

        // Doolittle's method modified for LDU
        let step = 1;
        for (let k = 0; k < n; k++) {
            // Calculate D[k][k]
            D[k][k] = A[k][k];
            for (let j = 0; j < k; j++) {
                D[k][k] -= L[k][j] * D[j][j] * U[j][k];
            }
            if (Math.abs(D[k][k]) < 1e-10) {
                throw new Error('Matrix cannot be factorized (zero pivot encountered)');
            }

            html += `<div class="step">Step ${step++}: Calculate pivot D[${k}][${k}]<br>`;
            html += displayMatrix(D, 'D');
            html += '</div>';

            // Calculate L[i][k] and U[k][j]
            for (let i = k + 1; i < n; i++) {
                L[i][k] = A[i][k];
                for (let j = 0; j < k; j++) {
                    L[i][k] -= L[i][j] * D[j][j] * U[j][k];
                }
                L[i][k] /= D[k][k];

                html += `<div class="step">Calculate L[${i}][${k}]:<br>`;
                html += displayMatrix(L, 'L');
                html += '</div>';
            }

            for (let j = k + 1; j < n; j++) {
                U[k][j] = A[k][j];
                for (let i = 0; i < k; i++) {
                    U[k][j] -= L[k][i] * D[i][i] * U[i][j];
                }
                U[k][j] /= D[k][k];

                html += `<div class="step">Calculate U[${k}][${j}]:<br>`;
                html += displayMatrix(U, 'U');
                html += '</div>';
            }
        }

        // Final result
        html += '<div class="step"><h3>Final Result:</h3>';
        html += displayMatrix(L, 'L');
        html += displayMatrix(D, 'D');
        html += displayMatrix(U, 'U');
        html += '</div>';

        // Verify the factorization
        const product = multiplyMatrices(multiplyMatrices(L, D), U);
        html += '<div class="step"><h3>Verification (L×D×U):</h3>';
        html += displayMatrix(product, 'L×D×U');
        html += '</div>';

        resultDiv.innerHTML = html;
    } catch (error) {
        errorDiv.innerHTML = error.message;
    }
}

function multiplyMatrices(a, b) {
    const result = Array(a.length).fill().map(() => Array(b[0].length).fill(0));
    return a.map((row, i) => {
        return result[i].map((_, j) => {
            return a[i].reduce((sum, _, k) => sum + a[i][k] * b[k][j], 0);
        });
    });
}

// Initialize the matrix input when the page loads
window.onload = createMatrixInput;