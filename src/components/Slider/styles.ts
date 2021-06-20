import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: 16,
      margin: -16,
    },
    media: {
      width: "100%",
      height: 400,
      "@media (max-width: 700px)": {
        height: 300,
      },
    },
    scrollBox: {
      overflow: "scroll",
      background: "rgba(0,0,0,0.05)",
    },
    thumbnails: {
      display: "flex",
      width: "auto",
      padding: 4,
      "@media (max-width: 700px)": {
        padding: 2,
      },
    },
    thumbnail: {
      display: "block",
      minWidth: 100,
      width: 100,
      height: 100,
      margin: 4,
      "@media (max-width: 700px)": {
        minWidth: 60,
        width: 60,
        height: 60,
      },
    },
  })
);
