// Обработчик событий для кнопки "Show Chart"
document.getElementById("show-chart").addEventListener("click", function () {
    // Открыть модальное окно
    document.getElementById("chart-modal").style.display = "block";
    // Создать диаграмму
    createDiagram();
});

// Обработчик событий для кнопки "Show Chart"
document.getElementById("show-chart1").addEventListener("click", function () {
    // Открыть модальное окно
    document.getElementById("chart-modal").style.display = "block";
    // Создать диаграмму
    createHistogram();
});

// Обработчик событий для кнопки "Show Chart"
document.getElementById("show-chart2").addEventListener("click", function () {
    // Открыть модальное окно
    document.getElementById("chart-modal").style.display = "block";
    // Создать диаграмму
    createLineChart();
});

// Функция для создания круговой диаграммы
function createDiagram() {
    // Получить контекст для рисования на canvas
    let ctx = document.getElementById("myChart").getContext('2d');
    // Создать массивы для данных диаграммы
    let titles = [];
    let suma = [];

    // Заполнить массивы данными из массива cardsData
    loadedItems.forEach(function (item) {
        titles.push(item.title);
        suma.push(item.cost);
    });

    // Создать объект диаграммы
    let myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: titles,
            datasets: [{
                label: 'Price',
                data: suma,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Products price'
            }
        }
    });

    // Закрыть модальное окно при нажатии на кнопку "Close"
    document.getElementsByClassName("close")[0].addEventListener("click", function () {
        document.getElementById("chart-modal").style.display = "none";
        // Уничтожить объект диаграммы
        myChart.destroy();
    });
}


function createHistogram() {
    // Получить контекст для рисования на canvas
    let ctx = document.getElementById("myChart").getContext('2d');
    // Создать массивы для данных диаграммы
    let titles = [];
    let suma = [];

    // Заполнить массивы данными из массива cardsData
    loadedItems.forEach(function (item) {
        titles.push(item.title);
        suma.push(item.cost);
    });

    // Создать объект диаграммы
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: titles,
            datasets: [{
                label: 'Price',
                data: suma,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Products price'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // Закрыть модальное окно при нажатии на кнопку "Close"
    document.getElementsByClassName("close")[0].addEventListener("click", function () {
        document.getElementById("chart-modal").style.display = "none";
        // Уничтожить объект диаграммы
        myChart.destroy();
    });
}

function createLineChart() {
    // Получить контекст для рисования на canvas
    let ctx = document.getElementById("myChart").getContext('2d');
    // Создать массивы для данных графика
    let labels = [];
    let data = [];

    // Заполнить массивы данными из массива cardsData
    loadedItems.forEach(function (item) {
        labels.push(item.title);
        data.push(item.cost);
    });

    // Создать объект графика
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price',
                data: data,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Products price'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // Закрыть модальное окно при нажатии на кнопку "Close"
    document.getElementsByClassName("close")[0].addEventListener("click", function () {
        document.getElementById("chart-modal").style.display = "none";
        // Уничтожить объект графика
        myChart.destroy();
    });
}