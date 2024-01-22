
async function generateJoke() {
    const jokeContainer = document.getElementById("joke-text");

    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();

        if (data.type === 'single') {
            jokeContainer.textContent = data.joke;
        } else if (data.type === 'twopart') {
            jokeContainer.innerHTML = `<strong>${data.setup}</strong><br>${data.delivery}`;
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeContainer.textContent = 'Failed to fetch joke. Please try again later.';
    }
}