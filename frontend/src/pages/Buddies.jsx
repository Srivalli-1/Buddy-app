import React, { useState } from "react";
import robotGroup from "../assets/robot-group.png";

export default function Buddies() {

  const [activeTab, setActiveTab] =
    useState("All Buddies");

  return (
    <>
      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          background:#070b1d;
          font-family:'Nunito',sans-serif;
        }

        .buddies-page{
          min-height:100vh;

          display:flex;
          align-items:center;
          justify-content:center;

          padding:40px;

          background:
          radial-gradient(circle at top left,
          rgba(91,78,255,0.20),
          transparent 30%),

          radial-gradient(circle at bottom right,
          rgba(91,78,255,0.10),
          transparent 30%),

          #070b1d;
        }

        .buddies-card{

          width:100%;
          max-width:1100px;

          border-radius:36px;

          padding:32px;

          position:relative;

          overflow:hidden;

          background:
          linear-gradient(
            180deg,
            rgba(17,22,53,0.96),
            rgba(8,12,32,0.98)
          );

          border:1px solid rgba(255,255,255,0.06);

          box-shadow:
          0 25px 60px rgba(0,0,0,0.45),
          inset 0 1px 0 rgba(255,255,255,0.05);

          backdrop-filter:blur(20px);
        }

        .buddies-card::before{
          content:'';

          position:absolute;

          top:-150px;
          right:-150px;

          width:320px;
          height:320px;

          background:
          radial-gradient(
            circle,
            rgba(107,91,255,0.18),
            transparent 70%
          );

          border-radius:50%;
        }

        /* HEADER */

        .buddies-header{
          display:flex;
          align-items:center;
          justify-content:space-between;

          margin-bottom:28px;

          position:relative;
          z-index:2;
        }

        .buddies-title{
          color:#fff;

          font-size:38px;
          font-weight:900;

          letter-spacing:-1px;
        }

        .add-btn{
          border:none;
          outline:none;

          background:
          linear-gradient(
            135deg,
            #6B5BFF,
            #8B5CFF
          );

          color:white;

          font-size:14px;
          font-weight:800;

          padding:14px 22px;

          border-radius:16px;

          cursor:pointer;

          transition:0.25s;

          box-shadow:
          0 0 28px rgba(107,91,255,0.35);
        }

        .add-btn:hover{
          transform:translateY(-2px);
        }

        /* TABS */

        .tabs{
          display:flex;
          gap:14px;

          margin-bottom:30px;

          position:relative;
          z-index:2;

          flex-wrap:wrap;
        }

        .tab{
          padding:12px 18px;

          border-radius:14px;

          background:rgba(255,255,255,0.03);

          border:1px solid rgba(255,255,255,0.06);

          color:#8f97c0;

          font-size:13px;
          font-weight:700;

          cursor:pointer;

          transition:0.2s;
        }

        .tab.active{
          background:
          linear-gradient(
            135deg,
            #6B5BFF,
            #8B5CFF
          );

          color:white;

          border:none;

          box-shadow:
          0 0 18px rgba(107,91,255,0.35);
        }

        .badge{
          background:#4d5fff;

          color:white;

          border-radius:999px;

          padding:2px 7px;

          font-size:10px;

          margin-left:5px;
        }

        /* MAIN CONTENT */

        .main-content{
          display:grid;

          grid-template-columns:
          1fr 360px;

          gap:28px;

          align-items:stretch;
        }

        /* EMPTY STATE */

        .empty-box{
          width:100%;

          min-height:420px;

          border-radius:30px;

          border:1px dashed rgba(255,255,255,0.08);

          background:
          linear-gradient(
            135deg,
            rgba(255,255,255,0.03),
            rgba(255,255,255,0.01)
          );

          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;

          text-align:center;

          position:relative;
          overflow:hidden;
        }

        .empty-box::before{
          content:'';

          position:absolute;

          width:240px;
          height:240px;

          background:
          radial-gradient(
            circle,
            rgba(107,91,255,0.12),
            transparent 70%
          );

          border-radius:50%;

          top:-80px;
          left:-80px;
        }

        .empty-title{
          color:white;

          font-size:34px;
          font-weight:900;

          margin-bottom:14px;

          position:relative;
          z-index:2;
        }

        .empty-text{
          color:#8a93c5;

          font-size:16px;
          font-weight:600;

          line-height:1.8;

          max-width:360px;

          position:relative;
          z-index:2;
        }

        /* ROBOT SECTION */

        .robot-section{
          position:relative;

          border-radius:30px;

          overflow:hidden;

          padding:28px 22px;

          background:
          linear-gradient(
            180deg,
            rgba(22,27,61,0.95),
            rgba(10,15,38,0.98)
          );

          border:1px solid rgba(255,255,255,0.05);

          text-align:center;
        }

        .robot-section::before{
          content:'';

          position:absolute;

          width:320px;
          height:320px;

          left:50%;
          transform:translateX(-50%);

          bottom:-180px;

          background:
          radial-gradient(
            circle,
            rgba(107,91,255,0.45),
            transparent 70%
          );
        }

        .robot-img{
          width:320px;

          object-fit:contain;

          position:relative;
          z-index:2;

          margin-top:10px;

          filter:
          drop-shadow(
            0 0 35px rgba(107,91,255,0.45)
          );
        }

        .study-btn{
          margin-top:18px;

          width:100%;

          border:none;
          outline:none;

          padding:18px;

          border-radius:18px;

          background:
          linear-gradient(
            135deg,
            #6B5BFF,
            #8B5CFF
          );

          color:white;

          font-size:16px;
          font-weight:800;

          cursor:pointer;

          position:relative;
          z-index:2;

          transition:0.25s;

          box-shadow:
          0 0 28px rgba(107,91,255,0.35);
        }

        .study-btn:hover{
          transform:translateY(-2px);
        }

        /* RESPONSIVE */

        @media(max-width:900px){

          .main-content{
            grid-template-columns:1fr;
          }

          .robot-img{
            width:260px;
          }

          .empty-box{
            min-height:300px;
          }

        }

      `}</style>

      <div className="buddies-page">

        <div className="buddies-card">

          {/* HEADER */}

          <div className="buddies-header">

            <div className="buddies-title">
              Buddies
            </div>

            <button className="add-btn">
              + Add Buddy
            </button>

          </div>

          {/* TABS */}

          <div className="tabs">

            <div
              className={`tab ${
                activeTab === "All Buddies"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("All Buddies")
              }
            >
              All Buddies
            </div>

            <div
              className={`tab ${
                activeTab === "Requests"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("Requests")
              }
            >
              Requests
              <span className="badge">0</span>
            </div>

            <div
              className={`tab ${
                activeTab === "Study Rooms"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("Study Rooms")
              }
            >
              Study Rooms
            </div>

          </div>

          {/* MAIN CONTENT */}

          <div className="main-content">

            {/* EMPTY */}

            <div className="empty-box">

              <div className="empty-title">
                No Buddies Yet
              </div>

              <div className="empty-text">
                Add your study buddies and
                start collaborating together.
                Create rooms, share tasks,
                and stay productive.
              </div>

            </div>

            {/* ROBOT */}

            <div className="robot-section">

              <img
                src={robotGroup}
                alt="robot"
                className="robot-img"
              />

              <button className="study-btn">

                Create Study Room

              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}