import { defineStore } from 'pinia';
import store from '../../index.js';


function  getToken() {
    
     return store.getters.token;
   }

   console.log(store.getters);

function getIdCoach(){
    return store.getters.userId;
}

 

 

export const useTodoListStore = defineStore('todoList',{
    state:()=>({
        todoList:[],
        id:0
    }),
    actions: {
      async  addTodo(item){
      // console.log(token);
        const token = getToken();
        const  idCoach=getIdCoach();
        console.log(idCoach);
           // this.todoList.push({item,id:this.id++,completed:false})
           // console.log(this.todoList);
            
            const response = await fetch(
                `${process.env.VUE_APP_FIREBASE_DATABASE_URL}/todolist/${idCoach}.json?auth=` + token,
                {
                  method: 'POST',
                  body: JSON.stringify(item)
                }
              );
              if (!response.ok) {
                // Manejar errores aquí, si es necesario
                const responseData = await response.json();
                console.error('Was not able to register the task:', responseData.error);
                // Puedes lanzar un error o manejarlo de otra manera
                throw new Error('Error to add the new task.');
              }

              await this.loadTasks();

        },

        async loadTasks(){

            const token = getToken();
            const  idCoach=getIdCoach();

            if(token){
                const response = await fetch(
                    `${process.env.VUE_APP_FIREBASE_DATABASE_URL}/todolist/${idCoach}.json?auth=` +
                      token
                  );
                  const responseData = await response.json();
              
                  if (!response.ok) {
                    const error = new Error(
                      responseData.message || 'Failed to fetch tasks.'
                    );
                    throw error;
                  }
                  
                    // clean the state
                      this.todoList = [];
              
                  for (const key in responseData) {
                    const tasks = {
                      id: key,
                    
                      tasks: responseData[key]
                     
                    };
                   this.todoList.push(tasks);
                  }
            }

            
        },

       async deleteTodo(itemId){
        console.log(itemId);
        const token = getToken();
        const  idCoach=getIdCoach();

        const response = await fetch(
                `${process.env.VUE_APP_FIREBASE_DATABASE_URL}/todolist/${idCoach}/${itemId}.json?auth=` +
                  token,
                  {
                    method:'DELETE',
                     
                  }
              );
            
                const responseData = await response.json();
          
              if (!response.ok) {
                const error = new Error(
                  responseData.message || 'Failed to delete the task.'
                );
                throw error;
              }
             this.todoList=this.todoList.filter((object)=>{
                return object.id!==itemId;
             })

              // clean the state
              this.todoList = [];
             await this.loadTasks();
        },

        toggleCompleted(idToFind) {
            const todo = this.todoList.find((obj) => obj.id === idToFind);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },
    },
    getters:{
        doneTodos: (state)=>state.todoList.filter(todo=>todo.done)
    }
})