document.addEventListener('DOMContentLoaded', () => {
    // Check if the Telegram WebApp object is available
    if (window.Telegram && window.Telegram.WebApp) {
        console.log('Telegram WebApp', window.Telegram.WebApp);
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    } else {
        console.error('Telegram WebApp is not available');
    }

    const container = document.getElementById('coin-container');
    let coinCount = 0;
    const maxCoins = 15; // Maximum number of coins before they stop falling

    container.addEventListener('click', () => {
        if (coinCount < maxCoins) {
            createCoin();
            coinCount++;
        }
    });

    function createCoin() {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.style.left = `${Math.random() * 90}vw`;

        // Apply a random rotation to the coin
        const rotationAngle = Math.random() * 360; // Random angle between 0 and 360 degrees
        coin.style.transform = `rotate(${rotationAngle}deg)`;

        container.appendChild(coin);

        // Remove the coin after it has fallen and reduce the count
        coin.addEventListener('animationend', () => {
            container.removeChild(coin);
            coinCount--;
        });
    }
});
