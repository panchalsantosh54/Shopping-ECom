import { useState } from "react";
import "./style2.css";

export default function LikeButton() {
  var [likeCounter, setlikecounter] = useState(0);
  // processing
  function onClickHandler() {
    console.log("clicked!");
    likeCounter = likeCounter + 1;
    console.log(likeCounter);
    setlikecounter(likeCounter);
  }

  return (
    <div className="AppL">
      {/* input */}
      <button
        onClick={onClickHandler}
        style={{ background: "violet", padding: "1rem" }}
      >
        Like
        {/* output */}
      </button>
      <p>Liked {likeCounter}</p>
    </div>
  );
}
