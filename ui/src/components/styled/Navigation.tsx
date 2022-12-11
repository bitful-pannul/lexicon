import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import {
  Popup,
  Search,
  WrappedBackground,
  CustomTextField,
  AddModal,
  CustomButton,
} from "../";
import useLexiconStore from "../../store/lexiconStore";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
const Navigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { ship, group, word } = useParams();

  const navigate = useNavigate();
  const popup = useLexiconStore((state) => state.popup);
  const { setModalOpen, modalOpen } = useLexiconStore();

  useEffect(() => {
    const spaceId = searchParams.get("spaceId");
    if (spaceId) {
      navigate("/apps/lexicon" + spaceId);
    }
  }, [searchParams.get("spaceId")]);
  return (
    <>
      {/*popup && (
        <div className="flex justify-center">
          <Popup type={popup.type} message={popup.message} />
        </div>
      )*/}

      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        marginTop={2}
      >
        {word && (
          <IconButton
            aria-label="navigate back"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackOutlinedIcon fontSize="medium" htmlColor="#8B8B8B" />
          </IconButton>
        )}
        <Search />
        {ship && group && !word && (
          <CustomButton onClick={() => setModalOpen(true)} disabled={modalOpen}>
            add word
          </CustomButton>
        )}
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
      sx={{ marginTop: 1 }}
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
