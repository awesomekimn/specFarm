import {
  ArrowForwardIos,
  Close,
  Person,
  PhoneIphone,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

import AskListItem from "../ask/AskListItem";

import styles from "../../styles/mypage/Frames.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

function Frames({ certs, asks, shares, user, attrCerts, setAttrCerts }) {
  const [userInfo, setUserInfo] = useState({});
  const [ask, setAsk] = useState({});
  const [share, setShare] = useState({});

  function deleteHandler(certIdx, userId) {
    // DB에서 날리기
    axios({
      method: "post",
      url: API_BASE_URL + "/mypage/deletefavcert",
      data: [certIdx, userId],
    })
      .then((response) => {
        if (response.data) {
          alert("삭제되었습니다.");
          // window.location.replace("/mypage");
          setAttrCerts(response.data);
        }
      })
      .catch((e) => {
        console.log("catch문 " + e);
      });
  }

  useEffect(() => {
    console.log(user);
    if (Object.keys(user).length !== 0)
      setUserInfo({
        ...user,
        userTel: user.userTel
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{1})(\d{3})(\d{1})(\d{3})/, "$1-$2***-$4***"),
      });
  }, [user, attrCerts]);

  useEffect(() => {
    if (asks.length !== 0) setAsk(asks[0]);
  }, [asks]);

  useEffect(() => {
    if (shares.length !== 0) setShare(shares[0]);
  }, [shares]);

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (e) => {
    setIsVisible((current) => !current);
  };

  return (
    <div>
      <div className={styles.mypageInnerContainer}>
        <div className={styles.frameTitle}>
          <h2>나의 텃밭</h2>
          <IconButton aria-label="details" href="/mypage/userinfo">
            <ArrowForwardIos className={styles.details} />
          </IconButton>
        </div>
        <div className={styles.frameContent}>
          <div className={styles.userInfo}>
            <h5>회원정보</h5>
            <div className={styles.userContent}>
              <Person color="action" inheritViewBox />
              <p className={styles.userDetail}>{user.userName}</p>
            </div>
            <div className={styles.userContent}>
              <PhoneIphone color="action" inheritViewBox />
              <p className={styles.userDetail} id="userTel">
                {userInfo.userTel}
              </p>
            </div>
          </div>
          <div className={styles.earned}>
            <h5>취득한 자격증</h5>

            {certs.map((cert) => (
              <div className={styles.earnedContent} key={cert.getCertIdx}>
                <p className={styles.earnedCertName}>{cert.certName}</p>
                <p className={styles.earnedCertDate}>
                  취득일: {cert.getCertDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.mypageInnerContainer}>
        <div className={styles.frameTitle}>
          <h2>내가 쓴 글</h2>
          <IconButton aria-label="details" href="/mypage/written">
            <ArrowForwardIos className={styles.details} />
          </IconButton>
        </div>

        <div className={styles.frameContent}>
          <div>
            <div className={styles.writtenTab}>
              <li>
                <input
                  className={styles.radioBtn}
                  type="radio"
                  name="tab"
                  id="ask"
                  defaultChecked
                  hidden
                  onClick={handleClick}
                />
                <label className={styles.tabs} htmlFor="ask">
                  무물방
                </label>
              </li>
              <li>
                <input
                  className={styles.radioBtn}
                  type="radio"
                  name="tab"
                  id="share"
                  hidden
                  onClick={handleClick}
                />
                <label className={styles.tabs} htmlFor="share">
                  나눔
                </label>
              </li>
            </div>
          </div>

          {Object.keys(ask).length !== 0 ? (
            isVisible && (
              <div className={styles.askList}>
                <NavLink key={ask.askIdx} to={`/community/ask/${ask.askIdx}`}>
                  {<AskListItem ask={ask} /> || "작성한 글이 없습니다."}
                </NavLink>
              </div>
            )
          ) : (
            <></>
          )}

          {Object.keys(share).length !== 0 ? (
            !isVisible && (
              <div>
                <NavLink key={share.shareIdx} to={`/community/share/${share.shareIdx}`}>
                  {(
                    <div className={styles.shareList}>
                      <img
                        src={share.itemImg}
                        alt="나눔이미지 파일"
                        className={styles.shareFile}
                      />
                      <div className={styles.shareContainer}>
                        <div className={styles.shareListHeader}>
                          <h1 className={styles.writtenTitle}>
                            {share.shareTitle}
                          </h1>
                          <p className={styles.shareRegDate}>{share.regDate}</p>
                        </div>
                        <p className={styles.shareContent}>{share.content}</p>
                      </div>
                    </div>
                  ) || "작성한 글이 없습니다."}
                </NavLink>
              </div>
            )
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className={styles.mypageInnerContainer}>
        <div className={styles.frameTitle}>
          <h2>관심 자격증</h2>
        </div>
        <div className={styles.frameContent}>
          <div className={styles.attactive}>
            {attrCerts.map((attrCert) => (
              <div key={attrCert.favCertIdx} className={styles.attractiveCert}>
                <a href={`/cert/${attrCert.certIdx}`}>{attrCert.certName}</a>
                <IconButton
                  aria-label="delete"
                  className="deleteBtn"
                  onClick={() =>
                    deleteHandler(attrCert.certIdx, attrCert.userId)
                  }
                >
                  <Close fontSize="small" className={styles.deleteBtn} />
                </IconButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frames;
