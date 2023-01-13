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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";

const CreateSpaceModal = () => {
  const [space, setSpace] = useState("");
  const [perms, setPerms] = useState<string>("public");//public | private
  const [members, setMembers] = useState("");

  const our: string = (window as any)?.api?.ship || "";

  const { setCreateSpaceModalOpen, createSpaceModalOpen, createLex } =
    useLexiconStore();
  const handleClose = () => {
    setCreateSpaceModalOpen(false);
    setSpace("");
  };
  const handleSubmit = () => {
    // verify group name sanity
    var mems = members.split(",");

    if (mems[0] === "") {
      mems = ["~" + our];
    }

    createLex(space, perms, mems);
    handleClose();
  };


  const handlePermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerms((event.target as HTMLInputElement).value);
  };

  return (
    <Dialog
      open={createSpaceModalOpen}
      onClose={handleClose}
      aria-labelledby="join-space-dialog"
      aria-describedby="join an existing space here"
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle id="join-space-dialog-title" fontWeight={"bold"}>
        Create Space
      </DialogTitle>
      <DialogContent>
        <TextField
          sx={{ marginTop: 1 }}
          error={false}
          size="small"
          id="name"
          label="Name"
          type="text"
          value={space}
          placeholder={"name of your space"}
          onChange={(event: any) => {
            setSpace(event.target.value);
          }}
          fullWidth
        />

        <TextField
          sx={{ marginTop: 1 }}
          error={false}
          size="small"
          id="members"
          label="Members"
          type="text"
          value={members}
          placeholder={"~niblyx-malnus, ~sidlup-havwen"}
          onChange={(event: any) => {
            setMembers(event.target.value);
          }}
          fullWidth
        />
        <FormControl>
          <RadioGroup
            aria-labelledby="create-space-radio-buttons-group-label"
            defaultValue="public"
            name="radio-buttons-create-space-group"
            sx={{ marginLeft: 1, marginTop: 1 }}
            value={perms}
            onChange={handlePermChange}
          >
            <Stack direction="row">
              <FormControlLabel
                value="public"
                control={<Radio size="small" />}
                label="%Public"
              />
              <FormControlLabel
                value="private"
                control={<Radio size="small" />}
                label="%Private"
              />
            </Stack>
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit} size="small">
          Create
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

export default CreateSpaceModal;
