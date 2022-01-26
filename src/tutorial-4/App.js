import React from "react";
import Phrase from "./components/Phrase";
import EmptyBlock from "./components/EmptyBlock";
import adjectivesArr from "./data/DataAdjectivesArr.js";
import nounsArr from "./data/DataNounsArr.js";

export default function App() {
  const [phrases, setPhrase] = React.useState([]);
  const generateRandomWord = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  function renderPhrases() {
    let firstAdjective = generateRandomWord(adjectivesArr);
    let secondAdjective = generateRandomWord(adjectivesArr);
    let randomNouns = generateRandomWord(nounsArr);
    const randomPhrase = `${firstAdjective} ${secondAdjective} ${randomNouns}`;
    setPhrase([randomPhrase, ...phrases]);
  }
  function clearPhrases() {
    setPhrase([]);
  }

  return (
    <div id="app">
      <div className="wrapper">
        <div className="list">
          {phrases.length > 0 ? (
            phrases.map((value, index, arr) => (
              <Phrase key={index} text={phrases[index]} />
            ))
          ) : (
            <EmptyBlock />
          )}
        </div>
        <button className="btn btn_generate" onClick={renderPhrases}>
          Сгенерировать
        </button>
        <button className="btn btn_clear" onClick={clearPhrases}>
          Очистить
        </button>
      </div>
    </div>
  );
}
