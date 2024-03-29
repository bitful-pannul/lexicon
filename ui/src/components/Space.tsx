import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLexiconStore from "../store/lexiconStore";
import { WrappedBackground, AddModal } from "./index";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { displayDate } from "../time";
const Space = () => {
  const lex = useLexiconStore((state) => state.lex);
  const voteDef = useLexiconStore((state) => state.voteDef);
  const { ship, group } = useParams();

  const vote = (
    id: string,
    word: string,
    vote: true | false | null,
    voteType: "def" | "sen" | "word"
  ) => {
    const space: string = `${ship}/${group}`;

    //unit => true / false (up/down) | null is remove vote
    voteDef({ space, word, id, vote, voteType });
  };

  const calculateItems = () => {
    if (lex[`${ship}/${group}`]) {
      let newItems: any = Object.entries(lex[`${ship}/${group}`])?.map(
        (word: any, i) => {
          //we need the most popular definiton to be displayed at the top lvl here
          let mostPopularDef = word[1].definitions?.[0];
          //keep track of this to compare to other defs
          let currentMostPopularUpvotes = mostPopularDef?.votes.filter(
            (item: any) => item.vote === true
          ).length;
          word[1].definitions?.forEach((item: any, index: number) => {
            let itemUpVotes = item?.votes.filter(
              (item: any) => item.vote === true
            ).length;
            if (itemUpVotes > currentMostPopularUpvotes) {
              mostPopularDef = item;
              currentMostPopularUpvotes = itemUpVotes;
            }
          });
          //attatch the def
          if (mostPopularDef) {
            word[1].mostPopularDef = mostPopularDef.txt;
          }
          return { ...word[1], word: word[0] };
        }
      );
      newItems.sort((a: any, b: any) => {
        console.log(" a.stamp.poster", a.stamp.poster);
        return a.stamp.posted > b.stamp.posted ? -1 : 1;
      });
      return newItems;
    }
  };
  const items = calculateItems();
  //@ts-ignore if modalOpen then AddModal will render
  return (
    <>
      <AddModal />

      <WrappedBackground styles={{ padding: "6px 8px" }}>
        <WordItem
          items={items}
          clearSearch={() => null}
          largeText
          vote={vote}
        />
      </WrappedBackground>
    </>
  );
};

