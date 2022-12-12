import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { Popup, Search, CustomButton } from "../";
import useLexiconStore from "../../store/lexiconStore";
import Stack from "@mui/material/Stack";
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
            <ArrowBackOutlinedIcon
              fontSize="medium"
              htmlColor="var(--rlm-icon-color, #85898E)"
            />
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
