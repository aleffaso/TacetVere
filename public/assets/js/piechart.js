data = {
    datasets: [{
        data: [co2_chart, ch4_chart, n2o_chart, biogenic_chart],
        backgroundColor: [ 'rgb(24, 71, 102)',
                          'rgb(255, 0, 255)',
                          'rgb(255, 0, 0)',
                          'rgb(0, 255, 255)'
                        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['CO2 (%)', 'CH4 (%)', 'N2O (%)', 'CO2 Biogênico (%)']
};

const config = {
type: 'doughnut',
data: data,
};

const myChart = new Chart(
    document.getElementById('emissionOne'),
    config
);