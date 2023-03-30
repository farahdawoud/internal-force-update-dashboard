import { Button, Dialog } from "@mui/material";
import "./DeleteConfirmationModal.css";

export const DeleteConfirmationModal = ({
  visible,
  cancelDelete,
  confirmDelete,
}: {
  visible: boolean;
  cancelDelete: Function;
  confirmDelete: Function;
}) => {
  return (
    <Dialog
      style={{ borderRadius: 10, backgroundColor: "transparent" }}
      PaperProps={{
        style: { borderRadius: 10 },
      }}
      open={visible}
    >
      <div className="modal">
        <div>Are you sure you want to delete this version?</div>
        <div className="buttons-container">
          <Button variant="outlined" onClick={() => cancelDelete()}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => confirmDelete()}
          >
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
