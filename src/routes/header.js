import React, { useEffect } from "react";
import {
  Typography,
  Button,
  Toolbar,
  AppBar,
  Box,
  Stack,
  ThemeProvider,
  Fab,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";
import { useCustomHooks } from "../components/context";
import Theme from "../components/theme";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
const Header = () => {
  const { isAuth, handleClickOpen } = useCustomHooks();
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            component="nav"
            sx={{ height: "5.4rem", background: "transparent" }}
          >
            <Toolbar>
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center", fontFamily: "fantasy" }}
              >
                <Link className="navLink" to="/">
                  <h4 className="header">
                    <span
                      style={{
                        fontSize: "4rem",
                        fontWeight: 600,
                        color: "blue",
                        fontFamily: "cursive",
                      }}
                    >
                      T
                    </span>
                    rend
                  </h4>
                </Link>
              </Typography>
              {isAuth ? (
                <Fab variant="extended" onClick={handleClickOpen}>
                  <FaSignOutAlt style={{ fontSize: "24px" }} />
                </Fab>
              ) : (
                <Link to="/login" className="loginbtn">
                  <Fab variant="extended" onClick={handleClickOpen}>
                    <FaSignInAlt style={{ fontSize: "24px" }} />
                  </Fab>{" "}
                </Link>
              )}
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ marginTop: "6rem" }}>
          <Typography
            color="secondary"
            variant="h4"
            sx={{
              fontFamily: "fantasy",
              fontSize: "1.2rem",
              textAlign: "center",
              textTransform: "capitalize",
              marginTop: 2,
            }}
          >
            viral blogging, share your thought to the world.
          </Typography>
        </Box>
        <div className="line"></div>
      </ThemeProvider>
    </>
  );
};

export default Header;
