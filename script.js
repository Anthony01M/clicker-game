let score = 0;
let increment = 1;
let multiplier = 1;
let upgradeCost = 10;
let multiplierCost = 50;

document.getElementById('click-button').addEventListener('click', () => {
    score += increment * multiplier;
    document.getElementById('score').innerText = score;
});

document.getElementById('upgrade-button').addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        increment++;
        upgradeCost *= 5;
        document.getElementById('score').innerText = score;
        document.getElementById('upgrade-button').innerText = `Upgrade (Cost: ${upgradeCost})`;
    } else {
        alert('Not enough points for upgrade!');
    }
});

document.getElementById('multiplier-button').addEventListener('click', () => {
    if (score >= multiplierCost) {
        score -= multiplierCost;
        multiplier++;
        multiplierCost *= 5;
        document.getElementById('score').innerText = score;
        document.getElementById('multiplier-button').innerText = `Multiplier (Cost: ${multiplierCost})`;
    } else {
        alert('Not enough points for multiplier!');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});