//Permite arrastrar la bicicleta

gsap.registerPlugin(Draggable, InertiaPlugin);

Draggable.create("#bici", {
  type: "x",
  bounds: "#paisaje"
});
