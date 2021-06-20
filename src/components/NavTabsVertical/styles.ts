import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    tab: {
      minWidth: "auto",
      fontWeight: "bold",
      color: "#222c47",
      // padding: 0,
      textTransform: "capitalize",
      textAlign: "left",
      fontSize: 16,
      marginBottom: 20,
      minHeight: "auto",
      height: "auto",
    },
    wrapper: {
      textAlign: "left",
      display: "block",
      padding: 0,
    },
    indicator: {
      display: "flex",
      justifyContent: "center",
      width: 5,
      borderRadius: 10,
      backgroundColor: theme.palette.primary.main,
    },
  })
);
