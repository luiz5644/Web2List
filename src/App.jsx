import { useState } from 'react';
import Header from './components/Header.jsx';
import TaskSummary from './components/TaskSummary.jsx';
import TaskList from './components/TaskList.jsx';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', concluida: false },
    { id: 2, titulo: 'Praticar useState e Props', concluida: false },
    { id: 3, titulo: 'Fazer atividade de desenvolvimento Web', concluida: false },
    { id: 4, titulo: 'Revisar conceitos de Previous State', concluida: false }
  ]);

  function handleConcluirTarefa(id) {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
      )
    );
  }

  function handleExcluirTarefa(id) {
    setTarefas((prevTarefas) =>
      prevTarefas.filter((tarefa) => tarefa.id !== id)
    );
  }

  const total = tarefas.length;
  const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length;
  const pendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;

  return (
    <div className="container">
      <Header />
      <TaskSummary
        tarefas={tarefas}
        total={total}
        concluidas={concluidas}
        pendentes={pendentes}
      />
      <TaskList
        tarefas={tarefas}
        onConcluir={handleConcluirTarefa}
        onExcluir={handleExcluirTarefa}
      />
    </div>
  );
}

export default App;