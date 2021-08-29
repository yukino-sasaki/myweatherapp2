import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Icon from "./icon";
import Media from "react-responsive";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
    maxWidth: "60vw",
    backgroundColor: theme.palette.background.paper,
  },
  media_root: {
    margin: "auto",
    width: "100%",
    maxWidth: "70vw",
    backgroundColor: theme.palette.background.paper,
  },
}));

//3時間ごとのデータ
const EveryHourData = (props) => {
  const classes = useStyles();
  return (
    <>
      <Media query="(min-width: 751px)">
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Icon props={props.weather} size="30" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`weather:  ${props.weather},     temperature: ${props.temp} ℃`}
              secondary={props.dateTime}
            />
          </ListItem>
        </List>
      </Media>
      <Media query="(max-width: 750px)">
        <List className={classes.media_root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Icon props={props.weather} size="30" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`weather:  ${props.weather},     temperature: ${props.temp} ℃`}
              secondary={props.dateTime}
            />
          </ListItem>
        </List>
      </Media>
    </>
  );
};

export default EveryHourData;
