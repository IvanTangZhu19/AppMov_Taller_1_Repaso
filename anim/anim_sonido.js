document.addEventListener('DOMContentLoaded', () => {
    // Sonidos
    const sounds = {
        nube: new Audio('./sonidos/sonido-de-viento-159611.mp3'),
        bici: new Audio('./sonidos/bike-bell-40094.mp3'),
        arbol: new Audio('./sonidos/hit-tree-01-266310.mp3'),
        sol: new Audio('./sonidos/cardinal-37075.mp3')
    };

    sounds.nube.volume = 0.1;

    let collisionDetected = false;

    function animateNube() {
        sounds.nube.cloneNode(true).play();
        gsap.to("#nube", {
            x: "+=100", // Mover la nube 100 unidades a la derecha
            duration: 10,
            ease: "none",
            onComplete: animateNube // Llamar a la función nuevamente al completar
        });
    }

    // Configurar draggables
    Draggable.create("#bici", {
        type: "x",
        bounds: "#paisaje",
        onPress() {
            sounds.bici.cloneNode(true).play();
            animateNube();
            gsap.to("#sol", { x: 0, y: 100, duration: 10 });
        },
        onDrag() {
            // Detectar colisión con el árbol
            const bici = document.querySelector("#bici");
            const arbol = document.querySelector("#arbol");
            const biciRect = bici.getBoundingClientRect();
            const arbolRect = arbol.getBoundingClientRect();

            if (biciRect.right > arbolRect.left &&
                biciRect.left < arbolRect.right &&
                biciRect.bottom > arbolRect.top &&
                biciRect.top < arbolRect.bottom) {
                if (!collisionDetected) {
                    // Reproducir sonido del árbol
                    sounds.arbol.cloneNode(true).play();
                    collisionDetected = true;
                }
            } else {
                collisionDetected = false;
            }
        }
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
        type: "x",
        bounds: "#paisaje",
        onPress() { sounds.arbol.cloneNode(true).play(); }
    });
});