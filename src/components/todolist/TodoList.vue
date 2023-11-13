<script setup>
import { useTodoListStore } from '../../store/modules/todo/todoList';
import { storeToRefs } from "pinia";
import { watchEffect } from 'vue';
 

const store = useTodoListStore();
const { todoList } = storeToRefs(store);

const { toggleCompleted, deleteTodo, loadTasks} = store;
 

watchEffect(() => {
  loadTasks();
});
 
 //console.log(loadTasks());
 

</script>

<template>
   
 <div class="table-container">
    <table v-if="todoList" >
        <thead>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
        </thead>

        <tr v-for="todo in todoList" :key='todo.id' >
            <td style="width:90%" :class="{completed:todo.completed}" @click.stop="toggleCompleted(todo.id)" class="span">{{ todo.tasks }}</td>
            <td style="text-align:center; width:15% " class="span" :class="{completed:todo.completed}" @click.stop="toggleCompleted(todo.id)"> &#10004;</td>
            <td style="text-align:center; width:15%"  @click="deleteTodo(todo.id)" class="span"> &#10060;</td>
        </tr>
    </table>
   </div>
 
</template>
 
 
<style>
 .table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    }
.span {
    margin: 0 10px;
    cursor: pointer;
  }
  .item {
    display: flex;
 
  }
  .table {
    display: flex;
    font-size: 1.5em;
    
    width: 36vw;
    padding: 5px;
    border-radius: 5px;
  
  
  }
  table {
   width: 650px;
   text-align: left;
   border-collapse: collapse;
   margin: 0 0 1em 0;
   caption-side: top;
   align-items: center;
}
caption, td, th {
   padding: 0.3em;
}
th, td {
   border-bottom: 1px solid #000;
   border-right: 1px solid #000;
   border-top: 1px solid black;
   border-left: 1px solid black;
}
th.last, td.last {
   border-right: 0;
}
tfoot th, tfoot td {
   border-bottom: 2px;
   text-align: center;
}
th {
   width: 33%;
   text-align: center;
}

  .completed {
    text-decoration: line-through;
  }
</style>