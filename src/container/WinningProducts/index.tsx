import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Image from "@/components/Image";
import { useStyles } from "./styles";

const list = new Array(10).fill("xxx").map((_, idx) => {
  return {
    title: "DOWCH-00" + idx,
    image: "https://www.dowch.com/wp-content/uploads/2020/03/1.jpg",
  };
});

function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item>
          <div className={classes.tagsTitle}>Category</div>
          <br />
          <Button color="primary">All Products</Button>
        </Grid>

        <Grid item style={{ flex: 1 }}>
          <Grid container spacing={3}>
            {list.map((i) => {
              return (
                <Grid item xs={6} md={4}>
                  <div
                    className={classes.image}
                    style={{
                      backgroundImage: "url(" + i.image + ")",
                    }}
                  />
                  {i.title}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SimpleTabs;
