const inputField = document.querySelector('input.browse');

const blockedGames = [
    'https://archive.org/',
    'https://lolshot.io/',
    'https://slopegame.online/',
    'https://cookieclicker.com/'
    // More game URLs coming soon!
];

window.onload = () => {
    const randomIndex = Math.floor(Math.random * blockedGames.length);
    inputField.placeholder = blockedGames[randomIndex];
};

inputField.addEventListener('blur', () => {
    if (inputField.value === '') {
        const randomIndex = Math.floor(Math.random * blockedGames.length);
        inputField.placeholder = blockedGames[randomIndex];
    }
});