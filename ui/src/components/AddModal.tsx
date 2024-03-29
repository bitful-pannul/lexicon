import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useLexiconStore from "../store/lexiconStore";

import {
  WrappedBackground,
  CustomTextField,
  CustomButton,
} from "../components";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

const AddModal = () => {
  const { ship, group } = useParams();
  const [word, setWord] = useState("");
  const [def, setDef] = useState("");
  const [sentence, setSentence] = useState("");
  const [related, setRelated] = useState("");

  const { addDefinition, setModalOpen, modalOpen } = useLexiconStore();
  const space = `${ship}/${group}`;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //don't submit if we don't have a word
    if (!word) return;
    
    const rel = related.split(",");
    addDefinition({
      space,
      word,
      def: def ? [def] : [],
      sentence: sentence ? [sentence] : [],
      related: rel ? rel : [],
    });
    setWord("");
    setDef("");
    setSentence("");
    setRelated("");
    setModalOpen(false);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  if (!modalOpen) return null;
  return (
    <WrappedBackground>
      <Stack>
        <InputBase
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            marginBottom: "18px",
            input: {
              color: "var(--rlm-text-color)",
              "&::placeholder": {
                color: "var(--rlm-text-color)",
                opacity: 0.5,
              },
            },
          }}
          placeholder="Type word"
          type="text"
          id="word"
          value={word}
          onChange={(event: any) => {
            setWord(event.target.value);
          }}
          autoFocus
        />

        <Stack spacing={"12px"}>
          <FormControl variant="standard">
            <FormLabel
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "var(--rlm-text-color)",
                marginBottom: "6px",
              }}
              htmlFor="type-definition-textfield"
            >
              Definition <span style={{ color: "#FF6240" }}>*</span>
            </FormLabel>
            <CustomTextField
              variant="outlined"
              placeholder="Type your definition..."
              fullWidth
              id="definition"
              value={def}
              onChange={(event: any) => {
                setDef(event.target.value);
              }}
            />
          </FormControl>
          <FormControl variant="standard">
            <FormLabel
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "var(--rlm-text-color)",
                marginBottom: "6px",
              }}
              htmlFor="type-definition-textfield"
            >
              Sentence
            </FormLabel>
            <CustomTextField
              variant="outlined"
              placeholder="An example of how it's used..."
              fullWidth
              id="example-sentence"
              value={sentence}
              onChange={(event: any) => {
                setSentence(event.target.value);
              }}
            />
          </FormControl>
          <FormControl variant="standard">
            <FormLabel
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "var(--rlm-text-color)",
                marginBottom: "6px",
              }}
              htmlFor="type-definition-textfield"
            >
              Related
            </FormLabel>
            <CustomTextField
              variant="outlined"
              placeholder="Set related Words [apple,lemon,orange]..."
              fullWidth
              id="related-words"
              value={related}
              onChange={(event: any) => {
                setRelated(event.target.value);
              }}
            />
          </FormControl>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"flex-end"}
          spacing={"10px"}
          marginTop={"125px"}
        >
          <CustomButton
            sx={{
              color: "rgba(51, 51, 51, 0.4)",
              backgroundColor: "unset",
            }}
            onClick={handleClose}
          >
            <Typography
              variant="subtitle2"
              color="var(--rlm-text-color, rgba(51, 51, 51, 0.4))"
              sx={{ opacity: 0.7 }}
              fontWeight={"bold"}
            >
              Cancel
            </Typography>
          </CustomButton>
          <CustomButton onClick={(e) => handleSubmit(e)}>Submit</CustomButton>
        </Stack>
      </Stack>
    </WrappedBackground>
  );
};

export default AddModal;
