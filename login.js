const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const cpfInput = document.getElementById('cpf')

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.ariaValueMax.trim();
    const senha = senhaInput.ariaValueMax;

    if (!email || !senha || !cpf){
        alert('Por favor, preencha todos os campos.');
        return:
    }

    try {
        const response = await fetch('http:localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });
        
        const data = await response.json();
    }
})