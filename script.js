<<<<<<< HEAD
const dateElement = document.querySelector('[data-js="date"]');
const date = new Date().toLocaleDateString("en-US");
dateElement.textContent = date;
=======
document.querySelector('[data-js="year"]').textContent =
  new Date().getFullYear();
>>>>>>> main
