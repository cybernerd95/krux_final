Chart.defaults.font.family = "'Poppins', sans-serif";
Chart.defaults.color = "#1f2d3d";
Chart.defaults.plugins.legend.position = "bottom";
Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = false;

/* 1️⃣ Global Market */
new Chart(document.getElementById("globalChart"), {
    type: 'line',
    data: {
        labels: ['2022', '2023', '2024', '2025 (F)'],
        datasets: [{
            label: 'Global Sports Market (USD Billion)',
            data: [480, 515, 555, 600],
            borderColor: '#2c5364',
            backgroundColor: 'rgba(44,83,100,0.15)',
            fill: true,
            tension: 0.4
        }]
    }
});

/* 2️⃣ IPL Media Rights */
new Chart(document.getElementById("iplChart"), {
    type: 'bar',
    data: {
        labels: ['2018–22', '2023–27'],
        datasets: [{
            label: 'USD Billion',
            data: [2.55, 6.2],
            backgroundColor: ['#203a43', '#2c5364']
        }]
    }
});

/* 3️⃣ IPL Brand Value */
new Chart(document.getElementById("brandChart"), {
    type: 'line',
    data: {
        labels: ['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'],
        datasets: [{
            label: 'USD Billion',
            data: [4.16,4.7,5.3,6.1,5.4,7.0,8.4,10.7,12.0,13.5],
            borderColor: '#1e3c72',
            backgroundColor: 'rgba(30,60,114,0.1)',
            fill: true,
            tension: 0.35
        }]
    }
});

/* 4️⃣ Revenue */
new Chart(document.getElementById("revenueChart"), {
    type: 'line',
    data: {
        labels: ['Y1','Y2','Y3','Y4','Y5'],
        datasets: [{
            label: 'Revenue (₹ Cr)',
            data: [9.9,15.4,23.3,39.5,55.2],
            borderColor: '#2c5364',
            backgroundColor: 'rgba(44,83,100,0.15)',
            fill: true,
            tension: 0.4
        }]
    }
});

/* 5️⃣ EBITDA */
new Chart(document.getElementById("ebitdaChart"), {
    type: 'bar',
    data: {
        labels: ['Y1','Y3','Y5'],
        datasets: [{
            label: 'EBITDA (₹ Cr)',
            data: [-1.5,5.3,27.2],
            backgroundColor: ['#d9534f','#f0ad4e','#2c5364']
        }]
    }
});

/* 6️⃣ Employment */
new Chart(document.getElementById("jobsChart"), {
    type: 'line',
    data: {
        labels: ['2019','2020','2021','2022','2023','2024','2025'],
        datasets: [{
            label: 'Index (2019=100)',
            data: [100,85,95,110,125,140,155],
            borderColor: '#2c5364',
            backgroundColor: 'rgba(44,83,100,0.15)',
            fill: true,
            tension: 0.35
        }]
    }
});
