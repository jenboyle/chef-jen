import FormLabel from "@mui/material/FormLabel";

function AllowanceLabel({ children }: { children: React.ReactNode }) {
  return <FormLabel sx={{ padding: 1 }}>{children}</FormLabel>;
}

export default AllowanceLabel;
