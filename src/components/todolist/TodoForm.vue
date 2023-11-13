<script setup>
import {ref } from 'vue';
import { useTodoListStore } from '../../store/modules/todo/todoList';

const store = useTodoListStore();

const todo= ref('Doing');

function addItemAndClear (item){
  
 if(item.length ===0){
    return
 }

 store.addTodo(item);
 todo.value='';
}
</script>
 
<template>
 
    <form class="form-control" @submit.prevent="addItemAndClear(todo)">
     <div>
         <input class="input" type="text" v-model="todo" />
     </div>
        
    <div>
        <button class="button">Add</button>
    </div>
    
  </form>
 
  
</template>

 

<style   scoped>

 

.form-control {
   display: flex;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
  }
  
  
  
  
  .input {
    display: block;
   width:450px;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  padding-left: 10px;
  }
  
.button {
  margin-left: 30px;
  background-color: #2f6089;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
  width: 100px;
}
 
</style>