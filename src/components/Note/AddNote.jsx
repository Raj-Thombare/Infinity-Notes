import { useState, useRef } from "react";
import classes from "./AddNote.module.css";

import { TbBellPlus } from "react-icons/tb";
import { MdOutlineImage } from "react-icons/md";
import { BsPin } from "react-icons/bs";
import { BsPinFill } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { MdOutlineMoreVert } from "react-icons/md";

const AddNote = () => {
  const textInputRef = useRef();

  const [pin, setPin] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(textInputRef.current.value);
  };

  return (
    <div className={classes["new-note-container"]}>
      <form className={classes["new-note"]} onSubmit={formSubmitHandler}>
        <div className={classes["new-note-header"]}>
          <div>
            <div
              contenteditable="true"
              aria-label="Title"
              role="textbox"
              className={classes["form-title"]}
            ></div>
          </div>
          <div className={classes["footer-container"]}>
            <button onClick={() => setPin((prev) => !prev)}>
              {pin ? <BsPinFill size={22} /> : <BsPin size={22} />}
            </button>
          </div>
          <textarea
            rows="7"
            cols="10"
            placeholder="Take a note..."
            ref={textInputRef}
          ></textarea>
        </div>
        <div className={classes["footer-container"]}>
          <button>
            <TbBellPlus size={17} />
          </button>
          <button>
            <MdOutlineColorLens size={17} />
          </button>
          <button>
            <MdOutlineImage size={17} />
          </button>
          <button>
            <BiArchiveIn size={17} />
          </button>
          <button>
            <MdOutlineMoreVert size={17} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
