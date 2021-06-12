import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: 370,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);
