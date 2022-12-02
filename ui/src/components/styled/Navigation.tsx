import React from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { Popup, Search } from "../";
import useLexiconStore from "../../store/lexiconStore";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Navigation = () => {
  const { ship, group, word } = useParams();
  const navigate = useNavigate();
  const { setModalOpen } = useLexiconStore();
  const popup = useLexiconStore((state) => state.popup);

  return (
    <>
      {popup && (
        <div className="flex justify-center">
          <Popup type={popup.type} message={popup.message} />
        </div>
      )}
      <IconBreadcrumbs group={group} ship={ship} word={word} />

      <Stack direction="row" spacing={1} alignItems="flex-start" marginTop={1}>
        <Search />
        <Button
          size="small"
          variant="contained"
          sx={{ height: 38 }}
          onClick={() => setModalOpen(true)}
        >
          Add word
        </Button>
      </Stack>
      <Outlet />
    </>
  );
};

export default Navigation;

function IconBreadcrumbs({ group, ship, word }: any) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color={!ship || !group ? "text.primary" : "inherit"}
        href="/apps/lexicon/"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>
      {ship && group && (
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color={!word ? "text.primary" : "inherit"}
          href={`/apps/lexicon/${ship}/${group}`}
        >
          <GroupOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {ship}/{group}
        </Link>
      )}
      {ship && group && word && (
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          <AutoStoriesOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {word}
        </Typography>
      )}
    </Breadcrumbs>
  );
}
