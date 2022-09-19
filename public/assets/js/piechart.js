data = {
    datasets: [{
        data: [sum_co2/1000, sum_ch4,  sum_n2o,  sum_biogenic_co2],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 205, 255)'],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'CO2 Fóssil (t)',
        'CH4 (t)',
        'N2O (t)',
        'CO2 biogênico (t)'
    ]
};

const config = {
type: 'doughnut',
data: data,
};

const myChart = new Chart(
    document.getElementById('emissionOne'),
    config
);

data_two = {
    datasets: [{
        data: [sum_co2_two/1000, sum_ch4_two,  sum_n2o_two,  sum_biogenic_co2_two],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 205, 255)'],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'CO2 Fóssil (t)',
        'CH4 (t)',
        'N2O (t)',
        'CO2 biogênico (t)'
    ]
};

const config_two = {
type: 'doughnut',
data: data_two,
};

const myChart_two = new Chart(
    document.getElementById('emissionTwo'),
    config_two
);