import {useState} from 'react';

export default function Ex07() {
    const [taxt, setTaxt] = useState('');
    const [list, setList] = useState<string[]>([]);

    function addTask () {
        if (task === '') return;


