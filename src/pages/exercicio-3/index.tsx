import { useState } from 'react';

export default function Ex03() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin () {
        if (email === '' || senha === '') {
            alert('Preencha todos os campos');
        } else {
            alert('Login feito!');
        }
    }
     return(
        <div className="p-8 flex flex-col gap-4">
            <h1>Exercicio 03</h1>
            <p>Aqui você vai fazer o Formulário de Login</p>

            <input
            type= 'text'
            placeholder= 'Email'
            value= {email}
            onChange= {(e) => setEmail(e.target.value)}
            />

            <input
            type= 'password'
            placeholder= 'Senha'
            value= {senha}
            onChange= {(e) => setSenha(e.target.value)}
            />

            <button onClick={handleLogin}>
            Entrar
            </button>
        </div>
    );
}



