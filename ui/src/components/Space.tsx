import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLexiconStore from "../store/lexiconStore";
import { WrappedBackground } from "./index";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { displayDate } from "../time";
//TODO: add upvote and downvote elements the word element
const Space = () => {
  const lex = useLexiconStore((state) => state.lex);
  const modalOpen = useLexiconStore((state) => state.modalOpen);
  const wl = useLexiconStore((state) => state.whitelist);

  const { setModalOpen } = useLexiconStore();
  const navigate = useNavigate();

  const { ship, group } = useParams();

  const setModal = (val: boolean) => {
    setModalOpen(val);
  };

  const spaceLex = () => {
    try {
      //@ts-ignore handled if undefined
      return lex[`${ship}/${group}`];
    } catch {
      return undefined;
    }
  };

  const spacePerms = () => {
    try {
      //@ts-ignore handled if undefined
      return wl[`${ship}/${group}`];
    } catch {
      return undefined;
    }
  };

  const isOur = () => {
    const our: string = "~" + (window as any)?.api?.ship || "";
    return our === ship;
  };

  const items = spaceLex()
    ? Object.entries(lex[`${ship}/${group}`])?.map((word, i) => {
        return word;
      })
    : [];

  //@ts-ignore if modalOpen then AddModal will render
  return (
    <>
      {/* @ts-ignore is defined if goes through*/}
      {/*isOur() && spacePerms() && (
        <Perms members={spacePerms()?.members} perms={spacePerms()?.perms} />
      )*/}

      {/*@ts-ignore nullcheck in place*/}
      <WrappedBackground styles={{ padding: "6px 8px" }}>
        <WordItem items={items} clearSearch={() => null} largeText />
      </WrappedBackground>
    </>
  );
};

const WordItem = ({ items, clearSearch, largeText = false }: any) => {
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

  const ourUpVoted = false;
  const ourDownVoted = false;
  const downVotes = [];
  const upVotes = [];
  const vote = (id: string, type: string) => {
    return null;
  };
  //          tabindex={0}
  return (
    <Stack direction="column" padding={"5px"}>
      {items?.length > 0 ? (
        items.map((item: any, index: number) => {
          const word = item[0];
          const stamp = item[1].stamp;
          const navLink = `${ship}/${group}/${word}`;

          return (
            <Stack
              key={"search-result-" + index}
              sx={{
                p: "6px 8px",
                "&:hover": {
                  backgroundColor: "#F9F9F9",
                },
                "&:focus": {
                  backgroundColor: "#F9F9F9",
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
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Typography
                  variant={largeText ? "subtitle1" : "subtitle2"}
                  fontWeight={"bold"}
                  sx={{ wordBreak: "break-word", marginLeft: "2px" }}
                >
                  {word}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {"~" + stamp.poster}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"space-between"}
              >
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
                      }}
                      spacing={"4.75px"}
                      role="button"
                      onClick={() => {
                        if (ourUpVoted) {
                          //we up voted already, remove the vote
                          //TODO: remove vote
                        } else {
                          //we haven't up voted, up vote this!
                          vote("id", "upvotes");
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
                            : "rgba(51, 51, 51, 0.5)",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        color={
                          ourUpVoted ? "primary.main" : "rgba(51, 51, 51, 0.5)"
                        }
                      >
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
                        backgroundColor: ourDownVoted
                          ? "rgba(255, 98, 64, 0.08)"
                          : "default",
                      }}
                      spacing={"4.75px"}
                      role="button"
                      onClick={() => {
                        if (ourDownVoted) {
                          //we down voted already, remove the vote
                          //TODO: remove vote
                        } else {
                          //we haven't down voted, down vote this!
                          vote("id", "downvotes");
                        }
                      }}
                    >
                      <ThumbDownOutlinedIcon
                        style={{ fontSize: "18px" }}
                        sx={{
                          color: ourDownVoted
                            ? "error.main"
                            : "rgba(51, 51, 51, 0.5)",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        color={
                          ourDownVoted ? "error.main" : "rgba(51, 51, 51, 0.5)"
                        }
                      >
                        {downVotes?.length}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Typography variant="caption" color="text.secondary">
                  {displayDate(stamp.posted, { long: false, dayOnly: false })}
                </Typography>
              </Stack>
            </Stack>
          );
        })
      ) : (
        <Typography variant={"subtitle2"} color="text.secondary">
          no words in this space, add one to start
        </Typography>
      )}
    </Stack>
  );
};
export default Space;
