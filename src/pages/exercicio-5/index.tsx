import {useEffect, useState} from 'react';
import Link from 'next/link';

export default function Ex05() {
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data.map((user: {name: string}) => user.name)))
    }, []);

    return(
        <div className="p-8 flex flex-col gap-4">
            <h1>Exercicio 05</h1>
            <p>Aqui você vai fazer o Fetch de Usuários</p>
            <ul>

                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
            <Link href="/">Voltar</Link>
        </div>
    );
}






