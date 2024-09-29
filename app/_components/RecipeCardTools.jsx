import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

function RecipeCardTools({ isDisabled }) {
  return (
    <span>
      <IconButton disabled={isDisabled}>
        <EditNoteIcon />
      </IconButton>
      <IconButton disabled={isDisabled}>
        <DeleteIcon />
      </IconButton>
    </span>
  );
}

export default RecipeCardTools;
