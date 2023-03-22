import { CircularProgress, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteConfirmationModal from "../../DeleteConfirmationModal";

const IconsContainer = ({
  editVersion,
  deleteVersion,
}: {
  editVersion: Function;
  deleteVersion: Function;
}) => {
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [deleteConfirmationPopup, setDeleteConfirmationPopup] =
    useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<any>(null);

  const clickHandler = async () => {
    setDeleteConfirmationPopup(true);
  };

  const cancelDelete = () => {
    setDeleteConfirmationPopup(false);
    setDeleteId(null);
  };

  const confirmDelete = async () => {
    setDeleteConfirmationPopup(false);
    setDeleteLoader(true);
    await deleteVersion(deleteId);
    setDeleteId(null);
    setDeleteLoader(false);
  };

  return (
    <div>
      <div className="icons-container">
        <IconButton
          onClick={() => {
            editVersion();
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton onClick={clickHandler}>
          {deleteLoader ? <CircularProgress size={20} /> : <DeleteIcon />}
        </IconButton>
      </div>
      <DeleteConfirmationModal
        cancelDelete={cancelDelete}
        confirmDelete={confirmDelete}
        visible={deleteConfirmationPopup}
      />
    </div>
  );
};

export default IconsContainer;
