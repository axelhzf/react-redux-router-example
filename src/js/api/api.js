class MockApi {

  constructor() {
    this.users = {
      user: {
        username: "user", roles: ["ROLE_USER"]
      },
      admin: {
        username: "admin", roles: ["ROLE_ADMIN"]
      }
    };
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { //simulate async task
        const user = this.users[username];
        if (user) {
          resolve(user)
        } else {
          reject("Invalid user");
        }
      }, 1000);
    })
  }
}

export default new MockApi();