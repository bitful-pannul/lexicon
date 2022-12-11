import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useLexiconStore from "../store/lexiconStore";
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
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { displayDate } from "../time";

const Word = () => {
  const { ship, group, word } = useParams();
  const navigate = useNavigate();
  const our: string = (window as any)?.api?.ship || "";
  const [tabValue, setTabValue] = React.useState(0);
  const [newDefinition, setNewDefinition] = useState<string>("");
  const [newExampleSentence, setNewExampleSentence] = useState<string>("");
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const lex = useLexiconStore((state) => state.lex);
  const { voteDef, addDefinition, addDefinitionToWord, addSentenceToWord } =
    useLexiconStore();

  const spaceLex = (): any => {
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
  const vote = (
    id: string,
    vote: true | false | null,
    voteType: "def" | "sen" | "word"
  ) => {
    //use a base mui button for these
    //unit => true / false (up/down) | null is remove vote
    voteDef({ space, word, id, vote, voteType });
  };
  const handleAddNewDefinition = () => {
    if (!newDefinition) return;
    //@ts-ignore, word is defined in params if we're in this component
    addDefinitionToWord({
      space,
      word,
      def: newDefinition,
    });
    setNewDefinition("");
  };
  const handleAddNewSentence = () => {
    if (!newExampleSentence) return;
    //@ts-ignore, word is defined in params if we're in this component
    addSentenceToWord({
      space,
      word,
      sen: newExampleSentence,
    });
    setNewExampleSentence("");
  };
  const getTotalInteractions = () => {
    const spaceLexData = spaceLex();

    return spaceLexData?.votes.length;
  };
  const getWordData = () => {
    const spaceLexData = spaceLex();

    if (spaceLexData) {
      return {
        word: word,
        posted: displayDate(spaceLexData.stamp.posted, {
          long: false,
          dayOnly: false,
        }),
        poster: "~" + spaceLexData.stamp.poster,
      };
    }
  };
  const handleNewDefKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleAddNewDefinition();
      event.preventDefault();
    }
  };
  const handleNewSenKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleAddNewSentence();
      event.preventDefault();
    }
  };

  return (
    <WrappedBackground>
      <Stack>
        <Stack flex={1} direction="row" justifyContent="space-between">
          <Typography fontWeight={"bold"} variant="h5">
            {getWordData()?.word}
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
            {getWordData()?.poster}
          </Typography>
          <Typography variant="subtitle2" color={"text.secondary"}>
            {getWordData()?.posted}
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
            {spaceLex()?.definitions.map((definition: any, i: number) => {
              const { stamp, txt, votes, id } = definition;
              return (
                <DefinitionElement
                  key={"definition-" + i}
                  id={id}
                  def={txt}
                  votes={votes}
                  poster={stamp.poster}
                  posted={stamp.posted}
                  related={[]}
                  vote={vote}
                  our={our}
                />
              );
            })}
            <Stack alignItems={"flex-end"} spacing={"17px"} marginTop={"30px"}>
              <CustomTextField
                id="add-definition-textfield"
                variant="outlined"
                onKeyDown={handleNewDefKeyDown}
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
            {spaceLex()?.sentences.map((sentence: any, i: number) => {
              const { stamp, txt, votes, id } = sentence;
              return (
                <SentencesElement
                  id={id}
                  sentence={txt}
                  poster={stamp.poster}
                  posted={stamp.posted}
                  votes={votes}
                  key={"sentence-" + i}
                  our={our}
                  vote={vote}
                />
              );
            })}
            <Stack alignItems={"flex-end"} spacing={"17px"} marginTop={"30px"}>
              <CustomTextField
                id="add-definition-textfield"
                variant="outlined"
                onKeyDown={handleNewSenKeyDown}
                placeholder="Add a new example sentence..."
                fullWidth
                value={newExampleSentence}
                onChange={(e) => {
                  setNewExampleSentence(e.target.value);
                }}
              />
              <CustomButton onClick={handleAddNewSentence}>Submit</CustomButton>
            </Stack>
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

function DefinitionElement({ def, votes, poster, id, vote, our }: any) {
  const [ourDownVoted, setOurDownVoted] = useState<boolean>(false);
  const [ourUpVoted, setOurUpVoted] = useState<boolean>(false);
  const [upVoteCount, setUpVoteCount] = useState<number>(0);
  const [downVoteCount, setDownVoteCount] = useState<number>(0);
  useEffect(() => {
    setOurDownVoted(false);
    setOurUpVoted(false);
    let uvCount = 0;
    let dvCount = 0;
    votes.forEach((vote: any, index: any) => {
      if (vote.ship === our) {
        if (vote.vote) {
          //upvote
          setOurUpVoted(true);
        } else {
          //downvote
          setOurDownVoted(true);
        }
      }
      if (vote.vote) {
        uvCount = uvCount + 1;
      } else {
        dvCount = dvCount + 1;
      }
    });
    setUpVoteCount(uvCount);
    setDownVoteCount(dvCount);
  }, [votes]);

  return (
    <Stack spacing={"6px"} marginTop={"10px"}>
      <Typography variant="subtitle2">{def}</Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={"15px"}>
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems="center"
            sx={{
              p: "4px 3.5px",
              borderRadius: "4px",
              backgroundColor: ourUpVoted
                ? "rgba(78, 158, 253, 0.08)"
                : "default",
              "&:hover": {
                backgroundColor: "#EEEDED",
              },
            }}
            spacing={"4.75px"}
            role="button"
            onClick={() => {
              if (ourUpVoted) {
                //we up voted already, remove the vote
                vote(id, null, "def");
              } else {
                //we haven't up voted, up vote this!
                vote(id, true, "def");
              }
            }}
          >
            <ThumbUpOutlinedIcon
              style={{
                fontSize: "18px",
              }}
              sx={{
                color: ourUpVoted ? "primary.main" : "rgba(51, 51, 51, 0.5)",
              }}
            />
            <Typography
              variant="subtitle2"
              color={ourUpVoted ? "primary.main" : "rgba(51, 51, 51, 0.5)"}
            >
              {upVoteCount}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems="center"
            sx={{
              p: "4px 3.5px",
              borderRadius: "4px",
              backgroundColor: ourDownVoted
                ? "rgba(255, 98, 64, 0.08)"
                : "default",
              "&:hover": {
                backgroundColor: "#EEEDED",
              },
            }}
            spacing={"4.75px"}
            role="button"
            onClick={() => {
              if (ourDownVoted) {
                //we down voted already, remove the vote
                vote(id, null, "def");
              } else {
                //we haven't down voted, down vote this!
                vote(id, false, "def");
              }
            }}
          >
            <ThumbDownOutlinedIcon
              style={{ fontSize: "18px" }}
              sx={{
                color: ourDownVoted ? "error.main" : "rgba(51, 51, 51, 0.5)",
              }}
            />
            <Typography
              variant="subtitle2"
              color={ourDownVoted ? "error.main" : "rgba(51, 51, 51, 0.5)"}
            >
              {downVoteCount}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="subtitle2" color="text.secondary">
          {"~" + poster}
        </Typography>
      </Stack>
    </Stack>
  );
}
function SentencesElement({ id, sentence, poster, votes, vote, our }: any) {
  const [ourDownVoted, setOurDownVoted] = useState<boolean>(false);
  const [ourUpVoted, setOurUpVoted] = useState<boolean>(false);
  const [upVoteCount, setUpVoteCount] = useState<number>(0);
  const [downVoteCount, setDownVoteCount] = useState<number>(0);
  useEffect(() => {
    setOurDownVoted(false);
    setOurUpVoted(false);
    let uvCount = 0;
    let dvCount = 0;
    votes.forEach((vote: any, index: any) => {
      if (vote.ship === our) {
        if (vote.vote) {
          //upvote
          setOurUpVoted(true);
        } else {
          //downvote
          setOurDownVoted(true);
        }
      }
      if (vote.vote) {
        uvCount = uvCount + 1;
      } else {
        dvCount = dvCount + 1;
      }
    });
    setUpVoteCount(uvCount);
    setDownVoteCount(dvCount);
  }, [votes]);

  return (
    <Stack spacing={"6px"} marginTop={"10px"}>
      <Typography variant="subtitle2">{sentence}</Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={"15px"}>
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems="center"
            sx={{
              p: "4px 3.5px",
              borderRadius: "4px",
              backgroundColor: ourUpVoted
                ? "rgba(78, 158, 253, 0.08)"
                : "default",
              "&:hover": {
                backgroundColor: "#EEEDED",
              },
            }}
            spacing={"4.75px"}
            role="button"
            onClick={() => {
              if (ourUpVoted) {
                //we up voted already, remove the vote
                //TODO: remove vote
                vote(id, null, "sen");
              } else {
                //we haven't up voted, up vote this!
                vote(id, true, "sen");
              }
            }}
          >
            <ThumbUpOutlinedIcon
              style={{
                fontSize: "18px",
              }}
              sx={{
                color: ourUpVoted ? "primary.main" : "rgba(51, 51, 51, 0.5)",
              }}
            />
            <Typography
              variant="subtitle2"
              color={ourUpVoted ? "primary.main" : "rgba(51, 51, 51, 0.5)"}
            >
              {upVoteCount}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems="center"
            sx={{
              p: "4px 3.5px",
              borderRadius: "4px",
              backgroundColor: ourDownVoted
                ? "rgba(255, 98, 64, 0.08)"
                : "default",
              "&:hover": {
                backgroundColor: "#EEEDED",
              },
            }}
            spacing={"4.75px"}
            role="button"
            onClick={() => {
              if (ourDownVoted) {
                //we down voted already, remove the vote
                vote(id, null, "sen");
              } else {
                //we haven't down voted, down vote this!
                vote(id, false, "sen");
              }
            }}
          >
            <ThumbDownOutlinedIcon
              style={{ fontSize: "18px" }}
              sx={{
                color: ourDownVoted ? "error.main" : "rgba(51, 51, 51, 0.5)",
              }}
            />
            <Typography
              variant="subtitle2"
              color={ourDownVoted ? "error.main" : "rgba(51, 51, 51, 0.5)"}
            >
              {downVoteCount}
            </Typography>
          </Stack>
        </Stack>
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

export default Word;
