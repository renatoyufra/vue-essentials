const vm = new Vue({
  el: "main",
  data: {
    tareas: [
      { titulo: "Hacer la compra", completado: false },
      { titulo: "Aprender Vuejs", completado: false },
      { titulo: "Aprender Firebase", completado: false },
      { titulo: "Dominar ES6", completado: false },
      { titulo: "Salir a correr", completado: false },
    ],
  },
  methods: {
    completarTarea(tarea) {
      tarea.completado = !tarea.completado;
    },
  },
  computed: {
    tareasCompletadas: function () {
      return this.tareas.filter((tarea) => tarea.completado);
    },
  },
});
