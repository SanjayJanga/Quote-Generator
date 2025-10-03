let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    person: "Walt Disney"
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    person: "Will Rogers"
  },
  {
    quote: "It’s not whether you get knocked down, it’s whether you get up.",
    person: "Vince Lombardi"
  },
  {
    quote: "If you are working on something exciting, it will keep you motivated.",
    person: "Steve Jobs"
  },
  {
    quote: "Success is not in what you have, but who you are.",
    person: "Bo Bennett"
  },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    person: "C.S. Lewis"
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    person: "John D. Rockefeller"
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    person: "Thomas Jefferson"
  },
  {
    quote: "Opportunities don’t happen, you create them.",
    person: "Chris Grosser"
  },
  {
    quote: "Fall seven times and stand up eight.",
    person: "Japanese Proverb"
  },
  {
    quote: "Do something today that your future self will thank you for.",
    person: "Sean Patrick Flanery"
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    person: "Franklin D. Roosevelt"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    person: "Albert Einstein"
  },
  {
    quote: "Don’t count the days, make the days count.",
    person: "Muhammad Ali"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    person: "Wayne Gretzky"
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    person: "William James"
  },
  {
    quote: "Success is how high you bounce when you hit bottom.",
    person: "George S. Patton"
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    person: "Dalai Lama"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    person: "Lao Tzu"
  },
  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    person: "Zig Ziglar"
  },
  {
    quote: "Believe you can and you’re halfway there.",
    person: "Theodore Roosevelt"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    person: "Steve Jobs"
  },
  {
    quote: "Dream big and dare to fail.",
    person: "Norman Vaughan"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    person: "Dalai Lama"
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    person: "Sam Levenson"
  },
  {
    quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    person: "Oprah Winfrey"
  },
  {
    quote: "Our lives begin to end the day we become silent about things that matter.",
    person: "Martin Luther King, Jr."
  },
  {
    quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    person: "Dalai Lama"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein"
  }
];

btn.addEventListener('click',function(){
    let rand=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[rand].quote;
    person.innerText=quotes[rand].person;
});