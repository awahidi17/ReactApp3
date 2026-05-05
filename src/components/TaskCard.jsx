export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <article className={`task-card ${task.completed ? "completed" : ""}`}>
      <div className="task-main">
        <span className="task-badge">{task.completed ? "✓" : "○"}</span>

        <div>
          <h3>{task.title}</h3>
          <p>{task.description || "No description added."}</p>
          <small>Owner: Ahmad Wahidi</small>
        </div>
      </div>

      <div className="task-actions">
        <button className="secondary-button" onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button className="danger-button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}
