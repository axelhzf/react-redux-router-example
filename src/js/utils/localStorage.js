import Immutable from "immutable";

export default {

  saveStateToLocalStorage(state) {
    if (state) {
      const user = state.user;
      if (user) {
        window.localStorage.setItem("user", JSON.stringify(user.toJS()));
      } else {
        window.localStorage.removeItem("user");
      }
    }
  },

  readStateFromLocalStorage() {
    const userJson = window.localStorage.getItem("user");
    if (!userJson) return {};
    try {
      const state = {user: Immutable.fromJS(JSON.parse(userJson))};
      return state;
    } catch (e) {
      console.error("Error reading state from local storage", e, userJson);
      return {};
    }
  }

}



