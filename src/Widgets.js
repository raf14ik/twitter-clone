import React from "react";
import "./Widgets.css";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets_serachTcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>what's happening</h2>
        <TwitterTweetEmbed tweetId={"1189966818640900096"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ heigh: 300 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/react/"}
          options={{ text: "#reactjs is awesome", via: "Raf14ik" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
