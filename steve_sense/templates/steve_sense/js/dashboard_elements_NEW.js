var temperature_opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.15, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.53, // // Relative to gauge radius
        strokeWidth: 0.044, // The thickness
        color: '#FFFFFF' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    staticZones: [
        { strokeStyle: "#3b47f5", min: 0, max: 5 },
        { strokeStyle: "#3b47f5", min: 5, max: 10 },
        { strokeStyle: "#3be5f5", min: 10, max: 15 },
        { strokeStyle: "#3bf5aa", min: 15, max: 20 }, // green
        { strokeStyle: "#98f53b", min: 20, max: 25 },
        { strokeStyle: "#c0f53b", min: 25, max: 30 },
        { strokeStyle: "#e5f53b", min: 30, max: 35 },
        { strokeStyle: "#f5d03b", min: 35, max: 40 },
        { strokeStyle: "#f53b3b", min: 40, max: 45 },
        { strokeStyle: "#f53b3b", min: 45, max: 50 }
    ],

    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    renderTicks: {
        divisions: 10,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#000000',
    },
};

//TEMPERATURE
var target = document.getElementById('temperature'); // your canvas element
var temperature_gauge = new Gauge(target).setOptions(temperature_opts); // create sexy gauge!
temperature_gauge.maxValue = 50; // set max gauge value
temperature_gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
temperature_gauge.animationSpeed = 128; // set animation speed (32 is default value)
temperature_gauge.set(temperature); // set initial value