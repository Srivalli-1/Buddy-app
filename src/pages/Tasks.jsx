import React, { useState } from "react";
import robotImg from "../assets/robot.png";

const CATEGORIES = ["All", "Study", "Personal", "Health", "Coding"];

const initialTasks = [
  {
    _id: "1",
    title: "React Project UI",
    category: "Study",
    color: "#5C4EFF",
    time: "10:00 AM",
    group: "Today",
    done: true,
  },
  {
    _id: "2",
    title: "Data Structures Revision",
    category: "Study",
    color: "#5C4EFF",
    time: "12:30 PM",
    group: "Today",
    done: false,
  },
  {
    _id: "3",
    title: "MongoDB Practice",
    category: "Coding",
    color: "#00C896",
    time: "03:00 PM",
    group: "Today",
    done: false,
  },
  {
    _id: "4",
    title: "English Essay Writing",
    category: "Personal",
    color: "#C94EFF",
    time: "05:00 PM",
    group: "Tomorrow",
    done: false,
  },
  {
    _id: "5",
    title: "Gym & Fitness",
    category: "Health",
    color: "#FF9F00",
    time: "07:00 PM",
    group: "Tomorrow",
    done: false,
  },
  {
    _id: "6",
    title: "Python Basics",
    category: "Coding",
    color: "#00C896",
    time: "Yesterday",
    group: "Completed",
    done: true,
  },
];

