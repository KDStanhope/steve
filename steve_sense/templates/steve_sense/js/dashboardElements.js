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

var VPD_opts = {
    angle: 0,
    lineWidth: 0.15,
    radiusScale: 1,
    pointer: {
        length: 0.53,
        strokeWidth: 0.044,
        color: '#FFFFFF'
    },
    limitMax: false,
    limitMin: false,
    staticZones: [
        { strokeStyle: "#f53b3b", min: -1.5, max: -0.2 },
        { strokeStyle: "#f57f3b", min: -0.2, max: 0.4 },
        { strokeStyle: "#f5d03b", min: 0.5, max: 0.7 },
        { strokeStyle: "#e5f53b", min: 0.7, max: 0.9 },
        { strokeStyle: "#98f53b", min: 0.9, max: 1.1 }, // green
        { strokeStyle: "#c0f53b", min: 1.1, max: 1.3 },
        { strokeStyle: "#e5f53b", min: 1.3, max: 1.7 },
        { strokeStyle: "#f5d03b", min: 1.7, max: 1.8 },
        { strokeStyle: "#f57f3b", min: 1.8, max: 2.7 },
        { strokeStyle: "#f53b3b", min: 2.7, max: 15 }
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
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [],  // Print labels at these values
        color: "#ffffff",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },
};

