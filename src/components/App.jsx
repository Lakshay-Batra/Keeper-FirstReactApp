import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem("cards");
    return storedCards ? JSON.parse(storedCards) : [];
  });

  useEffect(() => {
    if (cards?.length) {
      console.log(cards);
      localStorage.setItem("cards", JSON.stringify(cards));
    }
  }, [cards]);

  function addItem(item) {
    setCards((prevValue) => {
      return [...prevValue, item];
    });
  }

  function deleteItem(id) {
    setCards((prevValue) => {
      return prevValue.filter((card, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItemProp={addItem} />
      {cards.map((card, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={card.title}
            content={card.content}
            deleteItemProp={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
