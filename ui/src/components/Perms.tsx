import React, { useState } from "react";
import useLexiconStore from "../store/lexiconStore";
import { MdKeyboardBackspace } from "react-icons/md";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface PermsProps {
  perms: string;
  members: string[];
}

const Perms = ({ perms, members }: PermsProps) => {
  const [showMembers, setShowMembers] = useState(false);
  const [member, setMember] = useState("");

  const { ship, group } = useParams();
  const { addMember, setModalOpen } = useLexiconStore();

  const handleChange = (e: any) => {
    setMember(e.target.value);
  };

  const handleAddMember = (e: any) => {
    // validate proper planet name?
    const sp = `${ship}/${group}`;
    addMember(sp, member);
    setMember("");
  };
  //TODO: work on perms here
  //TODO: handle members modal
  return !showMembers ? (
    <Stack
      sx={{ flex: 1 }}
      direction="row"
      justifyContent={"space-between"}
      marginTop={4}
      marginBottom={2}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color="var(--rlm-text-color, #000)"
      >
        %{perms}
      </Typography>
      <Stack
        sx={{ flex: 1 }}
        direction="row"
        spacing={1}
        justifyContent={"flex-end"}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => setShowMembers(true)}
        >
          handle members
        </Button>

        <Button
          size="small"
          variant="contained"
          sx={{ height: 38 }}
          onClick={() => setModalOpen(true)}
        >
          Add word
        </Button>
      </Stack>
    </Stack>
  ) : (
    <div className="flex-col">
      <MdKeyboardBackspace
        onClick={() => setShowMembers(false)}
        className="ml-2"
      />
      <ul>
        {members.map((m, i) => (
          <li>{m}</li>
        ))}

        <input
          placeholder="add member"
          onChange={handleChange}
          value={member}
        />
        <button onClick={handleAddMember} className="my-3 bg-blue-100">
          add member to lex
        </button>
      </ul>
    </div>
  );
};

export default Perms;
