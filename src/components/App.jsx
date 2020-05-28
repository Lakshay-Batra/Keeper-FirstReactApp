import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [cards,setCards] = useState([]);

  function addItem(item) {
    setCards(prevValue => {
      return [...prevValue, item];
    });
  }

  function deleteItem(id) {
    setCards(prevValue => {
      return(prevValue.filter((card,index) => {
        return index !== id;
      }));
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItemProp={addItem} />
      {cards.map((card,index) => {
        return <Note key={index} id={index} title={card.title} content={card.content} deleteItemProp={deleteItem} />
      })}
      <Footer />
    </div>
  );
}

export default App;
