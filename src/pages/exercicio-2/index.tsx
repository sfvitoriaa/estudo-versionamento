import { useState } from 'react';

export default function Ex02() {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState<number[]>([]);

    function aumentar () {
        const novo = count + 1;
        setCount(novo);
        setHistory([...history, novo]);
    }

    function diminuir () {
        const novo = count - 1;
        setCount(novo);
        setHistory([...history, novo]);
    }

    return(
        <div className="p-8 flex flex-col gap-4">
            <h1>Exercicio 02</h1>
            <p>Aqui você vai fazer o Counter com Histórico</p>

            <p> Contador: {count} </p>

            <div style= {{display: 'flex', gap: '8px'}}>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </div>
        </div>
    );
}