var humidity_opts = {
    angle: 0,
    lineWidth: 0.15,
    radiusScale: 1,
    pointer: {
        length: 0.53,
        strokeWidth: 0.044,
        color: '#FFFFFF'
    },
    limitMax: false,
    limitMin: false,
    staticZones: [
        { strokeStyle: "#f53b3b", min: 0, max: 10 },
        { strokeStyle: "#f57f3b", min: 10, max: 20 },
        { strokeStyle: "#f5d03b", min: 20, max: 30 },
        { strokeStyle: "#e5f53b", min: 30, max: 40 }, // green
        { strokeStyle: "#c0f53b", min: 40, max: 50 },
        { strokeStyle: "#98f53b", min: 50, max: 60 },
        { strokeStyle: "#3bf54d", min: 60, max: 70 },
        { strokeStyle: "#3bf5aa", min: 70, max: 80 },
        { strokeStyle: "#3be5f5", min: 80, max: 90 },
        { strokeStyle: "#3b47f5", min: 90, max: 100 }
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

var lux_opts = {
    angle: 0,
    lineWidth: 0.15,
    radiusScale: 1,
    pointer: {
        length: 0.53,
        strokeWidth: 0.044,
        color: '#FFFFFF'
    },
    limitMax: false,
    limitMin: false,
    staticZones: [
        { strokeStyle: "#363627", min: 0, max: 10 },
        { strokeStyle: "#59592c", min: 10, max: 20 },
        { strokeStyle: "#797a33", min: 20, max: 30 },
        { strokeStyle: "#9c9e3c", min: 30, max: 40 }, // green
        { strokeStyle: "#c7c94f", min: 40, max: 50 },
        { strokeStyle: "#d9db6e", min: 50, max: 60 },
        { strokeStyle: "#f5f794", min: 60, max: 70 },
        { strokeStyle: "#fdffb5", min: 70, max: 80 },
        { strokeStyle: "#feffd4", min: 80, max: 90 },
        { strokeStyle: "#ffffff", min: 90, max: 100 }
    ],
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    renderTicks: {
        divisions: 10,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#000000',
    },
};

var co2_opts = {
    angle: 0,
    lineWidth: 0.15,
    radiusScale: 1,
    pointer: {
        length: 0.53,
        strokeWidth: 0.044,
        color: '#FFFFFF'
    },
    limitMax: false,
    limitMin: false,
    staticZones: [
        { strokeStyle: "#253436", min: 0, max: 10 },
        { strokeStyle: "#294447", min: 10, max: 20 },
        { strokeStyle: "#2a4f54", min: 20, max: 30 },
        { strokeStyle: "#2d6d75", min: 30, max: 40 }, // green
        { strokeStyle: "#2b7f8a", min: 40, max: 50 },
        { strokeStyle: "#2795a3", min: 50, max: 60 },
        { strokeStyle: "#23a9ba", min: 60, max: 70 },
        { strokeStyle: "#1bbacf", min: 70, max: 80 },
        { strokeStyle: "#0ecde6", min: 80, max: 90 },
        { strokeStyle: "#00e2ff", min: 90, max: 100 }
    ],
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    renderTicks: {
        divisions: 10,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#000000',
    },
};

var soil_opts = {
    angle: 0,
    lineWidth: 0.15,
    radiusScale: 1,
    pointer: {
        length: 0.53,
        strokeWidth: 0.044,
        color: '#FFFFFF'
    },
    limitMax: false,
    limitMin: false,
    staticZones: [
        { strokeStyle: "#2e1900", min: 0, max: 10 },
        { strokeStyle: "#4f2e06", min: 10, max: 20 },
        { strokeStyle: "#4f4206", min: 20, max: 30 },
        { strokeStyle: "#575c0a", min: 30, max: 40 }, // green
        { strokeStyle: "#508011", min: 40, max: 50 },
        { strokeStyle: "#2e8f15", min: 50, max: 60 },
        { strokeStyle: "#25994b", min: 60, max: 70 },
        { strokeStyle: "#25997c", min: 70, max: 80 },
        { strokeStyle: "#258b99", min: 80, max: 90 },
        { strokeStyle: "#383ee0", min: 90, max: 100 }
    ],
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    renderTicks: {
        divisions: 10,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#000000',
    },
};

var biomass_opts = {
    angle: 0,
    lineWidth: 0.15,
    radiusScale: 1,
    pointer: {
        length: 0.53,
        strokeWidth: 0.044,
        color: '#FFFFFF'
    },
    limitMax: false,
    limitMin: false,
    staticZones: [
        { strokeStyle: "#ecffe6", min: 0, max: 10 },
        { strokeStyle: "#cce6c3", min: 10, max: 20 },
        { strokeStyle: "#add1a1", min: 20, max: 30 },
        { strokeStyle: "#94bf86", min: 30, max: 40 }, // green
        { strokeStyle: "#75a665", min: 40, max: 50 },
        { strokeStyle: "#5a9447", min: 50, max: 60 },
        { strokeStyle: "#50913a", min: 60, max: 70 },
        { strokeStyle: "#51ad32", min: 70, max: 80 },
        { strokeStyle: "#44bf1b", min: 80, max: 90 },
        { strokeStyle: "#39e300", min: 90, max: 100 }
    ],
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    renderTicks: {
        divisions: 10,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#000000',
    },
};

// initial values
var temperature = 0;
var humidity = 0;
var lux = 0;
var co2 = 0;
var soil = 0;
var biomass = 0;
var t_differential = 2; // temperature difference betweeen the air and the leaves (leaves usually like..2° cooler due to transpiration.)
initialise_gauges();

//TEMPERATURE
var target = document.getElementById('temperature'); // your canvas element
var temperature_gauge = new Gauge(target).setOptions(temperature_opts); // create sexy gauge!
temperature_gauge.maxValue = 50; // set max gauge value
temperature_gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
temperature_gauge.animationSpeed = 128; // set animation speed (32 is default value)
temperature_gauge.set(temperature); // set initial value

//Humidity
var target = document.getElementById('humidity'); // your canvas element
var humidity_gauge = new Gauge(target).setOptions(humidity_opts); // create sexy gauge!
humidity_gauge.maxValue = 100; // set max gauge value
humidity_gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
humidity_gauge.animationSpeed = 128; // set animation speed (32 is default value)
humidity_gauge.set(humidity); // set initial value

//VPD
var target = document.getElementById('VPD'); // your canvas element
var VPD_gauge = new Gauge(target).setOptions(VPD_opts); // create sexy gauge!
VPD_gauge.maxValue = 10; // set max gauge value
VPD_gauge.setMinValue(-1);  // Prefer setter over gauge.minValue = 0
VPD_gauge.animationSpeed = 128; // set animation speed (32 is default value)
VPD_gauge.set(humidity); // set initial value

//LUX
var target = document.getElementById('lux'); // your canvas element
var lux_gauge = new Gauge(target).setOptions(lux_opts); // create sexy gauge!
lux_gauge.maxValue = 100; // set max gauge value
lux_gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
lux_gauge.animationSpeed = 128; // set animation speed (32 is default value)
lux_gauge.set(humidity); // set initial value

//CO2
var target = document.getElementById('co2'); // your canvas element
var co2_gauge = new Gauge(target).setOptions(co2_opts); // create sexy gauge!
co2_gauge.maxValue = 100; // set max gauge value
co2_gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
co2_gauge.animationSpeed = 128; // set animation speed (32 is default value)
co2_gauge.set(humidity); // set initial value

//SOIL
var target = document.getElementById('soil'); // your canvas element
var soil_gauge = new Gauge(target).setOptions(soil_opts); // create sexy gauge!
soil_gauge.maxValue = 100; // set max gauge value
soil_gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
soil_gauge.animationSpeed = 128; // set animation speed (32 is default value)
soil_gauge.set(humidity); // set initial value

//BIOMASS
var target = document.getElementById('biomass'); // your canvas element
var biomass_gauge = new Gauge(target).setOptions(biomass_opts); // create sexy gauge!
biomass_gauge.maxValue = 100; // set max gauge value
biomass_gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
biomass_gauge.animationSpeed = 128; // set animation speed (32 is default value)
biomass_gauge.set(humidity); // set initial value


VPD_gauge.set(leafVPD_calc(temperature, humidity)); // set initial value

function leafVPD_calc(temperature, humidity) {
    let AirSatVP_exponent = (7.5 * temperature) / (237.3 + temperature);
    let LeafSatVP_exponent = (7.5 * (temperature - t_differential)) / (237.3 + (temperature - t_differential));
    let AirSatVP = (610 * (Math.pow(10, AirSatVP_exponent))) / 1000;
    let LeafSatVP = (610 * (Math.pow(10, LeafSatVP_exponent))) / 1000;
    let LeafVPD = (LeafSatVP - (AirSatVP * humidity / 100));
    return LeafVPD;
}

function updateGauges(data) {
    temperature_gauge.animationSpeed = 128;
    temperature_gauge.set(data[0]['temperature']);
    $("#temperature_element").text(data[0]['temperature'] + " c°");

    humidity_gauge.animationSpeed = 128;
    humidity_gauge.set(data[0]['humidity']);
    $("#humidity_element").text(data[0]['humidity'] + " %");

    VPD_gauge.animationSpeed = 128;
    VPD_gauge.set(data[0]['vpd']);
    $("#vpd_element").text(data[0]['vpd'] + " kPa");

    lux_gauge.animationSpeed = 128;
    max_lux = 120000;
    let lux_as_percent = (data[0]['lux'] / max_lux) * 100;
    lux_gauge.set(lux_as_percent);
    $("#lux_element").text(data[0]['lux'] + " Lux");

    co2_gauge.animationSpeed = 128;
    max_co2 = 2500;
    //let co2_as_percent = (data[0]['co2']/max_co2)*100;
    //co2_gauge.set(co2_as_percent);
    //$("#lux_element").text(data[0]['co2'] + " co2");

    soil_gauge.animationSpeed = 128;
    //let co2_as_percent = (data[0]['co2']/max_co2)*100;
    //co2_gauge.set(co2_as_percent);
    //$("#lux_element").text(data[0]['co2'] + " co2");

    biomass_gauge.animationSpeed = 128;
    //let co2_as_percent = (data[0]['co2']/max_co2)*100;
    //co2_gauge.set(co2_as_percent);
    //$("#lux_element").text(data[0]['co2'] + " co2");
}

//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//C//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[HARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[
//CHARTS! 8[//CHAR//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[TS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[


function chartMin(hours) {
    let now_time = new Date();
    let min_time = now_time.setHours(now_time.getHours() - hours);
    return min_time
}

function chartMax_time() {
    let now_time = new Date();
    max_time = now_time.setHours(now_time.getHours());
    return max_time
}

let width, height, gradient;
function getGradient_Temps(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, "#3b47f5");
        gradient.addColorStop(0.2, "#3be5f5");
        gradient.addColorStop(0.3, "#3bf5aa");
        gradient.addColorStop(0.4, "#98f53b");
        gradient.addColorStop(0.5, "#c0f53b");
        gradient.addColorStop(0.6, "#e5f53b");
        gradient.addColorStop(0.7, "#f5d03b");
        gradient.addColorStop(0.8, "#f53b3b");
        gradient.addColorStop(0.9, "#f53b3b");
        gradient.addColorStop(1, "#f53b3b");
    }

    return gradient;
}

