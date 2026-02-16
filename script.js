// 1️⃣ Global Sports Market Growth
new Chart(document.getElementById("globalChart"), {
    type: 'line',
    data: {
        labels: ['2024', '2025', '2026 (Proj)'],
        datasets: [{
            label: 'USD Billion',
            data: [515.47, 495.38, 521.74], // updated market forecasts
            borderColor: '#2c5364',
            backgroundColor: 'rgba(44,83,100,0.15)',
            fill: true,
            tension: 0.4
        }]
    }
});

// 2️⃣ IPL Media Rights (leave unchanged if needed)
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

// 3️⃣ India Fantasy Sports Market
new Chart(document.getElementById("segmentPie"), {
    type: 'pie',
    data: {
        labels: ['2024 Fantasy (USD B)', '2025 (USD B)', '2026 (Proj USD B)'],
        datasets: [{
            data: [0.79, 1.82, 2.25],
            backgroundColor: ['#0f2027','#203a43','#2c5364']
        }]
    }
});

// 4️⃣ Sponsorship / Marketing Trend
new Chart(document.getElementById("sponsorLine"), {
    type: 'line',
    data: {
        labels: ['2024', '2025', '2026 (Proj)'],
        datasets: [{
            label: 'Global Sponsorship Est. (USD Billion)',
            data: [90, 95, 102], // representative trend (not exact published)
            borderColor: '#1e3c72',
            backgroundColor: 'rgba(30,60,114,0.1)',
            fill: true
        }]
    }
});

// 5️⃣ India Esports Market
new Chart(document.getElementById("comparisonBar"), {
    type: 'bar',
    data: {
        labels: ['2024', '2025', '2026 (Proj)'],
        datasets: [
            {
                label: 'Esports India (USD Million)',
                data: [200.7, 203.6, 250], // market forecast
                backgroundColor: '#2c5364'
            }
        ]
    }
});

// 6️⃣ Fantasy Sports Global (Donut)
new Chart(document.getElementById("donutChart"), {
    type: 'doughnut',
    data: {
        labels: ['Global Fantasy Sports 2026 (USD Billion)'],
        datasets: [{
            data: [33], // 2026 world estimate
            backgroundColor: ['#2c5364']
        }]
    }
});

// 7️⃣ Employment Growth Projection (Trend Data)
new Chart(document.getElementById("jobsStacked"), {
    type: 'bar',
    data: {
        labels: ['2024', '2025', '2026 (Proj)'],
        datasets: [
            {
                label: 'Seasonal Jobs (Thousands)',
                data: [20, 25, 30],
                backgroundColor: '#203a43'
            }
        ]
    }
});
