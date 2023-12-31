import { defineStore } from "pinia";
import type { Task } from '../types'

export const useAppStore = defineStore('app', () => {
  const taskList = ref<Task[]>([])

  const addTask = (task: Task) => {
    taskList.value.push(task)
  }

  const removeTask = (id: number) => {
    taskList.value = taskList.value.filter(task => task.id !== id)
  }

  const completeTask = (id: number) => {
    taskList.value = taskList.value.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
  }

  const fetchTasks = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    taskList.value = data as Task[];
  }

  return {
    taskList,
    addTask,
    completeTask,
    removeTask,
    fetchTasks
  }
});
