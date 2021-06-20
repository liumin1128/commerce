import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import CardMedia from "@material-ui/core/CardMedia";
import { useStyles } from "./styles";

interface Props {
  images: string[];
}

function Slider({ images = [] }: Props) {
  const classes = useStyles();

  const [current, setCurrent] = useState(0);

  function handleChange(idx: number) {
    setCurrent(idx);
  }

  return (
    <div className={classes.root}>
      <SwipeableViews
        index={current}
        onChangeIndex={handleChange}
        enableMouseEvents
      >
        {images.map((i: string) => (
          <CardMedia
            key={i}
            className={classes.media}
            image={i}
            title="Contemplative Reptile"
          />
        ))}
      </SwipeableViews>
      {images && images.length > 1 && (
        <div className={classes.scrollBox}>
          <div className={classes.thumbnails}>
            {images.map((i: string, idx: number) => (
              <CardMedia
                key={i}
                className={classes.thumbnail}
                style={{
                  border: idx === current ? "5px #3097fc solid" : undefined,
                }}
                image={i}
                // title="Contemplative Reptile"
                onClick={() => {
                  handleChange(idx);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
