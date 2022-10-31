// Standalone
var Gauge = window.Gauge;

var temperature_gauge = Gauge(
    document.getElementById("temperature_gauge"), {
        max: 50,
        dialStartAngle: 90,
        dialEndAngle: 0,
        value: 0.0,
        showValue: true,
        label: function (value) {
            return Math.round(value * 100) / 100;
        },
        color: function (value) {
            if (value < 5) {
                return "#4a5fff"; // green
            } else if (value < 10) {
                return "#4ac9ff"; // yellow
            } else if (value < 15) {
                return "#4affe7"; // orange
            } else if (value < 20) {
                return "#4affab"; // red
            } else if (value < 25) {
                return "#50ff4a"; // yellow
            } else if (value < 30) {
                return "#b4ff4a"; // yellow
            } else if (value < 35) {
                return "#fffa50"; // yellow
            } else if (value < 40) {
                return "#ffcf4a"; // yellow
            } else if (value < 45) {
                return "#ff4a4a"; // yellow
            } else {
                return "#ff4a4a";
            }
        }
    }
);


//Humidity
var rh_gauge = Gauge(
    document.getElementById("rh_gauge"), {
        max: 100,
        dialStartAngle: 90,
        dialEndAngle: 0,
        value: 0.0,
        showValue: true,
        label: function (value) {
            return Math.round(value * 100) / 100;
        },
        color: function (value) {
            if (value < 10) {
                return "#f54242"; // green
            } else if (value < 20) {
                return "#f59942"; // yellow
            } else if (value < 30) {
                return "#f5bc42"; // orange
            } else if (value < 40) {
                return "#f5bc42"; // red
            } else if (value < 50) {
                return "#aaf542"; // yellow
            } else if (value < 60) {
                return "#72f542"; // yellow
            } else if (value < 70) {
                return "#42f59e"; // yellow
            } else if (value < 80) {
                return "#42eff5"; // yellow
            } else if (value < 90) {
                return "#4275f5"; // yellow
            } else {
                return "#4254f5";
            }
        }
    }
);



//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[//CHARTS! 8[
//CHARTS! 8[


function chartMin_time(hours) {
    let now_time = new Date();
    let min_time = now_time.setHours(now_time.getHours() - hours);
    return min_time
}

