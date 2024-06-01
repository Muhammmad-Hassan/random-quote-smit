import { useState } from "react";
import "./App.css";

function App() {
  const [quote, setquote] = useState(
    "The way to get started is to quit talking and begin doing. - Walt Disney");
  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you’ll always have more. - Oprah Winfrey",
    "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success. - James Cameron",
    "Life is what happens when you’re busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
    "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
  ];

  const genQute =()=>{
        var randomNum = Math.floor(Math.random() * quotes.length);
        console.log(randomNum)
        setquote(quotes[randomNum])
  }
  return (
    <div className="main">
      <div className="pro">
        <p>{quote}</p>
        <button onClick={genQute}>Gen</button>
      </div>
    </div>
  );
}

export default App;
