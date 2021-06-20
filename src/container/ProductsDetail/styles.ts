import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    image: {
      width: "100%",
      height: 0,
      paddingTop: "100%",
      backgroundSize: "100%",
      backgroundPosition: "center",
      transition: "background-size 0.3s",
      "&:hover": {
        backgroundSize: "120%",
      },
    },
    tagsTitle: {
      fontWeight: 700,
      fontSize: "20px",
      width: "100%",
      minWidth: "300px",
      textAlign: "center",
      lineHeight: "64px",
      color: "#fff",
      background: "linear-gradient(90deg,#248dff 0%,#79d3ed 100%)",
    },
  })
);
