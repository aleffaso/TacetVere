data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};

const config = {
type: 'doughnut',
data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);