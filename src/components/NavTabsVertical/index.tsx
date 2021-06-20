import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useStyles } from "./styles";

interface Item {
  value: string;
  label: string;
}

interface Props {
  navList: Item[];
  onChange?: (value: string) => void;
}

function SimpleTabs({ navList = [], onChange }: Props) {
  const [tab, setTab] = useState("1");
  const classes = useStyles();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={tab}
      onChange={(_, e) => {
        setTab(e);
        if (typeof onChange === "function") {
          onChange(e);
        }
      }}
      aria-label="Vertical tabs example"
      classes={{
        indicator: classes.indicator,
      }}
      TabIndicatorProps={{ children: <div /> }}
    >
      {navList.map((i) => (
        <Tab
          key={i.value}
          label={i.label}
          value={i.value}
          classes={{ root: classes.tab, wrapper: classes.wrapper }}
        />
      ))}
    </Tabs>
  );
}

export default SimpleTabs;