function getGradient_vpd(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, "#f53b3b");
        gradient.addColorStop(0.2, "#f53b3b");
        gradient.addColorStop(0.3, "#f53b3b");
        gradient.addColorStop(0.4, "#f5d03b");
        gradient.addColorStop(0.5, "#e5f53b"); //green
        gradient.addColorStop(0.6, "#c0f53b");
        gradient.addColorStop(0.7, "#98f53b");
        gradient.addColorStop(0.8, "#c0f53b");
        gradient.addColorStop(0.9, "#f5d03b");
        gradient.addColorStop(1, "#f57f3b");
    }
    return gradient;
}

function getGradient_Lux(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (gradient === null || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, "RGB(166, 141, 66, 0.5)");
        gradient.addColorStop(0.4, "RGB(245, 245, 71,0.8)");
        gradient.addColorStop(1, "white");
    }

    return gradient;
}



// ENVIRO chart 
const enviro_chart_ctx = document.getElementById('enviro_chart').getContext('2d');
const enviro_chart = new Chart(enviro_chart_ctx, {
    type: 'line',
    data: {
        datasets: [
            {
                label: "Temperature",
                yAxisID: 'y',
                data: [],
                parsing: {
                    xAxisKey: 'time',
                    yAxisKey: 'temperature'
                },
                fill: false,
                //backgroundColor: 'rgba(27, 27, 27, 0.8)',
                pointRadius: 0,
                borderWidth: 2,
                borderColor: "#f53b3b",
            },
            {
                label: "Humidity",
                yAxisID: 'y1',
                data: [],
                parsing: {
                    xAxisKey: 'time',
                    yAxisKey: 'humidity'
                },
                fill: false,
                //backgroundColor: 'rgba(27, 27, 27, 0.8)',
                pointRadius: 0,
                borderWidth: 2,
                borderColor: "#3b47f5",
            },
            {
                label: "Lux",
                yAxisID: 'y2',
                data: [],
                parsing: {
                    xAxisKey: 'time',
                    yAxisKey: 'lux'
                },

                fill: true,
                backgroundColor: function (context) {
                    let chart = context.chart;
                    let { ctx, chartArea } = chart;

                    if (!chartArea) {
                        // This case happens on initial chart load
                        return null;
                    }
                    return getGradient_Lux(ctx, chartArea);
                },
                pointRadius: 0,
                borderWidth: 2,
                borderColor: function (context) {
                    let chart = context.chart;
                    let { ctx, chartArea } = chart;

                    if (!chartArea) {
                        // This case happens on initial chart load
                        return null;
                    }
                    return getGradient_Lux(ctx, chartArea);
                },

            },
        ]
    },
    options: {
        responsive: true,
        animation: false,
        showLine: true,
        spanGaps: true,
        scales: {
            x: {
                max: chartMax_time().valueOf(),
                min: chartMin(24).valueOf(),
                bounds: 'ticks',
                type: 'time',

                ticks: {
                    color: "#ffffff"
                },
                grid: {
                    drawBorder: true,
                    color: "#666666"
                }
            },
            y: {
                suggestedMin: 10,
                suggestedMax: 35,
                ticks: {
                    color: "#ffffff"
                },
                grid: {
                    drawBorder: false,
                    color: "RGB(102, 102, 102,0)"
                }
            },
            y1: {
                position: 'right',
                suggestedMin: 30,
                suggestedMax: 100,
                ticks: {
                    color: "#ffffff"
                },
                grid: {
                    drawBorder: false,
                    color: "RGB(102, 102, 102,0)"
                }
            },
            y2: {
                display: false,
                position: 'right',
                ticks: {
                    color: "#ffffff"
                },
                grid: {
                    drawBorder: false,
                    color: "RGB(102, 102, 102,0)"
                }
            },
        },
        plugins: {
            crosshair: {
                line: {
                    color: 'RGB(102, 102, 102)',  // crosshair line color
                    width: 1        // crosshair line width
                },
                sync: {
                    enabled: true,            // enable trace line syncing with other charts
                    group: 1,                 // chart group
                    suppressTooltips: false
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                boxHeight: 0,
            },
            legend: {
                title: {
                    display: true,
                    color: '#FFFFFF',
                    text: "Last 24 Hours",
                    font: {
                        size: 24,
                    }
                },
                labels: {
                    boxHeight: 0,
                    color: '#FFFFFF',
                    font: {
                        size: 18
                    },
                },
            },
        },
    }
});
// ENVIRO chart 



// VPD chart 
const vpd_ctx = document.getElementById('vpd_chart').getContext('2d');
const vpd_chart = new Chart(vpd_ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: "Vapour Pressure Deficit",
            data: [],
            parsing: {
                xAxisKey: 'time',
                yAxisKey: 'vpd'
            },
            fill: true,
            backgroundColor: 'rgba(27, 27, 27, 0.8)',
            pointRadius: 0,
            borderWidth: 2,
            borderColor: function (context) {
                let chart = context.chart;
                let { ctx, chartArea } = chart;

                if (!chartArea) {
                    // This case happens on initial chart load
                    return null;
                }
                return getGradient_vpd(ctx, chartArea);
            },
        }]
    },
    options: {

        responsive: true,
        animation: false,
        showLine: true,
        spanGaps: true,
        scales: {
            x: {
                max: chartMax_time().valueOf(),
                min: chartMin(24).valueOf(),
                bounds: 'ticks',
                type: 'time',
                time: {
                    unit: 'hour',
                },
                ticks: {
                    color: "#ffffff"
                },

                grid: {
                    drawBorder: true,
                    color: "#666666"
                }
            },
            y: {
                suggestedMin: 0,
                suggestedMax: 1,
                ticks: {
                    color: "#ffffff"
                },
                grid: {
                    drawBorder: false,
                    color: "RGB(102, 102, 102, 0)"
                }
            },
        },
        plugins: {
            crosshair: {
                line: {
                    color: 'RGB(102, 102, 102)',  // crosshair line color
                    width: 1        // crosshair line width
                },
                sync: {
                    enabled: true,            // enable trace line syncing with other charts
                    group: 1,                 // chart group
                    suppressTooltips: false
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                boxHeight: 0,
            },
            legend: {
                labels: {
                    boxHeight: 0,
                    color: '#FFFFFF',
                    font: {
                        size: 14
                    },
                },
            },
        },
    }
});
// VPD Chart


function addData(chart, data) {
    for (x in data) {
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data[x]);
        });
    }
    chart.options.scales.x.max = chartMax_time().valueOf(); //make sure to keep the max time as current as possible
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

$.getJSON("http://10.0.0.8/last_24_hours", function (data) {
    addData(enviro_chart, data);
    addData(vpd_chart, data);
}).done(function () {
    //stuff maybe...? 
});

let last_timestamp; // keep tabs on what the last thing added to the charts were
function fetch_more_samples() {
    $.getJSON("http://10.0.0.8/latest", function (data) {
        if (data[0]['time'] != last_timestamp) {
            console.log("sample accepted")
            updateGauges(data);
            addData(enviro_chart, data);
            addData(vpd_chart, data);
            last_timestamp = data[0]['time'];
        }
        else {
            console.log("not a new sample, bud") //TODO: remove all data after 5 minutes and reload aggregated data from Steve
        }
    });

}
function initialise_gauges() {
    $.getJSON("http://10.0.0.8/latest", function (data) {
        console.log("init gauges");
        updateGauges(data);
    });

}

setInterval(fetch_more_samples, 2000);

