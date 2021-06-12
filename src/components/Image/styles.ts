import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundSize: "cover",
      width: "100%",
      height: 0,
    },
  })
);
