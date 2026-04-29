<template>
  <div id="app">
    <h1>Task Manager</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add task" />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="removeTask(task.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tasks = ref([{ id: 1, title: 'Learn Vue' }]);
const newTask = ref('');

function addTask() {
  if (newTask.value) {
    tasks.value.push({ id: Date.now(), title: newTask.value });
    newTask.value = '';
  }
}

function removeTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id);
}
</script>
