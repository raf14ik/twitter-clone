import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Rafik hammas",
      username: "RafikHm",
      verified: true,
      text: tweetMessage,
      avatar:
        "http://4.bp.blogspot.com/-lv4FfhCfu-Y/VBGbeHnR4MI/AAAAAAAACWY/7hztd5j1Itc/w1200-h630-p-k-nu/Umberto%2BTozzi.jpg",
      image: tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="http://4.bp.blogspot.com/-lv4FfhCfu-Y/VBGbeHnR4MI/AAAAAAAACWY/7hztd5j1Itc/w1200-h630-p-k-nu/Umberto%2BTozzi.jpg"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="what's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageinput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
