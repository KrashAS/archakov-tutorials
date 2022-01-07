import React from "react";
import Phrase from "./components/Phrase";
import EmptyBlock from "./components/EmptyBlock";

function RenderRandomPhrase() {
  const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый",
  ];
  const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак",
  ];
  const [phrase, setPhrase] = React.useState([]);
  const [render, setRender] = React.useState("");

  const generateRandomWord = (arr) => {
    const copy = [...arr];
    const output = [];
    if (copy.length > 0) {
      output.push(copy.splice(Math.floor(Math.random() * copy.length), 1));
    }
    return output;
  };

  function generatePhrase() {
    let firstAdjective = generateRandomWord(adjectivesArr);
    let secondAdjective = generateRandomWord(adjectivesArr);
    let randomNouns = generateRandomWord(nounsArr);

    phrase.push(`${firstAdjective} ${secondAdjective} ${randomNouns}`);

    setPhrase(phrase);
    setRender(
      phrase.map((value, index, arr) => (
        <Phrase key={index} text={phrase[index].toString()} />
      ))
    );
  }

  function clearPhrase() {
    setRender(<EmptyBlock />);
    setPhrase([]);
  }

  return (
    <div className="wrapper">
      <div className="list">{render}</div>
      <button className="btn btn_generate" onClick={generatePhrase}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={clearPhrase}>
        Очистить
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div id="app">
      <RenderRandomPhrase />
    </div>
  );
}
