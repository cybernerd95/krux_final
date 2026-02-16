// Global styling
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = "#1f2d3d";
Chart.defaults.plugins.legend.position = "bottom";


// ==============================
// 1️⃣ Global Sports Market Growth
// ==============================
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


// ==============================
// 2️⃣ IPL Media Rights Comparison
// ==============================
new Chart(document.getElementById("iplChart"), {
    type: 'bar',
    data: {
        labels: ['2018–22 Cycle', '2023–27 Cycle'],
        datasets: [{
            label: 'IPL Media Rights (USD Billion)',
            data: [2.55, 6.2],
            backgroundColor: ['#203a43', '#2c5364']
        }]
    }
});


// ==============================
// 3️⃣ IPL Brand Value Growth
// ==============================
new Chart(document.getElementById("segmentPie"), {
    type: 'line',
    data: {
        labels: [
            '2016','2017','2018','2019','2020',
            '2021','2022','2023','2024 (Proj)','2025 (Proj)'
        ],
        datasets: [{
            label: 'IPL Brand Value (USD Billion)',
            data: [
                4.16,
                4.7,
                5.3,
                6.1,
                5.4,   // COVID dip
                7.0,
                8.4,
                10.7,
                12.0,
                13.5
            ],
            borderColor: '#1e3c72',
            backgroundColor: 'rgba(30,60,114,0.1)',
            fill: true,
            tension: 0.35
        }]
    }
});


// ==============================
// 4️⃣ IPL Advertising Revenue
// ==============================
new Chart(document.getElementById("sponsorLine"), {
    type: 'line',
    data: {
        labels: [
            '2016','2017','2018','2019','2020',
            '2021','2022','2023','2024','2025 (Est)'
        ],
        datasets: [{
            label: 'IPL Advertising Revenue (₹ Crore)',
            data: [
                1500,
                1800,
                2000,
                2400,
                2200,  // pandemic dip
                3000,
                3900,
                4500,
                5200,
                6500
            ],
            borderColor: '#4e73df',
            backgroundColor: 'rgba(78,115,223,0.15)',
            fill: true,
            tension: 0.35
        }]
    }
});


// ==============================
// 5️⃣ Fantasy Sports India Market
// ==============================
new Chart(document.getElementById("comparisonBar"), {
    type: 'line',
    data: {
        labels: ['2021','2022','2023','2024','2025 (Proj)'],
        datasets: [{
            label: 'Fantasy Sports India (₹ Crore)',
            data: [
                3400,
                4200,
                5300,
                6700,
                8200
            ],
            borderColor: '#2c5364',
            backgroundColor: 'rgba(44,83,100,0.15)',
            fill: true,
            tension: 0.35
        }]
    }
});


// ==============================
// 6️⃣ IPL Economic Contribution
// ==============================
new Chart(document.getElementById("donutChart"), {
    type: 'doughnut',
    data: {
        labels: [
            'Direct Impact',
            'Indirect & Induced Impact'
        ],
        datasets: [{
            data: [3.5, 3.2],  // total ≈ 6.7B
            backgroundColor: ['#203a43', '#2c5364']
        }]
    }
});


// ==============================
// 7️⃣ Employment Growth Index
// ==============================
new Chart(document.getElementById("jobsStacked"), {
    type: 'line',
    data: {
        labels: ['2019','2020','2021','2022','2023','2024','2025 (Proj)'],
        datasets: [{
            label: 'Employment Index (Base 2019 = 100)',
            data: [
                100,
                85,
                95,
                110,
                125,
                140,
                155
            ],
            borderColor: '#2c5364',
            backgroundColor: 'rgba(44,83,100,0.15)',
            fill: true,
            tension: 0.35
        }]
    }
});
