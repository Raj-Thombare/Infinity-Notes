import { CardActions } from "@mui/material";

const CardActionsWrapper = ({ children }) => {
  return (
    <CardActions
      sx={{
        padding: 0,
        width: "100%",
        marginTop: "20px",
        justifyContent: "center",
      }}
    >
      {children}
    </CardActions>
  );
};

export default CardActionsWrapper;
