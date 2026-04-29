import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([
    { id: 1, title: 'Learn Vue 3', completed: false },
    { id: 2, title: 'Build app', completed: true }
  ]);
  
  const completedTasks = computed(() => tasks.value.filter(t => t.completed));
  
  function addTask(title) {
    tasks.value.push({ id: Date.now(), title, completed: false });
  }
  
  function toggleTask(id) {
    const task = tasks.value.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }
  
  return { tasks, completedTasks, addTask, toggleTask };
});
