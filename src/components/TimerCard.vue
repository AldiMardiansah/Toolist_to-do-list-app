<template>
    <div v-if="showTimerCard" class="timer-card">
      <h3>Set Timer</h3>
      <input type="number" v-model="timerMinutes" min="0" placeholder="Minutes">
      <button @click="startTimer">Start Timer</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showTimerCard: false,
        timerMinutes: 0
      };
    },
    methods: {
      startTimer() {
        // Logic untuk memulai timer
        console.log("Timer started for", this.timerMinutes, "minutes.");
      }
    }
  };
  </script>
  
  <style scoped>
  .timer-card {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>  