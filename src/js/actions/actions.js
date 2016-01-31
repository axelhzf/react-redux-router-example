export const LOGIN_PROCESSING = "LOGIN_PROCESSING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

function loginProcessing() {
  return {type: LOGIN_PROCESSING};
}

function loginSuccess(user) {
  return {type: LOGIN_SUCCESS, user};
}

function loginError(error) {
  return {type: LOGIN_ERROR, error};
}

var users = {
  user: {
    username: "user", roles: ["ROLE_USER"]
  },
  admin: {
    username: "admin", roles: ["ROLE_ADMIN"]
  }
};

function apiMockLogin(username, password) {
  return new Promise((resolve, reject) => {
    const user = users[username];
    if (user) {
      resolve(user)
    } else {
      reject("Invalid user");
    }
  })
}

export function login(username, password) {
  return async (dispatch) => {
    dispatch(loginProcessing());
    try {
      await wait(1000);
      const user = await apiMockLogin(username, password);
      dispatch(loginSuccess(user));
    } catch(e) {
      dispatch(loginError(e));
    }
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}