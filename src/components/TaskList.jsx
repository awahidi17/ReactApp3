import TaskCard from "./TaskCard";

export default function TaskList({ tasks, isLoading, onToggle, onDelete }) {
  if (isLoading) {
    return <p className="empty-state">Loading tasks...</p>;
  }

  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet. Add your first task.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
