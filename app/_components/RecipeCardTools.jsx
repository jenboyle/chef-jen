import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

function RecipeCardTools() {
  return (
    <span>
      <IconButton disabled>
        <EditNoteIcon />
      </IconButton>
      <IconButton disabled>
        <DeleteIcon />
      </IconButton>
    </span>
  );
}

export default RecipeCardTools;
