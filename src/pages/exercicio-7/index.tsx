import { useState } from "react";
import Link from "next/link";

export default function Ex07() {
  const [task, setTask] = useState("");
  const [list, setList] = useState<any[]>([]);

  function addTask() {
    if (task === "") return;

    setList([...list, task]);
    setTask("");
  }

  function removeTask(index: number) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1>Exercício 07</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Adicionar</button>

      {list.map((item, index) => (
        <div key={index} style={{ display: "flex", gap: "10px" }}>
          <p>{item}</p>
          <button onClick={() => removeTask(index)}>Remover</button>
        </div>
      ))}
      <Link href="/">Voltar</Link>
    </div>
  );
}
