data = {
    datasets: [{
        data: [scope_one, scope_two],
        backgroundColor: [ 'rgb(24, 71, 102)',
                          'rgb(255, 205, 255)']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ['Escopo 1 (%)',
            'Escopo 2 (%)']
};

const config = {
type: 'doughnut',
data: data,
};

const myChart = new Chart(
    document.getElementById('emissionOne'),
    config
);