import React, { useState } from "react";
import defaultProfile from "../../images/defaultProfile.png";
import AskReReply from "./AskReReply";
import AskReplyRegBox from "./AskReplyRegBox";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

const AskDetailReply = ({ reply }) => {
  const [reReplyList, setReReplyList] = useState([]);
  function toggleRereply() {
    let rereplyContainer = document.querySelector(
      ".rereplyContainer" + reply.askReplyIdx
    );
    if (rereplyContainer.style.display === "none") {
      axios({
        method: "get",
        url: API_BASE_URL + "/community/ask/" + reply.askIdx + "/rereply",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
        },
        params: { replyIdx: reply.askReplyIdx },
      }).then((response) => {
        setReReplyList(response.data.data);
      });

      rereplyContainer.style.display = "block";
    } else {
      rereplyContainer.style.display = "none";
    }
  }

  const insertAskReReply = (askReReply) => {
    axios({
      method: "post",
      url: API_BASE_URL + `/community/ask/${reply.askIdx}/insertReReply`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      data: askReReply,
    }).then((response) => {
      setReReplyList(response.data.askReReplyList);
    });
  };

  return (
    <>
      <div id="askReplyBox" className="askReplyBox">
        <img
          id="profileImg"
          src={
            reply.user
              ? "/upload/profile/" + reply.user.userProfileName
              : defaultProfile
          }
          alt="프로필사진"
        />
        <div id="replyBox">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {reply.user && reply.user.userNick}
            <p style={{ fontSize: "0.8rem", color: "rgb(100, 100, 100)" }}>
              {reply.askReplyRegDate}
            </p>
          </div>
          <div className="askReplyContent">{reply.askReplyContent}</div>
          <div className="rereplyOpen">
            <p onClick={toggleRereply}>답글 {reply.countReReply || null}</p>
          </div>
        </div>
      </div>
      <div
        className={"rereplyContainer" + reply.askReplyIdx}
        style={{ display: "none", marginLeft: "50px" }}
      >
        <div>
          <AskReplyRegBox
            style={{ maxWidth: "450px" }}
            insertAskReReply={insertAskReReply}
            askReplyIdx={reply.askReplyIdx}
            askIdx={reply.askIdx}
            reply={reply}
          />
        </div>
        {reReplyList.map((reReply) => (
          <div key={reReply.askReReplyIdx} style={{ display: "flex" }}>
            <AskReReply reReply={reReply} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AskDetailReply;
