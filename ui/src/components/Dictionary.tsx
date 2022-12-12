import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import useLexiconStore from "../store/lexiconStore";
import { Definition } from "../types";
import {
  WrappedBackground,
  CustomTextField,
  CustomButton,
} from "../components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//TODO: pass around a query param to go back to the initial space
const Dictionary = () => {
  const [defs, setDefs] = useState<any>([]);
  const [noResults, setNoResults] = useState<boolean>();
  const { word } = useParams();
  const navigate = useNavigate();

  const fetchDict = async () => {
    setNoResults(false);
    setDefs([]);
    try {
      const res = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
      );
      console.log("res", res);
      const data = res?.data[0].meanings;

      if (data) {
        setDefs(data);
      } else {
        setNoResults(true);
      }
    } catch {
      setNoResults(true);
    }
  };

  useEffect(() => {
    fetchDict();
  }, [word]);

  const our: string = (window as any)?.api?.ship || "";

  return (
    <WrappedBackground>
      <Stack>
        <Stack flex={1} direction="row" justifyContent="space-between">
          <Typography
            fontWeight={"bold"}
            variant="h5"
            color="var(--rlm-text-color, #000)"
          >
            {word}
          </Typography>
        </Stack>
        {noResults ? (
          <Typography variant="subtitle1" color="var(--rlm-text-color, #000)">
            We couldn't find you a result
          </Typography>
        ) : (
          defs?.map((meaning: any, meaningIndex: number) => {
            const { synonyms, antonyms } = meaning;
            return (
              <Box
                sx={{ width: "100%", marginTop: "16px" }}
                key={"meaning-" + meaningIndex}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  fontStyle="italic"
                  color="var(--rlm-text-color, #000)"
                >
                  {meaning.partOfSpeech}
                </Typography>
                {meaning?.definitions?.map((item: any, i: number) => {
                  const { definition, example, synonyms, antonyms } = item;
                  return (
                    <DefinitionElement
                      key={"definition-" + i + "-" + meaningIndex}
                      def={definition}
                      example={example}
                      count={i + 1}
                      //vote={vote}
                      our={our}
                    />
                  );
                })}

                <Grid container marginTop={"12px"}>
                  <Grid item xs={6}>
                    {synonyms?.length > 0 && (
                      <Stack direction={"column"} justifyContent={"center"}>
                        <Typography
                          variant="subtitle1"
                          fontWeight={"bold"}
                          marginBottom="12px"
                          color="var(--rlm-text-color, #000)"
                        >
                          Synonyms
                          <Stack direction="column" marginLeft="2px">
                            {synonyms.map((item: string, index: number) => {
                              return (
                                <Typography
                                  key={"synonym-" + index + "-" + meaningIndex}
                                  variant="subtitle2"
                                  sx={{ cursor: "pointer" }}
                                  color={"primary"}
                                  onClick={() => {
                                    navigate("../apps/lexicon/dict/" + item);
                                  }}
                                >
                                  {item}
                                </Typography>
                              );
                            })}
                          </Stack>
                        </Typography>
                      </Stack>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    {antonyms?.length > 0 && (
                      <Stack direction={"column"} justifyContent={"center"}>
                        <Typography
                          variant="subtitle1"
                          fontWeight={"bold"}
                          marginBottom="12px"
                          color="var(--rlm-text-color, #000)"
                        >
                          Antonyms
                          <Stack direction="column" marginLeft="2px">
                            {antonyms.map((item: string, index: number) => {
                              return (
                                <Typography
                                  key={"antonym-" + index + "-" + meaningIndex}
                                  variant="subtitle2"
                                  sx={{ cursor: "pointer" }}
                                  color={"primary"}
                                  onClick={() => {
                                    navigate("../apps/lexicon/dict/" + item);
                                  }}
                                >
                                  {item}
                                </Typography>
                              );
                            })}
                          </Stack>
                        </Typography>
                      </Stack>
                    )}
                  </Grid>
                </Grid>
              </Box>
            );
          })
        )}
      </Stack>
    </WrappedBackground>
  );
};

function DefinitionElement({ def, example, count }: any) {
  return (
    <Stack marginTop={"10px"}>
      <Stack direction={"row"} spacing={"5px"}>
        <Typography
          variant="subtitle2"
          sx={{ textDecoration: "underline" }}
          color="var(--rlm-text-color, #000)"
        >
          {count}.
        </Typography>

        <Typography variant="subtitle2" color="var(--rlm-text-color, #000)">
          {def}
        </Typography>
      </Stack>

      {example && (
        <Box>
          <Typography
            variant="subtitle2"
            marginLeft={"18px"}
            marginTop={"2px"}
            color="var(--rlm-text-color, #000)"
            style={{ opacity: 0.5 }}
          >
            "{example}"
          </Typography>
        </Box>
      )}
    </Stack>
  );
}

export default Dictionary;
