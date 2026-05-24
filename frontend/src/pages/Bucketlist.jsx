import React, { useState } from "react";
import robotImg from "../assets/robot.png";

export default function BucketList() {

  const [points] = useState(1250);

  const [showModal, setShowModal] =
    useState(false);

  const [newItem, setNewItem] =
    useState({
      title: "",
      points: "",
      image: "",
    });

  const [items, setItems] =
    useState([]);

  const addItem = () => {

    if (
      !newItem.title ||
      !newItem.points
    ) {
      return;
    }

    setItems([
      ...items,
      {
        id: Date.now(),
        ...newItem,
      },
    ]);

    setNewItem({
      title: "",
      points: "",
      image: "",
    });

    setShowModal(false);

  };

  return (
    <>
      <style>{`

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      body{
        background:#050816;
        font-family:'Segoe UI',sans-serif;
      }

      .bucket-page{
        min-height:100vh;
        background:
        linear-gradient(
          135deg,
          #050816,
          #08112b
        );

        padding:24px;
      }

      .bucket-layout{
        display:flex;
        gap:22px;
      }

      /* SIDEBAR */

      .sidebar{

        width:230px;

        background:
        linear-gradient(
          180deg,
          #091126,
          #050816
        );

        border:
        1px solid rgba(255,255,255,0.05);

        border-radius:26px;

        padding:22px 16px;

        height:calc(100vh - 48px);

        position:sticky;
        top:24px;
      }

      .logo{
        display:flex;
        align-items:center;
        gap:12px;

        margin-bottom:34px;
      }

      .logo-icon{

        width:50px;
        height:50px;

        border-radius:16px;

        background:
        linear-gradient(
          135deg,
          #6B5BFF,
          #8B5CFF
        );

        display:flex;
        align-items:center;
        justify-content:center;

        overflow:hidden;
      }

      .logo-icon img{
        width:40px;
      }

      .logo-text h2{
        color:white;
        font-size:22px;
        font-weight:900;
      }

      .logo-text p{
        color:#7E89BF;
        font-size:12px;
      }

      .menu{
        display:flex;
        flex-direction:column;
        gap:8px;
      }

      .menu-item{

        display:flex;
        align-items:center;

        gap:12px;

        padding:14px 14px;

        border-radius:14px;

        color:#7E89BF;

        font-size:14px;
        font-weight:700;

        cursor:pointer;

        transition:0.2s;
      }

      .menu-item:hover{
        background:
        rgba(255,255,255,0.04);

        color:white;
      }

      .menu-item.active{

        background:
        linear-gradient(
          135deg,
          #6B5BFF,
          #8B5CFF
        );

        color:white;

        box-shadow:
        0 10px 30px
        rgba(107,91,255,0.35);
      }

      .badge{

        margin-left:auto;

        background:#6B5BFF;

        width:22px;
        height:22px;

        border-radius:50%;

        display:flex;
        align-items:center;
        justify-content:center;

        font-size:11px;
      }

      /* MAIN */

      .main{
        flex:1;
      }

      .top-card{

        background:
        linear-gradient(
          135deg,
          rgba(107,91,255,0.18),
          rgba(91,78,255,0.06)
        );

        border:
        1px solid rgba(255,255,255,0.05);

        border-radius:28px;

        padding:30px;

        display:flex;
        justify-content:space-between;
        align-items:center;

        overflow:hidden;

        position:relative;

        margin-bottom:22px;
      }

      .top-card::before{

        content:"";

        position:absolute;

        width:280px;
        height:280px;

        background:
        radial-gradient(
          circle,
          rgba(107,91,255,0.22),
          transparent 70%
        );

        top:-120px;
        left:-120px;
      }

      .points-title{
        color:#8F98C7;
        font-size:14px;
        font-weight:700;
      }

      .points{
        color:white;
        font-size:52px;
        font-weight:900;
        margin:10px 0;
      }

      .week-points{
        color:#FFD86A;
        font-size:14px;
        font-weight:800;
      }

      .robot{
        width:170px;

        animation:bob 3s ease-in-out infinite;

        filter:
        drop-shadow(
          0 0 30px
          rgba(107,91,255,0.45)
        );
      }

      @keyframes bob{
        0%,100%{
          transform:translateY(0);
        }
        50%{
          transform:translateY(-10px);
        }
      }

      /* SECTION */

      .bucket-section{

        background:
        rgba(12,18,45,0.96);

        border:
        1px solid rgba(255,255,255,0.05);

        border-radius:28px;

        padding:28px;
      }

      .bucket-header{

        display:flex;
        justify-content:space-between;
        align-items:center;

        margin-bottom:24px;
      }

      .bucket-title{
        color:white;
        font-size:34px;
        font-weight:900;
      }

      .add-btn{

        border:none;

        background:
        linear-gradient(
          135deg,
          #6B5BFF,
          #8B5CFF
        );

        color:white;

        padding:14px 24px;

        border-radius:14px;

        font-size:14px;
        font-weight:800;

        cursor:pointer;

        box-shadow:
        0 10px 30px
        rgba(107,91,255,0.35);
      }

      /* GRID */

      .bucket-grid{

        display:grid;

        grid-template-columns:
        repeat(auto-fit,minmax(220px,1fr));

        gap:22px;
      }

      .bucket-card{

        background:
        rgba(255,255,255,0.04);

        border:
        1px solid rgba(255,255,255,0.05);

        border-radius:22px;

        overflow:hidden;

        transition:0.2s;
      }

      .bucket-card:hover{
        transform:translateY(-6px);
      }

      .bucket-image{

        width:100%;
        height:170px;

        object-fit:cover;

        background:#111827;
      }

      .bucket-content{
        padding:18px;
      }

      .bucket-name{
        color:white;
        font-size:18px;
        font-weight:800;
        margin-bottom:10px;
      }

      .bucket-points{
        color:#FFD86A;
        font-size:14px;
        font-weight:800;
      }

      .empty-box{

        padding:80px 20px;

        text-align:center;
      }

      .empty-box h2{
        color:white;
        font-size:32px;
        margin-bottom:10px;
      }

      .empty-box p{
        color:#7E89BF;
      }

      /* MODAL */

      .overlay{

        position:fixed;
        inset:0;

        background:
        rgba(0,0,0,0.6);

        display:flex;
        align-items:center;
        justify-content:center;

        z-index:999;
      }

      .modal{

        width:420px;

        background:#101935;

        border-radius:28px;

        padding:30px;

        border:
        1px solid rgba(255,255,255,0.05);
      }

      .modal h2{
        color:white;
        margin-bottom:24px;
      }

      .input{

        width:100%;
        height:52px;

        border:none;
        outline:none;

        border-radius:14px;

        background:
        rgba(255,255,255,0.05);

        padding:0 16px;

        color:white;

        margin-bottom:16px;
      }

      .buttons{
        display:flex;
        gap:14px;
      }

      .cancel{

        flex:1;

        height:50px;

        border:none;

        border-radius:14px;

        background:
        rgba(255,255,255,0.08);

        color:white;

        font-weight:700;

        cursor:pointer;
      }

      .save{

        flex:1;

        height:50px;

        border:none;

        border-radius:14px;

        background:
        linear-gradient(
          135deg,
          #6B5BFF,
          #8B5CFF
        );

        color:white;

        font-weight:800;

        cursor:pointer;
      }

      @media(max-width:1100px){

        .sidebar{
          display:none;
        }

      }

      @media(max-width:700px){

        .top-card{
          flex-direction:column;
          text-align:center;
          gap:20px;
        }

        .bucket-grid{
          grid-template-columns:1fr;
        }

        .modal{
          width:90%;
        }

      }

      `}</style>

      <div className="bucket-page">

        <div className="bucket-layout">


          {/* MAIN */}

          <div className="main">

            <div className="top-card">

              <div>

                <div className="points-title">
                  Your Dream Goals
                </div>

                <div className="points">
                  {points}
                </div>

                <div className="week-points">
                  Complete tasks and unlock items
                </div>

              </div>

              <img
                src={robotImg}
                alt="robot"
                className="robot"
              />

            </div>

            {/* BUCKET LIST */}

            <div className="bucket-section">

              <div className="bucket-header">

                <div className="bucket-title">
                  Bucket List
                </div>

                <button
                  className="add-btn"
                  onClick={() =>
                    setShowModal(true)
                  }
                >
                  + Add Item
                </button>

              </div>

              {items.length === 0 ? (

                <div className="empty-box">

                  <h2>
                    No Bucket List Items Yet
                  </h2>

                  <p>
                    Add your dream goals and
                    achieve them using points.
                  </p>

                </div>

              ) : (

                <div className="bucket-grid">

                  {items.map((item) => (

                    <div
                      className="bucket-card"
                      key={item.id}
                    >

                      {item.image ? (

                        <img
                          src={item.image}
                          alt="item"
                          className="bucket-image"
                        />

                      ) : (

                        <div className="bucket-image"/>
                      )}

                      <div className="bucket-content">

                        <div className="bucket-name">
                          {item.title}
                        </div>

                        <div className="bucket-points">
                          ⭐ {item.points} pts
                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}

      {showModal && (

        <div className="overlay">

          <div className="modal">

            <h2>
              Add Bucket List Item
            </h2>

            <input
              type="text"
              placeholder="Item Name"
              className="input"
              value={newItem.title}
              onChange={(e) =>
                setNewItem({
                  ...newItem,
                  title:e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Required Points"
              className="input"
              value={newItem.points}
              onChange={(e) =>
                setNewItem({
                  ...newItem,
                  points:e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Image URL"
              className="input"
              value={newItem.image}
              onChange={(e) =>
                setNewItem({
                  ...newItem,
                  image:e.target.value,
                })
              }
            />

            <div className="buttons">

              <button
                className="cancel"
                onClick={() =>
                  setShowModal(false)
                }
              >
                Cancel
              </button>

              <button
                className="save"
                onClick={addItem}
              >
                Save Item
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}