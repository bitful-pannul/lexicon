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
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import StarIcon from "@mui/icons-material/Star";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { alpha, styled } from "@mui/material/styles";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    padding: "8px",
    backgroundColor: "#FCFCFC",
    fontSize: "14px",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(227, 227, 227, 0.7)",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "primary",
      borderWidth: "1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary",
      borderWidth: "1px",
    },
  },
});
const Navigation = () => {
  const { ship, group, word } = useParams();
  const navigate = useNavigate();
  const popup = useLexiconStore((state) => state.popup);
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      {popup && (
        <div className="flex justify-center">
          <Popup type={popup.type} message={popup.message} />
        </div>
      )}
      <IconBreadcrumbs group={group} ship={ship} word={word} />

      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="flex-start"
        marginTop={2}
      >
        <Search />
        <button
          style={{
            textAlign: "center",
            height: 30,
            padding: "8px 7px",
            borderRadius: "6px",
            backgroundColor: " rgba(78, 158, 253, 0.09)",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#4E9EFD",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 600,
          }}
          onClick={() => setModalOpen(true)}
        >
          Add word
        </button>
      </Stack>
      <WrapperBackground>
        <Stack marginBottom={"30px"}>
          <Stack flex={1} direction="row" justifyContent="space-between">
            <Typography fontWeight={"bold"} variant="h5">
              Based
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
                50
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
                onChange={handleChange}
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
              <Stack spacing={"6px"} marginTop={"10px"}>
                <Typography variant="subtitle2">
                  A word used when you agree with something; or when you want to
                  recognize someone for being themselves.
                </Typography>
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
                    >
                      <ThumbUpOutlinedIcon fontSize="18px" color="primary" />
                      <Typography variant="subtitle2" color="primary">
                        23
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
                    >
                      <ThumbDownOutlinedIcon
                        fontSize="18px"
                        htmlColor="rgba(51, 51, 51, 0.5)"
                      />
                      <Typography variant="subtitle2" color="text.secondary">
                        3
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="subtitle2" color="text.secondary">
                    ~lodlev-migdev
                  </Typography>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              Sentences
            </TabPanel>
          </Box>
        </Stack>
        <Stack alignItems={"flex-end"} spacing={"17px"}>
          <CustomTextField
            id="add-definition-textfield"
            variant="outlined"
            multiline
            placeholder="Add a new definition..."
            fullWidth
          />
          <button
            style={{
              textAlign: "center",
              height: 30,
              padding: "8px 7px",
              borderRadius: "6px",
              backgroundColor: "rgba(78, 158, 253, 0.09)",
              fontSize: "14px",
              lineHeight: "16px",
              color: "#4E9EFD",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 600,
            }}
            onClick={() => setModalOpen(true)}
          >
            Submit
          </button>
        </Stack>
      </WrapperBackground>
      <WrapperBackground>
        <Stack>
          <Typography
            fontWeight={"bold"}
            variant="h5"
            color={"rgba(51, 51, 51, 0.3)"}
            marginBottom={"18px"}
          >
            Type word
          </Typography>
          <Stack spacing={"12px"}>
            <FormControl variant="standard">
              <FormLabel
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "text.primary",
                  marginBottom: "6px",
                }}
                htmlFor="type-definition-textfield"
              >
                Definition <span style={{ color: "error" }}>*</span>
              </FormLabel>
              <CustomTextField
                id="type-definition-textfield"
                variant="outlined"
                multiline
                placeholder="Type your definition..."
                fullWidth
              />
            </FormControl>
            <FormControl variant="standard">
              <FormLabel
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "text.primary",
                  marginBottom: "6px",
                }}
                htmlFor="type-definition-textfield"
              >
                Sentence
              </FormLabel>
              <CustomTextField
                id="type-definition-textfield"
                variant="outlined"
                multiline
                placeholder="An example of how it's used..."
                fullWidth
              />
            </FormControl>
            <FormControl variant="standard">
              <FormLabel
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "text.primary",
                  marginBottom: "6px",
                }}
                htmlFor="type-definition-textfield"
              >
                Related
              </FormLabel>
              <CustomTextField
                id="type-definition-textfield"
                variant="outlined"
                multiline
                placeholder="Set related Words [apple,lemon,orange]..."
                fullWidth
              />
            </FormControl>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"flex-end"}
            spacing={"10px"}
            marginTop={"125px"}
          >
            <button
              style={{
                textAlign: "center",
                height: 30,
                padding: "8px 7px",
                borderRadius: "6px",
                fontSize: "14px",
                lineHeight: "16px",
                color: "rgba(51, 51, 51, 0.4)",
                fontFamily: "Rubik, sans-serif",
                fontWeight: 600,
              }}
              onClick={() => setModalOpen(true)}
            >
              Cancel
            </button>
            <button
              style={{
                textAlign: "center",
                height: 30,
                padding: "8px 7px",
                borderRadius: "6px",
                backgroundColor: "rgba(78, 158, 253, 0.09)",
                fontSize: "14px",
                lineHeight: "16px",
                color: "#4E9EFD",
                fontFamily: "Rubik, sans-serif",
                fontWeight: 600,
              }}
              onClick={() => setModalOpen(true)}
            >
              Submit
            </button>
          </Stack>
        </Stack>
      </WrapperBackground>

      <Outlet />
    </>
  );
};

export default Navigation;
function WrapperBackground({ children }) {
  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{
        margin: "20px 12px",
        backgroundColor: "#fff",
        border: "1px solid rgba(51, 51, 51, 0.12)",
        borderRadius: "6px",
        boxSizing: "border-box",
        padding: "16px",
      }}
    >
      {children}
    </Paper>
  );
}
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
