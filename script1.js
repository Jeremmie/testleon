document.addEventListener("DOMContentLoaded", function () {
    const temperatureCounter = document.getElementById("temperature-counter");

    let currentTemperature = -9; // Température de départ

    setInterval(function () {
        if (currentTemperature <= 50) {
            updateBackground(currentTemperature);
            updateTemperatureDisplay(currentTemperature);
            currentTemperature++;
        }
    }, 100); // Change la température toutes les 100 millisecondes (ajustez selon vos besoins)

    function updateBackground(temp) {
        const backgroundColor = getBackgroundColor(temp);
        document.body.style.backgroundColor = backgroundColor;
    }

    function updateTemperatureDisplay(temp) {
        temperatureCounter.textContent = temp + "°C";
    }

    function getBackgroundColor(temp) {
        // Définir les couleurs RVB en fonction de la température
        const colors = [
            "rgb(0,255,255)", "rgb(0,255,245)", "rgb(0,255,235)", "rgb(0,255,225)",
            "rgb(0,255,215)", "rgb(0,255,205)", "rgb(0,255,195)", "rgb(0,255,185)",
            "rgb(0,255,175)", "rgb(0,255,165)", "rgb(0,255,155)", "rgb(0,255,145)",
            "rgb(0,255,135)", "rgb(0,255,125)", "rgb(0,255,115)", "rgb(0,255,105)",
            "rgb(0,255,95)", "rgb(0,255,85)", "rgb(0,255,75)", "rgb(0,255,65)",
            "rgb(0,255,55)", "rgb(0,255,45)", "rgb(0,255,35)", "rgb(0,245,25)",
            "rgb(15,235,15)", "rgb(25,225,0)", "rgb(35,215,0)", "rgb(45,205,0)",
            "rgb(55,195,0)", "rgb(65,185,0)", "rgb(75,175,0)", "rgb(85,165,0)",
            "rgb(95,155,0)", "rgb(105,145,0)", "rgb(115,135,0)", "rgb(125,125,0)",
            "rgb(135,115,0)", "rgb(145,105,0)", "rgb(155,95,0)", "rgb(165,85,0)",
            "rgb(175,75,0)", "rgb(185,65,0)", "rgb(195,55,0)", "rgb(205,45,0)",
            "rgb(215,35,0)", "rgb(225,25,0)", "rgb(235,15,0)", "rgb(245,5,0)",
            "rgb(255,0,0)", "rgb(255,0,0)"
        ];

        // Convertir la température en indice pour sélectionner la couleur
        const minTemp = -34;
        const maxTemp = 50;
        const index = Math.floor((temp - minTemp) / (maxTemp - minTemp) * (colors.length - 1));

        return colors[index];
    }
});
