import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import useLexiconStore from "../store/lexiconStore";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (val: boolean) => void;
}

const AddModal = () => {
  const { ship, group } = useParams();
  const [word, setWord] = useState("");
  const [def, setDef] = useState("");
  const [sentence, setSentence] = useState("");
  const [related, setRelated] = useState("");

  const { addDefinition, setModalOpen, modalOpen } = useLexiconStore();
  const space = `${ship}/${group}`;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    const rel = related.split(",");

    addDefinition({
      space,
      word,
      def,
      sentence: [sentence],
      related: rel,
    });

    setModalOpen(false);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <Dialog
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="add-entry-dialog"
      aria-describedby="add an entry here"
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle id="alert-dialog-title" fontWeight={"bold"}>
        Add new entry
      </DialogTitle>
      <DialogContent>
        <TextField
          sx={{ marginTop: 1 }}
          error={false}
          size="small"
          id="word"
          label="Word"
          type="text"
          value={word}
          onChange={(event: any) => {
            setWord(event.target.value);
          }}
          fullWidth
        />
        <TextField
          sx={{ marginTop: 1 }}
          spellCheck="true"
          error={false}
          size="small"
          id="definition"
          label="Definition"
          type="text"
          value={def}
          onChange={(event: any) => {
            setDef(event.target.value);
          }}
          fullWidth
        />
        <TextField
          sx={{ marginTop: 1 }}
          spellCheck="true"
          error={false}
          size="small"
          id="example-sentence"
          label="Example Sentence"
          type="text"
          value={sentence}
          onChange={(event: any) => {
            setSentence(event.target.value);
          }}
          fullWidth
        />
        <TextField
          sx={{ marginTop: 1 }}
          spellCheck="true"
          error={false}
          size="small"
          id="related-words"
          label="Set related Words [apple,lemon,orange]..."
          type="text"
          value={related}
          onChange={(event: any) => {
            setRelated(event.target.value);
          }}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          //  disabled={inputValue.length === 0}
          onClick={handleSubmit}
          size="small"
        >
          Submit
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

export default AddModal;
