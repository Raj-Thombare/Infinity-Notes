import { useState, useRef, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { ClickAwayListener } from "@mui/material";
import { v4 as uuid } from "uuid";
import DataContext from "../../context/data-context";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 500px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  // margin-left: 260px;
  min-height: 30px;
`;

const note = {
  id: "",
  title: "",
  text: "",
};

const NotesForm = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState(note);

  const containerRef = useRef();

  const { addToNotes } = useContext(DataContext);

  const handleTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "70px";
  };

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
    if (addNote.title || addNote.text) {
      addToNotes(addNote);
    }
    setAddNote({
      title: "",
      text: "",
    });
  };

  const userInputHandler = (e) => {
    let newNote = { ...addNote, id: uuid(), [e.target.name]: e.target.value };
    setAddNote(newNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container>
        {showTextField && (
          <TextField
            placeholder="Title"
            name="title"
            value={addNote.title}
            variant="standard"
            onChange={userInputHandler}
            InputProps={{
              disableUnderline: true,
            }}
            style={{
              marginBottom: 10,
            }}
          />
        )}
        <TextField
          placeholder="Take a note..."
          variant="standard"
          name="text"
          value={addNote.text}
          multiline
          ref={containerRef}
          maxRows={Infinity}
          InputProps={{
            disableUnderline: true,
          }}
          style={{
            marginBottom: 0,
            paddingBottom: 0,
          }}
          onClick={handleTextAreaClick}
          onChange={userInputHandler}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default NotesForm;
