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
          <Typography fontWeight={"bold"} variant="h5">
            {word}
          </Typography>
        </Stack>
        {noResults ? (
          <Typography variant="subtitle1">
            We couldn't find you a result
          </Typography>
        ) : (
          defs?.map((meaning: any, index: number) => {
            const { synonyms, antonyms } = meaning;
            return (
              <Box sx={{ width: "100%", marginTop: "16px" }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  fontStyle="italic"
                >
                  {meaning.partOfSpeech}
                </Typography>
                {meaning?.definitions?.map((item: any, i: number) => {
                  const { definition, example, synonyms, antonyms } = item;
                  return (
                    <DefinitionElement
                      key={"definition-" + i}
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
                        >
                          Synonyms
                          <Stack direction="column" marginLeft="2px">
                            {synonyms.map((item: string, index: number) => {
                              return (
                                <Typography
                                  variant="subtitle2"
                                  sx={{ cursor: "pointer" }}
                                  color={"primary"}
                                  onClick={() => {
                                    navigate("../apps/lexicon/dict/" + item, {
                                      replace: true,
                                    });
                                    navigate(0);
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
                        >
                          Antonyms
                          <Stack direction="column" marginLeft="2px">
                            {antonyms.map((item: string, index: number) => {
                              return (
                                <Typography
                                  variant="subtitle2"
                                  sx={{ cursor: "pointer" }}
                                  color={"primary"}
                                  onClick={() => {
                                    navigate("../apps/lexicon/dict/" + item, {
                                      replace: true,
                                    });
                                    navigate(0);
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
  if (error) return <div>{word} not found...</div>;

  return !defs ? (
    <div>loading</div>
  ) : (
    <>
      <div
        onClick={() => navigate("/apps/lexicon/~dev/our", { replace: true })}
      >
        {"<-"}
      </div>

      <div>
        <button>definitions</button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button>sentences</button>
      </div>

      <h2>word: {word}</h2>

      <ul>
        {defs ? (
          defs?.map((def: any, i: number) => <WordView def={def} i />)
        ) : (
          <div>no definitions found for: {word}</div>
        )}
      </ul>
    </>
  );
};

const WordView = ({ def, i }: any) => (
  <li key={"word" + i}>
    <div>{def}</div>
  </li>
);

const Word = () => {
  const { ship, group, word } = useParams();
  const navigate = useNavigate();
  const our: string = (window as any)?.api?.ship || "";
  const [tabValue, setTabValue] = React.useState(0);
  const [newDefinition, setNewDefinition] = useState<string>("");
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const lex = useLexiconStore((state) => state.lex);
  const { voteDef, addDefinition } = useLexiconStore();

  const spaceLex = (): Definition[] | undefined => {
    //TODO: migrate this to be a one time call in state
    try {
      //@ts-ignore handled if undefined
      const result = lex[`${ship}/${group}`][word];

      return result;
    } catch {
      return undefined;
    }
  };

  const space: string = `${ship}/${group}`;
  const vote = (id: string, type: "upvotes" | "downvotes") => {
    //use a base mui button for these
    voteDef({ space, word, id, "vote-type": type });
  };
  const handleAddNewDefinition = (e: any) => {
    if (!newDefinition) return;
    //@ts-ignore, word is defined in params if we're in this component
    addDefinition({
      space,
      word,
      def: newDefinition,
      related: [],
      sentence: [],
    });
    setNewDefinition("");
  };
  const getTotalInteractions = () => {
    let total = 0;
    spaceLex()?.forEach((d, i: number) => {
      const { downvotes, upvotes } = d;
      total = total + downvotes.length + upvotes.length;
    });
    return total;
  };
  return (
    <WrappedBackground>
      <Stack>
        <Stack flex={1} direction="row" justifyContent="space-between">
          <Typography fontWeight={"bold"} variant="h5">
            {word}
          </Typography>
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"center"}
            sx={{
              padding: "3px 4px",
              backgroundColor: " rgba(253, 193, 78, 0.12)",
              borderRadius: "4px",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99994 13.695L3.71019 16.656L4.89144 10.71L0.440186 6.594L6.46044 5.88L8.99994 0.375L11.5394 5.88L17.5597 6.594L13.1084 10.71L14.2897 16.656L8.99994 13.695Z"
                fill="#FDC24E"
              />
            </svg>

            <Typography
              color={" #FDC24E "}
              variant="subtitle1"
              lineHeight={"19px"}
              textAlign="center"
              marginLeft={"4.4px"}
            >
              {getTotalInteractions()}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flex={1}
          direction="row"
          justifyContent="space-between"
          marginTop={"8px"}
        >
          <Typography variant="subtitle2" color={"text.secondary"}>
            ~lodlev-migdev
          </Typography>
          <Typography variant="subtitle2" color={"text.secondary"}>
            07/21/2022 10:30 AM
          </Typography>
        </Stack>
        <Box sx={{ width: "100%", marginTop: "16px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="basic tabs example"
              sx={{
                height: "22px",
                minHeight: "22px",
              }}
            >
              <Tab
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  padding: 0,
                  minHeight: "22px",
                  height: "22px",
                  textTransform: "capitalize",
                  lineHeight: "15px",
                  minWidth: "67px",
                  width: "67px",
                }}
                label="Definitions"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  padding: 0,
                  minHeight: "22px",
                  height: "22px",
                  textTransform: "capitalize",
                  lineHeight: "15px",
                  minWidth: "67px",
                  width: "67px",
                  marginLeft: "10px",
                }}
                label="Sentences"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            {spaceLex()?.map((d, i: number) => {
              const {
                def,
                upvotes,
                downvotes,
                poster,
                id,
                posted,
                related,
                sentence,
              } = d;
              return (
                <DefinitionElement
                  key={"definition-" + i}
                  id={id}
                  def={def}
                  upVotes={upvotes}
                  downVotes={downvotes}
                  poster={poster}
                  posted={posted}
                  related={related}
                  sentence={sentence}
                  vote={vote}
                  our={our}
                />
              );
            })}
            <Stack alignItems={"flex-end"} spacing={"17px"} marginTop={"30px"}>
              <CustomTextField
                id="add-definition-textfield"
                variant="outlined"
                multiline
                placeholder="Add a new definition..."
                fullWidth
                value={newDefinition}
                onChange={(e) => {
                  setNewDefinition(e.target.value);
                }}
              />
              <CustomButton onClick={handleAddNewDefinition}>
                Submit
              </CustomButton>
            </Stack>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {spaceLex()?.map((d, i) => {
              return d.sentence?.map((sen, i) => {
                return (
                  <SentencesElement
                    sentence={sen}
                    poster={d.poster}
                    key={"sentence-" + i}
                  />
                );
              });
            })}
          </TabPanel>
        </Box>
      </Stack>
    </WrappedBackground>
  );
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function DefinitionElement({ def, example, count }: any) {
  return (
    <Stack marginTop={"10px"}>
      <Stack direction={"row"} spacing={"5px"}>
        <Typography variant="subtitle2" sx={{ textDecoration: "underline" }}>
          {count}.
        </Typography>

        <Typography variant="subtitle2">{def}</Typography>
      </Stack>

      {example && (
        <Box>
          <Typography
            variant="subtitle2"
            marginLeft={"18px"}
            marginTop={"2px"}
            color="text.secondary"
          >
            "{example}"
          </Typography>
        </Box>
      )}
    </Stack>
  );
}
function SentencesElement({ sentence, poster }: any) {
  return (
    <Stack spacing={"6px"} marginTop={"10px"}>
      <Typography variant="subtitle2">{sentence}</Typography>
      <Stack alignItems={"flex-end"}>
        <Typography variant="subtitle2" color="text.secondary">
          {poster}
        </Typography>
      </Stack>
    </Stack>
  );
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default Dictionary;
