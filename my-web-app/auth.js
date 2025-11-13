// Simple authentication simulation
function login(username, password) {
  if (username === "admin" && password === "1234") {
    return " successful to login!";
  } else {
    return "Invalid credentials!";
  }
}

console.log(login("admin", "1234"));
