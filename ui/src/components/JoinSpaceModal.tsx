import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import useLexiconStore from "../store/lexiconStore";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";


const JoinSpaceModal = () => {
  const [space, setSpace] = useState("");

  const { setJoinSpaceModalOpen, joinSpaceModalOpen, joinLex } =
    useLexiconStore();
  const handleClose = () => {
    setJoinSpaceModalOpen(false);
    setSpace("");
  };
  const handleSubmit = () => {
    if (!space) return;
    joinLex(space);

    handleClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
      event.preventDefault();

    }

  };

  return (
    <Dialog
      open={joinSpaceModalOpen}
      onClose={handleClose}
      aria-labelledby="join-space-dialog"
      aria-describedby="join an existing space here"
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle id="join-space-dialog-title" fontWeight={"bold"}>
        Join Space
      </DialogTitle>
      <DialogContent>
        <TextField
          sx={{ marginTop: 1 }}
          error={false}
          size="small"
          id="name"
          label="Lex"
          type="text"
          value={space}
          placeholder={"~zod/our"}
          onChange={(event: any) => {
            setSpace(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit} size="small">
          Join
        </Button>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={handleClose}
        >
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JoinSpaceModal;
