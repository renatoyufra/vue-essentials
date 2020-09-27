const vm = new Vue({
  el: "main",
  data: {
    mensaje: "Hola Mundo =)",
    nuevaTarea: null,
    tareas: [
      {
        titulo: "Aprender Vue.js",
        prioridad: true,
        antiguedad: 223,
      },
      {
        titulo: "Aprender ES6",
        prioridad: false,
        antiguedad: 135,
      },
      {
        titulo: "Publicar algo todos los días",
        prioridad: true,
        antiguedad: 378,
      },
    ],
  },
  computed: {
    mensajeAlReves: function () {
      return this.mensaje.split("").reverse().join("");
    },
    tareasConPrioridad: function () {
      return this.tareas.filter((tarea) => tarea.prioridad);
    },
    tareasPorAntiguedad: function () {
      return this.tareas.sort((a, b) => b.antiguedad > a.antiguedad);
    },
  },
});
