import { CircularProgress, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const IconsContainer = ({
  editVersion,
  deleteVersion,
}: {
  editVersion: any;
  deleteVersion: any;
}) => {
  const [deleteLoader, setDeleteLoader] = useState(false);

  const clickHandler = async () => {
    setDeleteLoader(true);
    await deleteVersion();
    setDeleteLoader(false);
  };

  return (
    <div className="icons-container">
      <IconButton onClick={editVersion}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={clickHandler}>
        {deleteLoader ? <CircularProgress size={20} /> : <DeleteIcon />}
      </IconButton>
    </div>
  );
};

export default IconsContainer;
