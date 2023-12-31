const imageLink = document.querySelector('div.games div.wrapper a');
const image = imageLink.querySelector('img');
const imageLinks = ['../games/twoplayergames.html', '../games/btd5.html', '../games/dinogame.html', '../games/geodash.html', '../games/houseofhazards.html', '../games/janissarybattles.html', '../games/janissarytower.html', '../games/minigiants.html', '../games/motox3m.html', '../games/passwordgame.html', '../games/retrobowl.html', '../games/slopegame.html'];
const imageSources = ['../assets/appicons/twoplayergames.svg', '../assets/appicons/btd5.svg', '../assets/appicons/trex.svg', '../assets/appicons/geodash.svg', '../assets/appicons/houseofhazards.svg', '../assets/appicons/janissarybattles.svg', '../assets/appicons/janissarytower.svg', '../assets/appicons/minigiants.svg', '../assets/appicons/motox3m.svg', '../assets/appicons/thepasswordgame.svg', '../assets/appicons/retrobowl.svg', '../assets/appicons/slopegame.svg'];
const imageClasses = ['twoplayergames', 'btd5', 'trex', 'geodash', 'houseofhazards', 'janissarybattles', 'janissarytower', 'minigiants', 'motox3m', 'thepasswordgame', 'retrobowl', 'slopegame'];
const imageTitles = ['Two Player Games', 'Bloons TD 5', 'Geometry Dash', 'House Of Hazards', 'Janissary Battles', 'Janissary Tower', 'Minigiants.io', 'Password Game', 'Retro Bowl', 'Slope Game'];
const imageAlts = ['Two Player Games', 'Bloons TD 5', 'Geometry Dash', 'House Of Hazards', 'Janissary Battles', 'Janissary Tower', 'Minigiants.io', 'Password Game', 'Retro Bowl', 'Slope Game'];
let currentIndex = 0;

function changeAttributes()
{
    if (currentIndex < 0)
    {
        currentIndex = imageSources.length - 1;
    }
    else if (currentIndex >= imageSources.length)
    {
        currentIndex = 0;
    }
    image.style.opacity = 0;
    image.style.transition = '0.3s ease';
    setTimeout(() => {
        imageLink.href = imageLinks[currentIndex];
        image.src = imageSources[currentIndex];
        image.title = imageTitles[currentIndex];
        image.className = imageClasses[currentIndex];
        image.alt = imageAlts[currentIndex];
        image.style.opacity = 1;
    }, 500);
}

window.addEventListener('wheel', (event) => 
{
    if (event.deltaY > 0)
    {
        currentIndex++;
    }
    else if (event.deltaY < 0)
    {
        currentIndex--;
    }
    changeAttributes();
});