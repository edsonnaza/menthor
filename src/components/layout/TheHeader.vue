
<template>
  <header>
    <nav>
    
       <div class="logoDiv"> 
        <div class="logoText">
      <h1>
        <router-link to="/">MenThor</router-link>
      </h1> 
    </div>
      <img class="image" src="../../assets/thor.png" />
    </div>
      <ul>
        <li>
          <router-link to="/todo">To-Do</router-link>
        </li>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
          <span class="userName" v-if="userNameLogged && userNameLogged[0]">Welcome coach, {{userNameLogged[0]?.firstName + ' ' + userNameLogged[0]?.lastName   }}</span>  
          
        </li>
      </ul>
    </nav>
  </header>
</template>
 
<script setup>
import {useStore} from 'vuex';
import { computed } from 'vue';

const store = useStore();

const isLoggedIn= computed(function() {
      return store.getters.isAuthenticated;
    })

  const userNameLogged= computed(function(){
       
     return store.getters['coaches/getUserName'];
    })

 function logout(){ 
      store.dispatch('logout');
      store.$router.replace('/coaches');
    }
 
 
</script>
<style scoped>
header {
  width: 100%;
  height: 6rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin:0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
.image {
  display: inline-flex;
  
  width: 40px;
  height: 40px;
}

.logoDiv{
  display: flex;
  justify-content: space-between;
  padding: 2px;

}
.logoText {
  /* Opcional: Puedes ajustar el espacio entre el texto y la imagen */
  margin-right: -5px; /* Ajusta según tus necesidades */
}
.userName {
  display: inline-flex;
  color:aliceblue;
  margin-top:6px;
}
</style>