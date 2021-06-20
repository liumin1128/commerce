import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Slider from "@/components/Slider";
import Button from "@/components/Button";

import { useStyles } from "./styles";

function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Slider
            images={[
              "https://www.dowch.com/wp-content/uploads/2020/03/1.jpg",
              "https://www.dowch.com/wp-content/uploads/2020/03/2.jpg",
              "https://www.dowch.com/wp-content/uploads/2020/03/4.jpg",
              "https://www.dowch.com/wp-content/uploads/2020/03/6.jpg",
              "https://www.dowch.com/wp-content/uploads/2020/03/3.jpg",
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h2">DOWCH-001</Typography>
          <Box p={2} />
          <Typography variant="h6">Specifications</Typography>
          <Box p={1} />

          <dl className={classes.dl}>
            <dt>Product name: </dt>
            <dd>Electric massage comb</dd>
          </dl>

          <dl className={classes.dl}>
            <dt>Function: </dt>
            <dd> Hair care</dd>
          </dl>

          <dl className={classes.dl}>
            <dt>Material: </dt>
            <dd>Bristle & Nylon and plastic</dd>
          </dl>

          <dl className={classes.dl}>
            <dt>Usage: </dt>
            <dd>Suitable for all hair</dd>
          </dl>

          <dl className={classes.dl}>
            <dt>Length: </dt>
            <dd> 12 inch</dd>
          </dl>

          <dl className={classes.dl}>
            <dt>Power source: </dt>
            <dd>2*AA battery</dd>
          </dl>

          <Box p={1} />

          <Button>Get Free Quote </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SimpleTabs;
