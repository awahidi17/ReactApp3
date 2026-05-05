import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";
import heroArt from "./assets/hero-art.svg";
import "./styles.css";

export default function App() {
  const {
    tasks,
    isLoading,
    message,
    setMessage,
    addTask,
    completeTask,
    removeTask,
  } = useTasks();

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">MWD4C React Assignment 3</p>
          <h1>Ahmad Wahidi Task Logger</h1>
          <p className="hero-text">
            A Firebase task dashboard built with React, forms, Firestore data
            fetching, and task updates.
          </p>

          <div className="hero-pills">
            <span>React</span>
            <span>Firebase</span>
            <span>Firestore</span>
          </div>
        </div>

        <img
          className="hero-art"
          src={heroArt}
          alt="Abstract dashboard artwork"
        />
      </section>

      <section className="stats-grid">
        <div>
          <strong>{tasks.length}</strong>
          <span>Total Tasks</span>
        </div>
        <div>
          <strong>{completedCount}</strong>
          <span>Completed</span>
        </div>
        <div>
          <strong>{pendingCount}</strong>
          <span>Pending</span>
        </div>
      </section>

      <section className="content-grid">
        <div>
          <AddTaskForm onAddTask={addTask} setMessage={setMessage} />
          {message && <p className="message">{message}</p>}
        </div>

        <section className="task-list-card glass-card">
          <div className="section-header">
            <div>
              <p className="eyebrow dark">Live Firestore Data</p>
              <h2>Task List</h2>
            </div>
            <span>{tasks.length} tasks</span>
          </div>

          <TaskList
            tasks={tasks}
            isLoading={isLoading}
            onToggle={completeTask}
            onDelete={removeTask}
          />
        </section>
      </section>
    </main>
  );
}
