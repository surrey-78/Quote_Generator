const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Velan"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Ramya"
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Surendhar"
  },
  {
    text: "If you're working on something exciting, it will keep you motivated.",
    author: "Sabitha"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Priya"
  },
  {
    text: "Your limitation—it’s only your imagination.",
    author: "Sathish"
  }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet-quote');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const { text, author } = getRandomQuote();

  // Fade out
  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;

  setTimeout(() => {
    quoteText.innerText = `"${text}"`;
    quoteAuthor.innerText = `- ${author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" — ${author}`)}`;
    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;
  }, 300);
}

newQuoteBtn.addEventListener('click', displayQuote);
