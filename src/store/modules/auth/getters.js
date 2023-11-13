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
      const coachId = rootGetters.userId;
      
      const user=state.coaches?.filter(req => req.id === coachId);
      
     
      return user.userName;
    }

    
  };