export default function MyTasks() {

  const [tasks, setTasks] = useState(initialTasks);
  const [activeFilter, setActiveFilter] = useState("All");

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task._id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  const filteredTasks =
    activeFilter === "All"
      ? tasks
      : tasks.filter(
          (task) => task.category === activeFilter
        );

  const groups = ["Today", "Tomorrow", "Completed"];

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
          background:#080c20;
        }

        .mt-page{
          min-height:100vh;
          width:100%;
          font-family:'Nunito',sans-serif;
          color:#fff;

          background:
          radial-gradient(circle at top left,
          rgba(91,78,255,0.22),
          transparent 30%),

          radial-gradient(circle at bottom right,
          rgba(91,78,255,0.10),
          transparent 25%),

          #080c20;

          padding:40px 0 120px;
          position:relative;
          overflow:hidden;
        }

        .mt-inner{
          width:100%;
          max-width:760px;

          margin-left:140px;

          padding:0 24px;

          position:relative;
          z-index:2;
        }

        /* HEADER */

        .mt-header{
          display:flex;
          justify-content:space-between;
          align-items:center;

          margin-bottom:30px;
        }

        .mt-title{
          font-size:38px;
          font-weight:900;

          letter-spacing:-1px;

          background:
          linear-gradient(
            90deg,
            #ffffff,
            #c9d1ff
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .mt-add-btn{
          border:none;
          outline:none;

          padding:14px 28px;

          border-radius:16px;

          background:
          linear-gradient(
            135deg,
            #6B5BFF,
            #8B5CFF
          );

          color:white;

          font-size:14px;
          font-weight:800;

          cursor:pointer;

          font-family:'Nunito',sans-serif;

          box-shadow:
          0 12px 35px rgba(107,91,255,0.35);

          transition:0.25s;
        }

        .mt-add-btn:hover{
          transform:translateY(-2px) scale(1.03);

          box-shadow:
          0 18px 40px rgba(107,91,255,0.42);
        }

        /* FILTERS */

        .mt-filters{
          display:flex;
          gap:12px;

          flex-wrap:wrap;

          margin-bottom:36px;
        }

        .mt-filter{
          padding:10px 22px;

          border-radius:999px;

          border:1px solid rgba(255,255,255,0.08);

          background:rgba(255,255,255,0.03);

          color:#8d95be;

          font-size:13px;
          font-weight:700;

          cursor:pointer;

          transition:0.2s;

          font-family:'Nunito',sans-serif;
        }

        .mt-filter:hover{
          border-color:rgba(107,91,255,0.45);

          color:#dce1ff;

          transform:translateY(-1px);
        }

        .mt-filter.active{
          background:
          linear-gradient(
            135deg,
            #6B5BFF,
            #8B5CFF
          );

          color:white;

          border:none;

          box-shadow:
          0 0 18px rgba(107,91,255,0.45);
        }

        /* GROUP */

        .mt-group{
          margin-bottom:36px;
        }

        .mt-group-label{
          font-size:23px;
          font-weight:900;

          margin-bottom:16px;

          letter-spacing:-0.4px;
        }

        /* TASK */

        .mt-task{
          display:flex;
          align-items:center;

          gap:14px;

          padding:18px 22px;

          background:
          linear-gradient(
            135deg,
            rgba(255,255,255,0.05),
            rgba(255,255,255,0.02)
          );

          border:1px solid rgba(255,255,255,0.05);

          border-radius:20px;

          margin-bottom:14px;

          transition:0.25s;

          backdrop-filter:blur(10px);

          cursor:pointer;
        }

        .mt-task:hover{
          transform:translateY(-2px);

          border-color:rgba(107,91,255,0.28);

          box-shadow:
          0 8px 28px rgba(0,0,0,0.25),
          0 0 20px rgba(107,91,255,0.12);
        }

        /* CHECKBOX */

        .mt-check{
          width:23px;
          height:23px;

          border-radius:7px;

          border:2px solid rgba(255,255,255,0.18);

          flex-shrink:0;

          display:flex;
          align-items:center;
          justify-content:center;

          transition:0.2s;
        }

        .mt-check.checked{
          background:#6B5BFF;

          border-color:#6B5BFF;
        }

        .mt-check.checked.completed{
          background:#00C896;

          border-color:#00C896;
        }

        .mt-check.checked::after{
          content:'';

          width:5px;
          height:9px;

          border:2px solid #fff;

          border-top:none;
          border-left:none;

          transform:rotate(45deg) translateY(-1px);
        }

        /* TASK NAME */

        .mt-task-name{
          flex:1;

          font-size:16px;
          font-weight:700;

          color:#edf1ff;

          letter-spacing:0.1px;
        }

        .mt-task.completed-row .mt-task-name{
          text-decoration:line-through;

          color:#596083;
        }

        /* CATEGORY */

        .mt-cat{
          padding:6px 15px;

          border-radius:999px;

          font-size:11.5px;
          font-weight:800;

          flex-shrink:0;

          backdrop-filter:blur(10px);
        }

        /* TIME */

        .mt-time{
          min-width:78px;

          text-align:right;

          color:#7f88b2;

          font-size:12px;
          font-weight:700;

          flex-shrink:0;
        }

        /* ROBOT */

        .mt-robot-wrap{
          position:fixed;

          right:40px;
          bottom:40px;

          z-index:1;

          pointer-events:none;
        }

        .mt-robot-img{
          width:340px;

          object-fit:contain;

          opacity:0.95;

          filter:
          drop-shadow(
            0 0 55px rgba(107,91,255,0.55)
          );

          animation:bob 3s ease-in-out infinite;
        }

        @keyframes bob{

          0%,100%{
            transform:translateY(0);
          }

          50%{
            transform:translateY(-12px);
          }

        }

        /* GLOWS */

        .mt-glow{
          position:fixed;

          border-radius:50%;

          pointer-events:none;

          z-index:0;
        }

        .mt-glow-1{
          width:170px;
          height:170px;

          right:120px;
          bottom:80px;

          background:
          radial-gradient(
            circle,
            rgba(91,78,255,0.35),
            transparent 70%
          );
        }

        .mt-glow-2{
          width:90px;
          height:90px;

          left:120px;
          top:120px;

          background:
          radial-gradient(
            circle,
            rgba(0,200,150,0.18),
            transparent 70%
          );
        }

        /* RESPONSIVE */

        @media(max-width:1200px){

          .mt-inner{
            margin:auto;
          }

          .mt-robot-img{
            width:220px;
            opacity:0.25;
          }

        }

        @media(max-width:768px){

          .mt-page{
            padding:30px 0 100px;
          }

          .mt-inner{
            padding:0 18px;
          }

          .mt-header{
            flex-direction:column;
            align-items:flex-start;
            gap:18px;
          }

          .mt-title{
            font-size:30px;
          }

          .mt-task{
            padding:16px;
          }

          .mt-task-name{
            font-size:14px;
          }

          .mt-time{
            display:none;
          }

          .mt-robot-wrap{
            right:-20px;
            bottom:0;
          }

          .mt-robot-img{
            width:170px;
            opacity:0.18;
          }

        }

      `}</style>

      <div className="mt-page">

        <div className="mt-inner">

          {/* HEADER */}

          <div className="mt-header">

            <div className="mt-title">
              My Tasks
            </div>

            <button className="mt-add-btn">
              ＋ Add Task
            </button>

          </div>

          {/* FILTERS */}

          <div className="mt-filters">

            {CATEGORIES.map((category) => (

              <button
                key={category}
                className={`mt-filter ${
                  activeFilter === category
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveFilter(category)
                }
              >
                {category}
              </button>

            ))}

          </div>

          {/* GROUPS */}

          {groups.map((group) => {

            const groupTasks =
              filteredTasks.filter(
                (task) => task.group === group
              );

            if (!groupTasks.length) return null;

            return (

              <div
                className="mt-group"
                key={group}
              >

                <div className="mt-group-label">
                  {group}
                </div>

                {groupTasks.map((task) => (

                  <div
                    key={task._id}
                    className={`mt-task ${
                      group === "Completed"
                        ? "completed-row"
                        : ""
                    }`}
                    onClick={() =>
                      toggleTask(task._id)
                    }
                  >

                    <div
                      className={`mt-check ${
                        task.done
                          ? `checked ${
                              group === "Completed"
                                ? "completed"
                                : ""
                            }`
                          : ""
                      }`}
                    />

                    <div className="mt-task-name">
                      {task.title}
                    </div>

                    <div
                      className="mt-cat"
                      style={{
                        background: `${task.color}22`,
                        color: task.color,
                        border: `1px solid ${task.color}55`,
                      }}
                    >
                      {task.category}
                    </div>

                    <div className="mt-time">
                      {task.time}
                    </div>

                  </div>

                ))}

              </div>

            );
          })}

        </div>

        {/* ROBOT */}

        <div className="mt-robot-wrap">

          <img
            src={robotImg}
            alt="robot"
            className="mt-robot-img"
          />

        </div>

        {/* GLOWS */}

        <div className="mt-glow mt-glow-1"></div>
        <div className="mt-glow mt-glow-2"></div>

      </div>
    </>
  );
}