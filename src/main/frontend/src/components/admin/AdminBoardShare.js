import React from "react";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate, useLocation } from "react-router";

const AdminBoardShare = ({
  style,
  board,
  index,
  expanded,
  handleChange,
  Accordion,
  AccordionSummary,
  AccordionDetails,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {!!board ? (
        <Accordion
          expanded={expanded === `pane${index}`}
          onChange={handleChange(`pane${index}`)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <table className={style.table} style={{ minHeight: "35px" }}>
              <tbody>
                <tr>
                  <td className={style.boardNo}>{board.shareIdx}</td>
                  <td className={style.boardTitle}>{board.shareTitle}</td>
                  <td className={style.boardWriter}>{board.user.userId}</td>
                  <td className={style.boardCount}>{board.shareCount}</td>
                  <td className={style.boardRegDate}>{board.shareRegDate}</td>
                </tr>
              </tbody>
            </table>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <table className={style.detailTable}>
              <tbody>
                <tr>
                  <td className={style.detailTitle}>제목</td>
                  <td className={style.detailValue}>{board.shareTitle}</td>
                </tr>
                <tr>
                  <td className={style.detailTitle}>작성자</td>
                  <td className={style.detailValue}>
                    {board.user.userNick}
                    {`(${board.user.userId})`}
                  </td>
                </tr>
                <tr>
                  <td className={style.detailTitle}>댓글수</td>
                  <td className={style.detailValue}>{board.countReply}</td>
                </tr>
                <tr>
                  <td className={style.detailTitle}>상태</td>
                  <td className={style.detailValue}>
                    {board.shareYn === "Y" ? "나눔" : "나눔완료"}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "0.9rem",
              }}
            >
              <IconButton
                color="success"
                style={{
                  width: "30px",
                  height: "30px",
                }}
                onClick={() => navigate(`/community/share/${board.shareIdx}`)}
              >
                <ArrowForwardIcon />
              </IconButton>
              <IconButton
                color="error"
                style={{
                  width: "30px",
                  height: "30px",
                }}
              >
                <DeleteForeverIcon />
              </IconButton>
            </div>
          </AccordionDetails>
        </Accordion>
      ) : null}
    </>
  );
};

export default AdminBoardShare;