const WordItem = ({ items, clearSearch, largeText = false, vote }: any) => {
  const { ship, group, word } = useParams();

  const navigate = useNavigate();
  const onKeyDown = (e: any, link: string) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      Go(link);
    }
  };
  const Go = (link: string) => {
    navigate("/apps/lexicon/" + link);

    clearSearch();
  };

  //          tabindex={0}
  return (
    <Stack direction="column" padding={"5px"}>
      {items?.length > 0 ? (
        items.map((item: any, index: number) => {
          const { word, stamp, votes, id, mostPopularDef } = item;
          const navLink = `${ship}/${group}/${word}`;

          return (
            <SingleWord
              key={"search-result-" + index}
              id={id}
              word={word}
              stamp={stamp}
              votes={votes}
              vote={vote}
              navLink={navLink}
              onKeyDown={onKeyDown}
              Go={Go}
              largeText={largeText}
              mostPopularDef={mostPopularDef}
            />
          );
        })
      ) : (
        <Typography
          variant={"subtitle2"}
          color="var(--rlm-text-color, #000)"
          style={{ opacity: 0.5 }}
        >
          no words in this space, add one to start
        </Typography>
      )}
    </Stack>
  );
};
function SingleWord({
  id,
  word,
  stamp,
  votes,
  vote,
  navLink,
  onKeyDown,
  Go,
  largeText,
  mostPopularDef,
}: any) {
  const [ourDownVoted, setOurDownVoted] = useState<boolean>(false);
  const [ourUpVoted, setOurUpVoted] = useState<boolean>(false);
  const [upVoteCount, setUpVoteCount] = useState<number>(0);
  const [downVoteCount, setDownVoteCount] = useState<number>(0);
  const our: string = (window as any)?.api?.ship || "";
  const wrapper: any = useRef(null);

  useEffect(() => {
    console.log("our", our);
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
    <Stack
      ref={wrapper}
      sx={{
        position: "relative",
        p: "6px 8px",

        borderRadius: "6px",
        "&:hover > #background": {
          backgroundColor: "var(--rlm-border-color, #e6e6e6)",
          transition: ".25s ease",
        },
        "&:focus > #background": {
          backgroundColor: "var(--rlm-border-color, #e6e6e6)",
          transition: ".25s ease",
          outline: "none",
        },
        "&:focus ": {
          outline: "none",
        },
      }}
      role="button"
      tabIndex={0}
      aria-label={"navigate to " + navLink}
      onKeyDown={(e) => onKeyDown(e, navLink)}
      onClick={() => {
        Go(navLink);
      }}
    >
      <Box
        id="background"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: ".5",
          zIndex: 0,
        }}
      ></Box>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        sx={{
          zIndex: 1,
        }}
      >
        <Typography
          variant={largeText ? "subtitle1" : "subtitle2"}
          fontWeight={"bold"}
          color="var(--rlm-text-color, #000)"
          sx={{ wordBreak: "break-word", marginLeft: "2px" }}
        >
          {word}
        </Typography>
        <Typography
          variant="subtitle2"
          color="var(--rlm-text-color, #000)"
          style={{ opacity: 0.5 }}
        >
          {"~" + stamp.poster}
        </Typography>
      </Stack>
      <Stack
        sx={{
          zIndex: 1,
        }}
      >
        <Typography
          variant={"subtitle2"}
          sx={{ wordBreak: "break-word", marginLeft: "2px" }}
          color="var(--rlm-text-color, #000)"
          style={{ opacity: 0.7 }}
        >
          {mostPopularDef}
        </Typography>
      </Stack>
      <Stack
        sx={{
          zIndex: 1,
        }}
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
          marginTop="2px"
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
                  backgroundColor: "rgba(78, 158, 253, 0.08)",
                },
              }}
              spacing={"4.75px"}
              role="button"
              onClick={(e) => {
                e.stopPropagation();
                wrapper.current?.blur();
                if (ourUpVoted) {
                  //we up voted already, remove the vote
                  vote(id, word, null, "word");
                } else {
                  //we haven't up voted, up vote this!
                  vote(id, word, true, "word");
                }
              }}
            >
              <ThumbUpOutlinedIcon
                style={{
                  fontSize: "18px",
                }}
                sx={{
                  color: ourUpVoted
                    ? "primary.main"
                    : "var(--rlm-icon-color, #85898E)",
                }}
              />
              <Typography
                variant="subtitle2"
                color={
                  ourUpVoted ? "primary.main" : "var(--rlm-icon-color, #85898E)"
                }
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
                  backgroundColor: "rgba(255, 98, 64, 0.08)",
                },
              }}
              spacing={"4.75px"}
              role="button"
              onClick={(e) => {
                e.stopPropagation();
                wrapper.current?.blur();
                if (ourDownVoted) {
                  //we down voted already, remove the vote
                  vote(id, word, null, "word");
                } else {
                  //we haven't down voted, down vote this!
                  vote(id, word, false, "word");
                }
              }}
            >
              <ThumbDownOutlinedIcon
                style={{ fontSize: "18px" }}
                sx={{
                  color: ourDownVoted
                    ? "error.main"
                    : "var(--rlm-icon-color, #85898E)",
                }}
              />
              <Typography
                variant="subtitle2"
                color={
                  ourDownVoted ? "error.main" : "var(--rlm-icon-color, #85898E)"
                }
              >
                {downVoteCount}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Typography
          variant="subtitle2"
          color="var(--rlm-text-color, #000)"
          style={{ opacity: 0.5 }}
        >
          {displayDate(stamp.posted, { long: false, dayOnly: false })}
        </Typography>
      </Stack>
    </Stack>
  );
}
export default Space;
