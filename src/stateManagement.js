// stateManagement.js
import { ref } from 'vue'

export const boardName = ref("My Boards")
export const isEditingBoardName = ref(false)

export const handleBoardNameChange = (newValue) => {
  boardName.value = newValue
}

export const editBoardName = () => {
  isEditingBoardName.value = true
}

export const saveEditedBoardName = (event) => {
  if(event.key === 'Enter') {
    isEditingBoardName.value = false
    handleBoardNameChange(event.target.value)
  }
}