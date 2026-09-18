import TaskItem from './TaskItem.jsx';

function TaskList({ tarefas, onConcluir, onExcluir }) {
  return (
    <div className="task-list-section">
      <h3>Lista de Tarefas</h3>

      {tarefas.length === 0 ? (
        <p className="no-tasks-msg">Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul className="task-list">
          {tarefas.map((tarefa) => (
            <TaskItem
              key={tarefa.id}
              id={tarefa.id}
              titulo={tarefa.titulo}
              concluida={tarefa.concluida}
              onConcluir={onConcluir}
              onExcluir={onExcluir}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
