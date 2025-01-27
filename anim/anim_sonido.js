gsap.registerPlugin(Draggable, InertiaPlugin);

//Permite arrastrar la bicicleta en x
Draggable.create("#bici", {
  type: "x",
  bounds: "#paisaje",
});

//Permite rotar el sol
Draggable.create("#sol", {
  type: "rotation",
  inertia: true
});

//Permite arrastrar la nube
Draggable.create("#nube", {
  type: "x",
  bounds: "#paisaje",
});
