import { useEffect, useState } from "react";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTaskStatus,
} from "../api/tasks";

// This hook keeps task data separate from the page design.
export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadTasks() {
    try {
      setIsLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch {
      setMessage("Could not load tasks. Check Firebase setup.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask(title, description) {
    try {
      const newTask = await createTask({ title, description });
      setTasks((currentTasks) => [newTask, ...currentTasks]);
      setMessage("Task added successfully.");
    } catch {
      setMessage("Could not add task.");
    }
  }

  async function completeTask(id) {
    const selectedTask = tasks.find((task) => task.id === id);

    if (!selectedTask) {
      return;
    }

    const newStatus = !selectedTask.completed;

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: newStatus } : task
      )
    );

    try {
      await updateTaskStatus(id, newStatus);
    } catch {
      setMessage("Could not update task.");
      loadTasks();
    }
  }

  async function removeTask(id) {
    try {
      await deleteTask(id);
      setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
      setMessage("Task deleted.");
    } catch {
      setMessage("Could not delete task.");
    }
  }

  return {
    tasks,
    isLoading,
    message,
    setMessage,
    addTask,
    completeTask,
    removeTask,
  };
}
