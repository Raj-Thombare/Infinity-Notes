import { useRef } from "react";
import classes from "./AddNote.module.css";

const AddNote = () => {
  const textInputRef = useRef();

  const textInputHandler = () => {
    console.log(textInputRef.current.value);
  };

  return (
    <div className={classes.new_note}>
      <textarea
        rows="7"
        cols="10"
        placeholder="Take a note..."
        ref={textInputRef}
        onChange={textInputHandler}
      ></textarea>
    </div>
  );
};

export default AddNote;
