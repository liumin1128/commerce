import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";
import { useStyles } from "./styles";
import NavTabs from "@/components/NavTabs";
import MyButton from "@/components/Button";
import NavList from "@/config/nav";

export default function Header() {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <img
              onClick={() => {
                router.push("/");
              }}
              width={140}
              height={48}
              src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/common/common-footer-logo.jpg"
              alt=""
            />
            <Hidden smDown>
              <div className={classes.nav}>
                <NavTabs
                  navList={NavList}
                  onChange={(path: string) => {
                    router.push(path);
                  }}
                />
              </div>
              <MyButton>Contcat</MyButton>
            </Hidden>

            <Hidden smUp>
              <div className={classes.nav}></div>

              <IconButton
                onClick={() => {
                  setOpen(true);
                }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>

      <Box p={8}></Box>

      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box minWidth={248} p={2}>
          <List component="nav" aria-label="secondary mailbox folder">
            {NavList.map((i) => (
              <ListItem
                button
                onClick={() => {
                  router.push(i.pathname);
                }}
              >
                <ListItemText primary={i.label} />
              </ListItem>
            ))}
          </List>
          <Box p={2}></Box>

          <MyButton>Contcat</MyButton>
        </Box>
      </Drawer>
    </>
  );
}
