import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MdThumbDownOffAlt,
  MdThumbDownAlt,
  MdThumbUpAlt,
  MdOutlineThumbUpOffAlt,
  MdKeyboardBackspace,
} from "react-icons/md";
import useLexiconStore from "../store/lexiconStore";
import { Definition } from "../types";
import {
  Popup,
  Search,
  WrappedBackground,
  CustomTextField,
  AddModal,
  CustomButton,
} from "../components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

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

function DefinitionElement({
  def,
  upVotes,
  downVotes,
  poster,
  posted,
  related,
  sentence,
  id,
  vote,
  our,
}: any) {
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
              backgroundColor: "rgba(78, 158, 253, 0.08)",
            }}
            spacing={"4.75px"}
            role="button"
            onClick={() => {
              !upVotes?.includes("~" + our) && vote(id, "upvotes");
            }}
          >
            <ThumbUpOutlinedIcon style={{ fontSize: "18px" }} color="primary" />
            <Typography variant="subtitle2" color="primary">
              {upVotes?.length}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems="center"
            sx={{
              p: "4px 3.5px",
              borderRadius: "4px",
            }}
            spacing={"4.75px"}
            role="button"
            onClick={() => {
              !downVotes?.includes("~" + our) && vote(id, "downvotes");
            }}
          >
            <ThumbDownOutlinedIcon
              style={{ fontSize: "18px" }}
              htmlColor="rgba(51, 51, 51, 0.5)"
            />
            <Typography variant="subtitle2" color="text.secondary">
              {downVotes?.length}
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

export default Word;
