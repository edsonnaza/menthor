 import store from '../coaches/getters.js';
 console.log('store',()=> {return store.coaches});
 

export default {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
    didAutoLogout(state) {
      return state.didAutoLogout;
    },
    userName(state, _, _2, rootGetters){
      //const coachId = rootGetters.userId;
     const  coachData = rootGetters['coaches/getUserName'];
      
     
     const userNameLogged = coachData.map(coach => {
      const fullName = coach.firstName + ' ' + coach.lastName;
      return fullName.trim();
    });
    
     
      return userNameLogged;
    }

    
  };