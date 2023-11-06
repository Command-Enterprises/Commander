const imageLink = document.querySelector('div.games div.wrapper a');
const image = imageLink.querySelector('img');
const imageLinks = ['../games/btd5.html', '../games/dinogame.html', '../games/geodash.html', '../games/houseofhazards.html', '../games/janissarybattles.html', '../games/janissarytower.html', '../games/minigiants.html', '../games/motox3m.html', '../games/passwordgame.html', '../games/retrobowl.html', '../games/slopegame.html'];
const imageSources = ['../assets/appicons/twoplayergames.svg', '../assets/appicons/btd5.svg', '../assets/appicons/trex.svg', '../assets/appicons/geodash.svg', '../assets/appicons/houseofhazards.svg', '../assets/appicons/janissarybattles.svg', '../assets/appicons/janissarytower.svg', '../assets/appicons/minigiants.svg', '../assets/appicons/motox3m.svg', '../assets/appicons/thepasswordgame.svg', '../assets/appicons/retrobowl.svg', '../assets/appicons/slopegame.svg'];
const imageClasses = ['twoplayergames', 'btd5', 'trex', 'geodash', 'houseofhazards', 'janissarybattles', 'janissarytower', 'minigiants', 'motox3m', 'thepasswordgame', 'retrobowl', 'slopegame'];
const imageTitles = ['Two Player Games', 'Bloons TD 5', 'Geometry Dash', 'House Of Hazards', 'Janissary Battles', 'Janissary Tower', 'Minigiants.io', 'Password Game', 'Retro Bowl', 'Slope Game'];
const imageAlts = ['Two Player Games', 'Bloons TD 5', 'Geometry Dash', 'House Of Hazards', 'Janissary Battles', 'Janissary Tower', 'Minigiants.io', 'Password Game', 'Retro Bowl', 'Slope Game'];
let currentIndex = 0;
const gamesPerPage = 3;

function changeAttributes() {
    if (currentIndex + gamesPerPage < imageSources.length) {
        currentIndex += gamesPerPage;
    } else {
        currentIndex = 0;
    }

    for (let i = 0; i < gamesPerPage; i++) {
        setTimeout(() => {
            imageLink.href = imageLinks[currentIndex + i];
            image.src = imageSources[currentIndex + i];
            image.title = imageTitles[currentIndex + i];
            image.className = imageClasses[currentIndex + i];
            image.alt = imageAlts[currentIndex + i];
        }, i * 500);
    }
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        changeAttributes();
    } else if (event.deltaY < 0) {
        if (currentIndex - gamesPerPage >= 0) {
            currentIndex -= gamesPerPage;
        } else {
            const remaining = imageSources.length % gamesPerPage;
            currentIndex = imageSources.length - remaining;
        }
        changeAttributes();
    }
});