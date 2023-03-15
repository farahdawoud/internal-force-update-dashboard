import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const IconsContainer = ({
  editVersion,
  deleteVersion,
}: {
  editVersion: any;
  deleteVersion: any;
}) => {
  return (
    <div className="icons-container">
      <IconButton onClick={editVersion}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={deleteVersion}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default IconsContainer;
