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
     // const coachId = rootGetters.userId;
      console.log(rootGetters);
     // const user=this.$store.getters.coaches?.filter(req => req.id === coachId);
      
     
     // return user.userName;
    }

    
  };