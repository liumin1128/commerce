import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import { useRouter } from "next/router";
import { useStyles } from "./styles";
import NavTabs from "@/components/NavTabs";
import Button from "@/components/Button";
import NavList from "@/config/nav";

export default function Header() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <AppBar position="static" className={classes.root}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <img
            width={140}
            height={48}
            src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/common/common-footer-logo.jpg"
            alt=""
          />
          <div className={classes.nav}>
            <Hidden smDown>
              <NavTabs
                navList={NavList}
                onChange={(path: string) => {
                  router.push(path);
                }}
              />
            </Hidden>
          </div>
          <Button>Contcat</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
