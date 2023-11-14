export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },

  getUserName(state, getters, _2, rootGetters) {
    const coaches = getters.coaches;
   
    const userId = rootGetters.userId;
   
    const userName=coaches?.filter(coach => coach.id === userId);
   if(userName) 
    state.userNamelogged=userName;
    return  userName;
    
  },
};