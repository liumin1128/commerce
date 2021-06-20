import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    dl: {
      display: "flex",
      "& dt": {
        margin: 0,
        padding: 0,
        minWidth: 200,
        fontWeight: 500,
      },
      "& dd": {
        margin: 0,
        padding: 0,
        color: "#666",
      },
    },
  })
);
