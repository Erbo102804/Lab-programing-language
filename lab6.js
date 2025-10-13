const users = [
  { login: "admin", password: "1234", name: "Администратор" },
  { login: "yerbol", password: "qwerty", name: "Ербол" },
  { login: "zakir", password: "abcd", name: "Закир" },
  { login: "aliya", password: "pass1", name: "Алия" },
  { login: "guest", password: "guest", name: "Гость" }
];


document.getElementById("loginBtn").addEventListener("click", function() {
  const loginInput = document.getElementById("login").value.trim();
  const passwordInput = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  
  const foundUser = users.find(
    user => user.login === loginInput && user.password === passwordInput
  );

  if (foundUser) {
    message.style.color = "green";
    message.textContent = `Добро пожаловать, ${foundUser.name}!`;
  } else {
    message.style.color = "red";
    message.textContent = "Ошибка: неверный логин или пароль.";
  }
});
