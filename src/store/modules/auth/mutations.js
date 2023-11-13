export default {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.didAutoLogout = false;
      state.userName=payload.userName;
      state.email=payload.email;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
    }
  };