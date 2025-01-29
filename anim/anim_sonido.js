document.addEventListener('DOMContentLoaded', () => {
  // Sonidos
  const sounds = {
      nube: new Audio('./bang-smoke-cloud-1-184061.mp3'),
      bici: new Audio('./bike-bell-40094.mp3'),
      arbol: new Audio('./hit-tree-01-266310.mp3'),
      sol: new Audio('./surface-of-the-sun-30475.mp3')
  };

  // Configurar draggables
  Draggable.create("#bici", {
      type: "x,y",
      bounds: "#paisaje",
      onPress() { sounds.bici.cloneNode(true).play(); }
  });

  Draggable.create("#sol", {
      type: "rotation",
      inertia: true,
      onPress() { sounds.sol.cloneNode(true).play(); }
  });

  Draggable.create("#nube", {
      type: "x,y",
      bounds: "#paisaje",
      onPress() { sounds.nube.cloneNode(true).play(); }
  });

  Draggable.create("#arbol", {
      type: "x,y",
      bounds: "#paisaje",
      onPress() { sounds.arbol.cloneNode(true).play(); }
  });
});