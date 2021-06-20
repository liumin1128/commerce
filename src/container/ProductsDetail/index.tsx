import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { useStyles } from "./styles";

const list = new Array(10).fill("xxx").map((_, idx) => {
  return {
    title: "DOWCH-00" + idx,
    image: "https://www.dowch.com/wp-content/uploads/2020/03/1.jpg",
  };
});

function SimpleTabs() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          22
        </Grid>

        <Grid item xs={12} md={6}>
          111
        </Grid>
      </Grid>
    </div>
  );
}

export default SimpleTabs;
