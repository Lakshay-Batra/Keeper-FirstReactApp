import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [item, setItem] = useState({ title: "", content: "" });
  const [isExpanded,setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setItem(prevValue => {
      return { ...prevValue, [name]: value };
    });
  }

  function addItem(event) {
    props.addItemProp(item);
    // setItem(prevValue => {
    //   return { ...prevValue, title: "", content: "" };
    // });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={addItem}>
        {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={item.title} />}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={item.content} />
        <Zoom in={isExpanded}>
          <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
