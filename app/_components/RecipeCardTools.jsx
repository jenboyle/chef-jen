import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";

function RecipeCardTools({ isDisabled }) {
  return (
    <span>
      <Tooltip title="Edit Recipe">
        <span>
          <IconButton disabled={isDisabled}>
            <EditNoteIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Delete Recipe">
        <span>
          <IconButton disabled={isDisabled}>
            <DeleteIcon />
          </IconButton>
        </span>
      </Tooltip>
    </span>
  );
}

export default RecipeCardTools;
