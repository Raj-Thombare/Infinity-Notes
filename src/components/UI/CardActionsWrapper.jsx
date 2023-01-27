import { CardActions } from "@mui/material";

const CardActionsWrapper = ({ children }) => {
  return (
    <CardActions
      sx={{
        padding: 0,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      {children}
    </CardActions>
  );
};

export default CardActionsWrapper;
