import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

interface AddRecipeProps {
  open: boolean;
  onClose(): void;
}

function AddRecipe({ open, onClose }: AddRecipeProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const formJson = Object.fromEntries((formData as any).entries());
          const name = formJson.name;
          console.log(name);
          onClose();
        },
      }}
    >
      <DialogTitle>Add Recipe</DialogTitle>
      <TextField
        autoFocus
        required
        margin="normal"
        id="name"
        name="name"
        label="Recipe Name"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="normal"
        id="ingredients"
        name="ingredients"
        label="Ingredients"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        required
        margin="normal"
        id="method"
        name="method"
        label="Method"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        margin="normal"
        id="img"
        name="img"
        label="Image"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        margin="normal"
        id="points"
        name="points"
        label="Points"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        margin="normal"
        id="calories"
        name="calories"
        label="Calories"
        type="text"
        fullWidth
        variant="standard"
      />
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">Add Recipe</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddRecipe;
