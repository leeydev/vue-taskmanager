<template>
  <div>
    <h1>Task Manager</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add task" />
    <button @click="addTask">Add</button>
    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id" :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
        {{ task.title }}
        <button @click="taskStore.toggleTask(task.id)">Toggle</button>
        <button @click="removeTask(task.id)">Remove</button>
      </li>
    </ul>
    <p>Completed: {{ taskStore.completedTasks.length }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();
const newTask = ref('');

function addTask() {
  if (newTask.value) {
    taskStore.addTask(newTask.value);
    newTask.value = '';
  }
}

function removeTask(id) {
  taskStore.tasks = taskStore.tasks.filter(t => t.id !== id);
}
</script>
