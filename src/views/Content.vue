<template>
  <div>
    <NavbarContent />
  </div>
  <div class="bg">
    <div class="main-content">
      <main class="home-page">
        <div class="container mt-5">
          <div class="task-list" v-if="!showTasks" align="center">
            <button @click="showTasks = true">
              <h4>Add Task +</h4>
            </button>
          </div>
          <div v-else>
            <div class="board-container">
              <div v-if="showTasks" class="task-list" :key="'To Do'">
                <h3>To Do</h3>
                <div v-if="lists['To Do'].length > 0">
                  <div class="task-item" v-for="task in lists['To Do']" :key="task.id">
                    <div @click="toggleTaskBoard(task.id)">
                      <span contenteditable="true" @blur="saveTaskEdit(task, $event, 'title')" draggable="false">{{ task.title }}</span>
                      <div class="task-actions">
                        <span class="delete-btn" @click="deleteTask('To Do', task.id)">Delete</span>
                        <span class="material-icons-outlined check-icon" @click="showTimerCard = !showTimerCard">timer</span>
                        
                        <span class="material-icons-outlined check-icon" @click="toggleTaskDone(task)">check_circle</span>
                      </div>
                    </div>
                    <div v-if="task.id === clickedTaskId">
                      <div class="task-board">
                        <textarea
                          v-model="task.description"
                          @blur="saveTaskEdit(task, 'description')"
                          draggable="false"
                          @focus="clearPlaceholder(task)"
                          class="fixed-size-textarea"
                          placeholder="Add a description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  No tasks in this list
                </div>
                <div>
                  <input v-model="newTaskText['To Do']" @keyup.enter="addTask('To Do')" placeholder="Add a new task" class="form-control">
                </div>
              </div>
              <div v-if="lists['Done'].length > 0" class="task-list" :key="'Done'">
                <h3>Done</h3>
                <div class="task-item" v-for="task in lists['Done']" :key="task.id">
                  <div @click="toggleTaskBoard(task.id)">
                    <span>{{ task.title }}</span>
                  </div>
                  <div v-if="task.id === clickedTaskId" placeholder="Add a description">
                    <div class="task-board" >
                      <p>{{ task.description }}</p>
                    </div>
                  </div>
                  <div class="task-actions2">
                    <span class="material-icons-outlined check-icon" @click="toggleTaskDone(task)">cancel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// Import the NavbarContent component
import NavbarContent from '../components/NavbarContent.vue';
import TimerCard from '../components/TimerCard.vue'; 

export default {
  components: {
    NavbarContent, 
    TimerCard 
  },
  data() {
    return {
      lists: {
        "To Do": [],
        "Done": [],
      },
      newTaskText: {
        "To Do": "",
      },
      showTasks: false,
      clickedTaskId: null, // Menyimpan ID dari task yang di-klik
      showTimerCard: false
    };
  },
  methods: {
    addTask(listTitle) {
      if (this.newTaskText[listTitle].trim() !== "") {
        this.lists[listTitle].push({
          id: Date.now(),
          title: this.newTaskText[listTitle].trim(),
          description: "",
        });
        this.newTaskText[listTitle] = "";
      }
    },
    deleteTask(listTitle, taskId) {
      this.lists[listTitle] = this.lists[listTitle].filter(task => task.id !== taskId);
    },
    toggleTaskDone(task) {
      const index = this.lists["To Do"].findIndex(item => item.id === task.id);
      if (index !== -1) {
        this.lists["Done"].push(this.lists["To Do"][index]);
        this.lists["To Do"].splice(index, 1);
      } else {
        const index = this.lists["Done"].findIndex(item => item.id === task.id);
        this.lists["To Do"].push(this.lists["Done"][index]);
        this.lists["Done"].splice(index, 1);
      }
    },
    saveTaskEdit(task, field) {
      if (field === 'description') {
        task.description = task.description.trim();
      }
    },
    toggleTaskBoard(taskId) {
      // Jika task di-klik, ubah nilai clickedTaskId
      this.clickedTaskId = this.clickedTaskId === taskId ? null : taskId;
    },
  },
};
</script>

<style scoped>
/* Your scoped styles */
body {
font-family: 'Arial', sans-serif;
background-color: #f5f5f5;
padding: 20px;
}

.bg {
background-image: url('../assets/bg3.jpeg'); 
background-size: cover; 
background-position: center; 
background-repeat: no-repeat; 
width: 100%;
height: auto;
}

.main-content {
  margin-top: 50px; 
}


.board-container {
display: flex;
gap: 20px;
justify-content: flex-start;
align-items: flex-start;
overflow-x: auto;
max-width: calc(100vw - 40px); 
}

.task-list {
flex: 0 0 auto;
width: 300px;
margin: 0 20px;
padding: 10px;
background-color: #f8f9fa;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
min-width: 300px; 
}

.task-item {
margin-bottom: 20px;
padding: 10px;
background-color: #fff;
border: 1px solid #dfe1e5;
border-radius: 5px;
transition: background-color 0.3s ease;
cursor: pointer;
position: relative; 
}

.fixed-size-textarea {
  width: 100%; 
  height: 100px; 
  resize: none; 
}

.task-item:hover {
background-color: #f0f0f0;
}

.task-item > div {
margin-bottom: 15px;
}

.task-item > div span,
.task-item > div p {
  word-wrap: break-word;
  text-decoration: none !important; 
  border-bottom: none !important; 
}



.task-actions {
display: flex;
position: absolute; 
bottom: -4px; 
left: 3px; 
}

.task-actions > * {
  margin-right: 15px;
}

.task-actions2 {
display: flex;
position: absolute;
bottom: auto; 
left: 260px;
}

.delete-btn {
cursor: pointer;
margin-left: 5px; 
color: #007bff;
transition: color 0.3s ease;
}

.delete-btn:hover {
text-decoration: underline;
color: #0056b3; 
}

.material-icons-outlined {
  font-family: 'Material Symbols Outlined';
}

.check-icon {
  cursor: pointer;
  color: #007bff;
  transition: color 0.3s ease; 
}

.check-icon:hover {
  color: #0056b3; 
}

.check-icon.disabled {
  color: #ccc; 
  cursor: not-allowed; 
}

.task-list input[type="checkbox"] {
display: none; 
}

.task-board {
background-color: #fff;
border: 1px solid #dfe1e5;
border-radius: 5px;
padding: 10px;
margin-top: 5px;
}

.task-board textarea {
  border: 1px solid #dfe1e5; 
  border-radius: 5px; 
  padding: 8px;
  width: calc(100% - 16px); 
  resize: none; 
}

.task-board textarea:focus {
  outline: none;
  border-color: #007bff;
}
</style>
