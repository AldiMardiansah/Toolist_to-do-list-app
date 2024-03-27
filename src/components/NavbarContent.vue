<!-- <template>
  <div class="navbar-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#" @click="editBoardName" style="margin-left: -70px !important;">
          <span v-if="!isEditingBoardName">{{ boardName }}</span>
          <input 
            type="text" 
            v-else 
            :value="boardName" 
            @keyup.enter="saveEditedBoardName"
            :class="{ 'editing': isEditingBoardName }"
            class="not-editing"
          >
        </a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0 ml-auto" style="margin-left: 285px !important;">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
          </form>
          <button class="btn btn-primary my-2 my-sm-0 ml-lg-2" type="button" style="margin-left: 86px !important;">Share</button>
        </div>
      </div>
    </nav>
  </div>
</template> -->

<template>
  <div class="navbar-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#" @click="editBoardName">
          <span v-if="!isEditingBoardName">{{ boardName }}</span>
          <input 
            type="text" 
            v-else 
            :value="boardName" 
            @keyup.enter="saveEditedBoardName"
            :class="{ 'editing': isEditingBoardName }"
            class="not-editing"
          >
        </a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0 ml-auto" >
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style="margin-left: 10px;">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style="margin-left: 10px; margin-right: 100px;">Submit</button>
          </form>
          <button class="btn btn-primary my-2 my-sm-0 ml-lg-2" type="button" style="margin-left: 100px; margin-right: 135px;">Share</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { boardName, isEditingBoardName, editBoardName, saveEditedBoardName } from '../stateManagement'
</script>

<style scoped>
.navbar-container {
  position: fixed;
  top: 61px;
  width: 100%;
}

.navbar-brand {
  margin-right: 201px;
}

.navbar-nav {
  width: 100%;
  justify-content: flex-end;
}

.navbar-nav .nav-item {
  margin-left: 1rem;
}

@media (max-width: 992px) {
  .navbar-nav .nav-item {
    margin-left: 0;
    margin-right: 1rem;
  }
}

input.editing {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  width: 100%;

  &:focus {
    outline: none;
    background-color: #e6e6e6;
  }
}

input.not-editing {
  margin-right: 70px !important;
  border: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
  width: 100%;
  text-decoration: none;

  &:focus {
    border-bottom: 1px solid #007bff;
    outline: none;
  }
}

.navbar-toggler {
  border: none;
  background-color: transparent;
  outline: none;
}
</style>
