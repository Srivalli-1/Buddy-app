import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import robotImg from "../assets/robot.png";
import heroBg from "../assets/hero-bg.png";

export default function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [user, setUser] = useState({
    name: "Srivalli",
  });

  // Dynamic Tasks
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
  });

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchDashboardData = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://buddy-app.onrender.com/api/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://buddy-app.onrender.com/api/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const tasks = response.data;
      const completed = tasks.filter(
        (task) => task.completed
      ).length;
      setStats({
        total: tasks.length,
        completed,
        pending: tasks.length - completed,
      });
    } catch (error) {
      console.log(error);
    }
  };

  /* ================= TASK STATS ================= */

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  /* ================= GREETING ================= */

  const getHour = () => new Date().getHours();

  const greeting =
    getHour() < 12
      ? "Good Morning"
      : getHour() < 17
      ? "Good Afternoon"
      : "Good Evening";

  const cardStyle = {
    background: "#11182b",
    padding: "25px",
    borderRadius: "20px",
    minWidth: "220px",
    color: "white",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  };

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
          background:#070b17;
          overflow-x:hidden;
          font-family:'Nunito',sans-serif;
        }

        .db-wrap{
          display:flex;
          min-height:100vh;
          background:#070b17;
          color:white;
        }

        /* SIDEBAR */

        .db-sidebar{
          width:240px;
          min-height:100vh;
          background:#0d1324;
          border-right:1px solid rgba(255,255,255,0.05);
          padding:24px 14px;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }

        .db-logo{
          display:flex;
          align-items:center;
          gap:12px;
          margin-bottom:42px;
        }

        .db-logo-icon{
          width:52px;
          height:52px;
          border-radius:16px;
          background:linear-gradient(135deg,#6B5BFF,#4B8DFF);
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .logo-bot-img{
          width:38px;
        }

        .db-logo-text h2{
          font-size:24px;
          font-weight:900;
        }

        .db-logo-text span{
          color:#7B6BFF;
          font-size:13px;
          font-weight:700;
        }

        /* NAV */

        .db-nav{
          display:flex;
          flex-direction:column;
          gap:8px;
        }

        .db-nav-item{
          display:flex;
          align-items:center;
          gap:14px;
          padding:15px 16px;
          border-radius:16px;
          font-size:15px;
          font-weight:700;
          color:#8c93b8;
          cursor:pointer;
          transition:0.2s;
        }

        .db-nav-item:hover{
          background:#1c2240;
          color:white;
        }

        .db-nav-item.active{
          background:#312b74;
          color:white;
        }

        /* PROFILE */

        .db-profile{
          background:#171d31;
          border-radius:18px;
          padding:14px;
          display:flex;
          align-items:center;
          gap:12px;
        }

        .db-avatar{
          width:46px;
          height:46px;
          border-radius:50%;
          background:linear-gradient(135deg,#6B5BFF,#FF4FA3);
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:900;
          font-size:18px;
        }

        .db-profile-name{
          font-size:15px;
          font-weight:800;
        }

        .db-online{
          color:#00D26A;
          font-size:12px;
          margin-top:3px;
        }

        /* MAIN */

        .db-main{
          flex:1;
          padding:28px;
        }

        /* HERO */

        .db-hero{
          width:100%;
          min-height:280px;
          border-radius:30px;
          background-image:
            linear-gradient(rgba(10,12,30,0.75),rgba(10,12,30,0.8)),
            url(${heroBg});
          background-size:cover;
          background-position:center;
          padding:36px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          overflow:hidden;
          margin-bottom:24px;
        }

        .db-hero-text h1{
          font-size:54px;
          font-weight:900;
          margin-bottom:12px;
        }

        .db-hero-text p{
          color:#d3d8ff;
          font-size:18px;
          max-width:500px;
          line-height:1.6;
        }

        .hero-bot-img{
          width:190px;
          animation:bob 3s infinite ease-in-out;
        }

        @keyframes bob{
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-12px);
          }
        }

        /* STATS */

        .db-stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:18px;
        }

        .db-stat{
          background:#11182b;
          border:1px solid rgba(255,255,255,0.05);
          border-radius:24px;
          padding:28px;
          transition:0.2s;
        }

        .db-stat:hover{
          transform:translateY(-3px);
        }

        .db-stat-icon{
          font-size:34px;
          margin-bottom:16px;
        }

        .db-stat-value{
          font-size:42px;
          font-weight:900;
        }

        .db-stat-label{
          color:#a2abd4;
          margin-top:8px;
          font-size:16px;
        }

        /* TASKS */

        .db-task-section{
          margin-top:26px;
          background:#11182b;
          border-radius:28px;
          padding:28px;
        }

        .db-task-title{
          font-size:28px;
          font-weight:900;
          margin-bottom:22px;
        }

        .db-task{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:18px 0;
          border-bottom:1px solid rgba(255,255,255,0.05);
        }

        .db-task:last-child{
          border-bottom:none;
        }

        .task-left{
          display:flex;
          align-items:center;
          gap:14px;
        }

        .task-check{
          width:22px;
          height:22px;
          border-radius:7px;
          border:2px solid #666;
        }

        .task-check.done{
          background:#00D26A;
          border:none;
        }

        .task-name{
          font-size:16px;
          font-weight:700;
        }

        .task-name.done{
          text-decoration:line-through;
          opacity:0.5;
        }

        .task-time{
          color:#a2abd4;
          font-size:14px;
        }

        /* RESPONSIVE */

        @media(max-width:900px){

          .db-wrap{
            flex-direction:column;
          }

          .db-sidebar{
            width:100%;
            min-height:auto;
          }

          .db-hero{
            flex-direction:column;
            text-align:center;
            gap:20px;
          }

          .db-hero-text h1{
            font-size:38px;
          }

          .db-stats{
            grid-template-columns:1fr;
          }

        }

      `}</style>

      <div className="db-wrap">

        {/* SIDEBAR */}

        <div className="db-sidebar">

          <div>

            {/* LOGO */}

            <div className="db-logo">

              <div className="db-logo-icon">

                <img
                  src={robotImg}
                  alt="robot"
                  className="logo-bot-img"
                />

              </div>

              <div className="db-logo-text">

                <h2>Buddy</h2>

                <span>To-Do</span>

              </div>

            </div>

            {/* NAVIGATION */}

            <div className="db-nav">

              {[
                {
                  label: "Dashboard",
                  icon: "🏠",
                  path: "/dashboard",
                },
                {
                  label: "My Tasks",
                  icon: "✅",
                  path: "/tasks",
                },
                {
                  label: "Bucket List",
                  icon: "🪣",
                  path: "/bucketlist",
                },
                {
                  label: "Buddies",
                  icon: "👥",
                  path: "/buddies",
                },
                {
                  label: "Calendar",
                  icon: "📅",
                  path: "/calendar",
                },
              ].map((item) => (

                <div
                  key={item.label}
                  className={`db-nav-item ${
                    window.location.pathname === item.path
                      ? "active"
                      : ""
                  }`}
                  onClick={() => navigate(item.path)}
                >

                  <div>
                    {item.icon}
                  </div>

                  {item.label}

                </div>

              ))}

            </div>

          </div>

          {/* PROFILE */}

          <div className="db-profile">

            <div className="db-avatar">

              {user.name?.charAt(0)}

            </div>

            <div>

              <div className="db-profile-name">

                {user.name}

              </div>

              <div className="db-online">

                ● Online

              </div>

            </div>

          </div>

          <button
            onClick={handleLogout}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "14px",
              borderRadius: "14px",
              border: "none",
              background: "#ff4d6d",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Logout
          </button>

        </div>

        {/* MAIN */}

        <div className="db-main">

          {/* HERO */}

          <div className="db-hero">

            <div className="db-hero-text">

              <h1>
                {greeting}, {user.name}! 👋
              </h1>

              <p>
                Your dashboard updates automatically
                based on the tasks you add.
              </p>

            </div>

            <img
              src={robotImg}
              alt="robot"
              className="hero-bot-img"
            />

          </div>

          {/* STATS */}

          <div className="db-stats">

            <div className="db-stat">

              <div className="db-stat-icon">
                📋
              </div>

              <div className="db-stat-value">
                {tasks.length}
              </div>

              <div className="db-stat-label">
                Total Tasks
              </div>

            </div>

            <div className="db-stat">

              <div className="db-stat-icon">
                ✅
              </div>

              <div className="db-stat-value">
                {completedTasks}
              </div>

              <div className="db-stat-label">
                Completed Tasks
              </div>

            </div>

            <div className="db-stat">

              <div className="db-stat-icon">
                ⏳
              </div>

              <div className="db-stat-value">
                {pendingTasks}
              </div>

              <div className="db-stat-label">
                Pending Tasks
              </div>

            </div>

          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >

            <div style={cardStyle}>
              <h2>Total Tasks</h2>
              <h1>{stats.total}</h1>
            </div>

            <div style={cardStyle}>
              <h2>Completed</h2>
              <h1>{stats.completed}</h1>
            </div>

            <div style={cardStyle}>
              <h2>Pending</h2>
              <h1>{stats.pending}</h1>
            </div>

          </div>

          {/* TASKS */}

          <div className="db-task-section">

            <div className="db-task-title">
              Recent Tasks
            </div>

            {tasks.length === 0 ? (

              <p>No tasks added yet.</p>

            ) : (

              tasks.map((task) => (

                <div
                  className="db-task"
                  key={task._id}
                >

                  <div className="task-left">

                    <div
                      className={`task-check ${
                        task.completed ? "done" : ""
                      }`}
                    />

                    <div
                      className={`task-name ${
                        task.completed ? "done" : ""
                      }`}
                    >
                      {task.title}
                    </div>

                  </div>

                  <div className="task-time">
                    {task.time || "No Time"}
                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </div>
    </>
  );
}