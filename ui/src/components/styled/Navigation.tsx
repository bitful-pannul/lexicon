import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { Search, CustomButton } from "../";
import useLexiconStore from "../../store/lexiconStore";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
const Navigation = () => {
  const [searchParams] = useSearchParams();
  const { ship, group, word } = useParams();
  //presisted space data for filtering search correctly
  const [space, setSpace] = useState<string>("");
  const navigate = useNavigate();
  const { setModalOpen, modalOpen, isAdminScry, isAdmin } = useLexiconStore();
  useEffect(() => {
    const spaceId = searchParams.get("spaceId");
    if (spaceId) {
      navigate("/apps/lexicon" + spaceId);
    }
  }, [searchParams.get("spaceId")]);
  useEffect(() => {
    //We care about knowing the space id, either through params {ship}/{group} or space id which is the same thing
    if (ship && group) {
      const space = `${ship}/${group}`;
      setSpace(space);
      isAdminScry(space);
    }
    //everytime we get a new space (ship/group) we check if we are admins on that space, via a scry
  }, [ship, group]);
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
        <Search space={space} />
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
