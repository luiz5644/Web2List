function TaskSummary({ tarefas, total, concluidas, pendentes }) {
  const totalTarefas = tarefas ? tarefas.length : total;
  const totalConcluidas = tarefas ? tarefas.filter((t) => t.concluida).length : concluidas;
  const totalPendentes = tarefas ? tarefas.filter((t) => !t.concluida).length : pendentes;

  return (
    <div className="task-summary-card">
      <hr />
      <h3>Resumo</h3>
      <p>Total: {totalTarefas}</p>
      <p>Concluídas: {totalConcluidas}</p>
      <p>Pendentes: {totalPendentes}</p>
      <hr />

      <div className="feedback-message">
        {totalPendentes > 0 ? (
          <p className="msg-pendente">Você ainda possui tarefas pendentes.</p>
        ) : (
          <p className="msg-concluida">Parabéns! Todas as tarefas foram concluídas!</p>
        )}
      </div>
    </div>
  );
}

export default TaskSummary;