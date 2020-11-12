const dashboard24HoursPerformanceChart = {
    data: (canvas) => {
        return {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "nov"
            ],
            datasets: [
                {
                    borderColor: "#7971EA",
                    backgroundColor: "#7971EA",
                    pointRadius: 4,
                    pointHoverRadius: 4,
                    borderWidth: 3,
                    data: [20000, 10000, 80000, 60000, 155000, 200000, 75000, 40000, 65000, 160000, 55000],
                },
            ],
        };
    },
    options: {
        legend: {
            display: false,
        },

        tooltips: {
            enabled: true,
        },

        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "#9f9f9f",
                        beginAtZero: false,
                        maxTicksLimit: 5,
                        //padding: 20
                    },
                    gridLines: {
                        drawBorder: false,
                        zeroLineColor: "#ccc",
                        color: "rgba(255,255,255,0.05)",
                    },
                },
            ],

            xAxes: [
                {
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: false,
                        color: "rgba(255,255,255,0.1)",
                        zeroLineColor: "transparent",
                        display: false,
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9f9f9f",
                    },
                },
            ],
        },
    },
};

module.exports = {
    dashboard24HoursPerformanceChart,
};
