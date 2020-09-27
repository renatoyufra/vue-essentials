const vm = new Vue({
  el: "main",
  data: {
    laborales: ["Lunes", "Martes", "Miécoles", "Jueves", "Viernes"],
    tareas: [
      { nombre: "Hacer la compra", prioridad: "baja" },
      { nombre: "Aprender Vue y firebase", prioridad: "alta" },
      { nombre: "Ir al gimnasio", prioridad: "alta" },
    ],
    persona: {
      nombre: "Renato",
      profesion: "dev",
      ciudad: "Valencia",
    },
  },
});
