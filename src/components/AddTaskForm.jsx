import { useState } from "react";

export default function AddTaskForm({ onAddTask, setMessage }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!title.trim()) {
      setMessage("Please enter a task title.");
      return;
    }

    await onAddTask(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <form className="task-form glass-card" onSubmit={handleSubmit}>
      <span className="form-icon">✦</span>
      <h2>Add New Task</h2>

      <label htmlFor="title">Task title</label>
      <input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Example: Finish screenshots"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Write a short note about this task"
        rows="5"
      />

      <button type="submit">Add Task</button>
    </form>
  );
}
