import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const tasksCollection = collection(db, "tasks");

// Gets all tasks from Firestore.
export async function getTasks() {
  const tasksQuery = query(tasksCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(tasksQuery);

  return snapshot.docs.map((taskDoc) => ({
    id: taskDoc.id,
    ...taskDoc.data(),
  }));
}

// Adds a new task to Firestore.
export async function createTask(taskData) {
  const newTask = {
    title: taskData.title,
    description: taskData.description,
    completed: false,
    owner: "Ahmad Wahidi",
    createdAt: serverTimestamp(),
  };

  const taskRef = await addDoc(tasksCollection, newTask);

  return {
    id: taskRef.id,
    ...newTask,
    createdAt: new Date(),
  };
}

// Updates the completed value.
export async function updateTaskStatus(id, completed) {
  const taskRef = doc(db, "tasks", id);
  await updateDoc(taskRef, { completed });
}

// Deletes a task from Firestore.
export async function deleteTask(id) {
  const taskRef = doc(db, "tasks", id);
  await deleteDoc(taskRef);
}
