const vm = new Vue({
  el: "main",
  data: {
    nuevaTarea: null,
    tareas: ["Aprender Vue.js", "Aprender ES6", "Publicar algo todos los días"],
  },
  methods: {
    agregarTarea() {
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea = null;
    },
  },
});

// Vanilla Javascript

// function agregarTarea() {
//   const input = document.querySelector("input[type=text]");
//   vm.tareas.unshift(input.value);
//   input.value = "";
// }
