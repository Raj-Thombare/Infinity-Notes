import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { ClickAwayListener } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 500px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin: auto;
  min-height: 30px;
`;

const NotesForm = () => {
  const [showTextField, setShowTextField] = useState(false);

  const containerRef = useRef();

  const handleTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "70px";
  };

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
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
        />
      </Container>
    </ClickAwayListener>
  );
};

export default NotesForm;