function chartMax_time() { //IE: Right Now()
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

//Global dash chart options
DashChartScales = {
    x: {
        max: chartMax_time().valueOf(),
        bounds: 'ticks',
        type: 'time',

        ticks: {
            display: true,
            maxRotation: 0,
        },
        grid: {
            drawBorder: false,
            color: "RGB(42,42,42)",
        }
    },
    y0: {
        ticks: {
            callback: function (val, index) {
                return index % 2 === 0 ? this.getLabelForValue(val) : '';
            },
        },
        grid: {
            drawBorder: false,
            color: "RGB(42,42,42)",
        }
    },
    y1: { // the scales need to match! have to specify same min and max yo
        ticks: {
            display: false,
        },
        grid: {
            display: false,
        }
    },
}

// Temp_Dash_Chart 
const temp_dash_chart_ctx = document.getElementById('temp_dash_chart').getContext('2d');
const temp_dash_chart = new Chart(temp_dash_chart_ctx, {
    type: 'line',
    data: {
        datasets: [{
                label: "Temperature",
                yAxisID: 'y0',
                data: [],
                parsing: {
                    xAxisKey: 'time',
                    yAxisKey: 'temperature'
                },
                fill: false,
                pointRadius: 0,
                borderWidth: 2,
                borderColor: "#f53b3b",
            },
            {
                label: "Outside",
                yAxisID: 'y1',
                data: [],
                parsing: {
                    xAxisKey: 'time',
                    yAxisKey: 'temperature'
                },
                fill: false,
                //backgroundColor: 'rgba(27, 27, 27, 0.8)',
                pointRadius: 0,
                borderWidth: 2,
                borderColor: 'rgba(200, 200, 50, 0.5)',
            },
        ]
    },
    options: {
        responsive: true,
        animation: true,
        showLine: true,
        spanGaps: true,
        scales: DashChartScales,
        plugins: {
            crosshair: {
                line: {
                    color: 'RGB(102, 102, 102)', // crosshair line color
                    width: 1 // crosshair line width
                },
                sync: {
                    enabled: true, // enable trace line syncing with other charts
                    group: 1, // chart group
                    suppressTooltips: false
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                boxHeight: 1,
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxHeight: 1
                }
            },
        },
    }
});
// Temp_Dash_Chart 

// RH_Dash_Chart 
const rh_dash_chart_ctx = document.getElementById('rh_dash_chart').getContext('2d');
const rh_dash_chart = new Chart(rh_dash_chart_ctx, {
    type: 'line',
    data: {
        datasets: [{
                label: "Humidity",
                yAxisID: 'y0',
                data: [],
                parsing: {
                    xAxisKey: 'time',
                    yAxisKey: 'humidity'
                },
                fill: false,
                pointRadius: 0,
                borderWidth: 2,
                borderColor: "#0890ff",
            },
            {
                label: "Outside",
                yAxisID: 'y1',
                data: [],
                parsing: {
                    xAxisKey: 'time',
                    yAxisKey: 'himidity'
                },
                fill: false,
                //backgroundColor: 'rgba(27, 27, 27, 0.8)',
                pointRadius: 0,
                borderWidth: 2,
                borderColor: 'rgba(18, 255, 235, 0.5)',
            },
        ]
    },
    options: {
        responsive: true,
        animation: true,
        showLine: true,
        spanGaps: true,
        scales: DashChartScales,
        plugins: {
            crosshair: {
                line: {
                    color: 'RGB(102, 102, 102)', // crosshair line color
                    width: 1 // crosshair line width
                },
                sync: {
                    enabled: true, // enable trace line syncing with other charts
                    group: 1, // chart group
                    suppressTooltips: false
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                boxHeight: 1,
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxHeight: 1
                }
            },
        },
    }
});
// RH_Dash_Chart 

function MinMaxPopulate(JSONdata) {
    const min_c_html = document.getElementById('min_c');
    const max_c_html = document.getElementById('max_c');
    const max_rh_html = document.getElementById('max_rh');
    const min_rh_html = document.getElementById('min_rh');

    for (i in JSONdata) {
        for (sensor_model in JSONdata[i]) {
            console.log(sensor_model);
            console.log(JSONdata[i][sensor_model]);

            Sensor_JSONdata = JSONdata[i][sensor_model]

            if (sensor_model == 'firebeetle32_1') {
                var temperature_array = Sensor_JSONdata.map(function (item) {
                    return item.temperature;
                });
                var humidity_array = Sensor_JSONdata.map(function (item) {
                    return item.humidity;
                });

                var max_c = temperature_array.reduce(function (a, b) {
                    return Math.max(a, b);
                }, -Infinity);
                var min_c = temperature_array.reduce(function (a, b) {
                    return Math.min(a, b);
                }, Infinity);

                var max_rh = humidity_array.reduce(function (a, b) {
                    return Math.max(a, b);
                }, -Infinity);
                var min_rh = humidity_array.reduce(function (a, b) {
                    return Math.min(a, b);
                }, Infinity);

                min_c_html.innerHTML = min_c+' °c';
                max_c_html.innerHTML = max_c+' °c';
                min_rh_html.innerHTML = min_rh+' %';
                max_rh_html.innerHTML = max_rh+' %';
            }
        }
    }

    var field_array = Sensor_JSONdata.map(function (item) {
        return item[field];
    });

    var max_field = field_array.reduce(function (a, b) {
        return Math.max(a, b);
    }, -Infinity);

    var min_field = field_array.reduce(function (a, b) {
        return Math.min(a, b);
    }, Infinity);

    return min_field, max_field;
}

function addData(chart, JSONdata) {
    for (i in JSONdata[0]['firebeetle32_1']) {
        chart.data.datasets[0].data.push(JSONdata[0]['firebeetle32_1'][i]); //datasets[0] is inside and [1] is outside.
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

function updateGauges(JSONdata) {
    console.log("gauge updated")
    temperature_gauge.setValueAnimated(JSONdata[0]['firebeetle32_1'][0]['temperature']);
    rh_gauge.setValueAnimated(JSONdata[0]['firebeetle32_1'][0]['humidity']);
}


let last_timestamp; // keep tabs on what the last thing added to the charts were
sample_count = 0;

function populate_charts(tdelta) {
    url = "/logs/tent1/";
    period = tdelta;
    $.getJSON(url.concat(tdelta, '/'), function (JSONdata) {
        temp_dash_chart.options.scales.x.min = chartMin_time(tdelta).valueOf(); //make sure to keep the max time as current as possible
        rh_dash_chart.options.scales.x.min = chartMin_time(tdelta).valueOf(); //make sure to keep the max time as current as possible ^^ See above too
        // then add data to each chart
        addData(temp_dash_chart, JSONdata);
        addData(rh_dash_chart, JSONdata);
        MinMaxPopulate(JSONdata)
    }).done(function () {
        tdelta_slider_temperature.disabled = false;
        tdelta_slider_rh.disabled = false;
        //stuff maybe...? 
    });

}


function fetch_more_samples() {
    $.getJSON("/logs/tent1/0/", function (JSONdata) {
        if (sample_count > 142) {
            window.location.reload(); // Reload the whole shebang every x samples
        }
        if (JSONdata[0]['firebeetle32_1'][0]['time'] != last_timestamp) {
            console.log("sample accepted")
            updateGauges(JSONdata);
            addData(temp_dash_chart, JSONdata);
            last_timestamp = JSONdata[0]['time'];
            sample_count += 1;
            console.log(sample_count);
        } else {
            console.log("not a new sample, bud") //TODO: remove all data after 5 minutes and reload aggregated data from Steve
        }
    });

}

function initialise_gauges() {
    $.getJSON("/logs/tent1/0/", function (data) {
        console.log("init gauges");
        updateGauges(data);
    });

}

// Keep an eye on the time delta silder
const tdelta_slider_temperature = document.getElementById('tdelta_slider_temperature');
const slider_value_temperature = document.getElementById('slider_value_temperature');
slider_value_temperature.innerHTML = tdelta_slider_temperature.value;

const tdelta_slider_rh = document.getElementById('tdelta_slider_rh');
const slider_value_rh = document.getElementById('slider_value_rh');
slider_value_rh.innerHTML = tdelta_slider_rh.value;

//And listen out for any changes and apply those changes accross all charts.
tdelta_slider_temperature.addEventListener('input', function () {
    slider_value_temperature.innerHTML = tdelta_slider_temperature.value;
    slider_value_rh.innerHTML = tdelta_slider_temperature.value;
    tdelta_slider_rh.value = tdelta_slider_temperature.value;
}, false);
tdelta_slider_rh.addEventListener('input', function () {
    slider_value_temperature.innerHTML = tdelta_slider_rh.value;
    slider_value_rh.innerHTML = tdelta_slider_rh.value;
    tdelta_slider_temperature.value = tdelta_slider_rh.value;
}, false);

tdelta_slider_temperature.addEventListener('change', function () {
    tdelta_slider_temperature.disabled = true;
    tdelta_slider_rh.disabled = true;
    temp_dash_chart.data.datasets[0].data = [] //clear all the existing data
    rh_dash_chart.data.datasets[0].data = []
    populate_charts(tdelta_slider_temperature.value) // then repopulate the charts... fuck I hate this UX shit
}, false);

tdelta_slider_rh.addEventListener('change', function () {
    tdelta_slider_temperature.disabled = true;
    tdelta_slider_rh.disabled = true;
    temp_dash_chart.data.datasets[0].data = [] //clear all the existing data
    rh_dash_chart.data.datasets[0].data = []
    populate_charts(tdelta_slider_rh.value) // then repopulate the charts... fuck I hate this UX shit
}, false);

initialise_gauges()
populate_charts(12);
tdelta_slider_rh.value = 12;
tdelta_slider_temperature.value = 12;
//setInterval(fetch_more_samples, 4200);