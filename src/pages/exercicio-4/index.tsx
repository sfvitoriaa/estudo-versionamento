import {useState} from 'react';
import Link from 'next/link';

export default function Ex04() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleCadastro () {
        if (email === '' || senha === '') {
            alert('Preencha todos os campos');
            return;
        } 
    
        if (!email.includes('@') || !email.includes('.')) {
            alert('Email inválido');
            return;
        }
        if (senha.length < 6) {
            alert('Senha muito curta');
            return;
        }
        alert('Cadastro feito!');

    }
    
        return(
        <div className="p-8 flex flex-col gap-4">
            <h1>Exercicio 04</h1>
            <p>Aqui você vai fazer o Formulário de Cadastro</p>

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

            <button onClick={handleCadastro}>
            Cadastrar
            </button>

            <Link href="/">Voltar</Link>
            
        </div>
    );
}




        


