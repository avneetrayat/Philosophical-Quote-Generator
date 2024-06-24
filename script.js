const quotes = [
    {
        quote: "The unexamined life is not worth living.",
        author: "Socrates"
    },
    {
        quote: "To be is to do.",
        author: "Immanuel Kant"
    },
    {
        quote: "I think, therefore I am.",
        author: "René Descartes"
    },
    {
        quote: "The only thing I know is that I know nothing.",
        author: "Socrates"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle"
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates"
    },
    {
        quote: "Life must be understood backward. But it must be lived forward.",
        author: "Søren Kierkegaard"
    },
    {
        quote: "He who has a why to live can bear almost any how.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
        author: "Jean-Paul Sartre"
    },
    {
        quote: "The greatest wealth is to live content with little.",
        author: "Plato"
    },
    {
        quote: "He who knows others is wise; he who knows himself is enlightened.",
        author: "Lao Tzu"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    document.getElementById('quote').innerText = randomQuote.quote;
    document.getElementById('author').innerText = `- ${randomQuote.author}`;
}

// Generate an initial quote when the page loads
window.onload = generateQuote;

