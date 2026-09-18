function TaskItem({ id, titulo, concluida, onConcluir, onExcluir }) {
  return (
    <li className={`task-item ${concluida ? 'completed' : ''}`}>
      <div className="task-content">
        <span className="task-title">{titulo}</span>
        <span className="task-status">
          Status: <strong>{concluida ? 'Concluída' : 'Pendente'}</strong>
        </span>
      </div>

      <div className="task-actions">
        {!concluida && (
          <button
            type="button"
            className="btn btn-concluir"
            onClick={() => onConcluir(id)}
          >
            Concluir
          </button>
        )}

        <button
          type="button"
          className="btn btn-excluir"
          onClick={() => onExcluir(id)}
        >
          Excluir
        </button>
      </div>
    </li>
  );
}

export default TaskItem;