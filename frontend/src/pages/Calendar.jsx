import React, { useState } from "react";

const today = new Date();

function fmt(y, m, d) {
  const dt = new Date(y, m, d);
  return (
    dt.getFullYear() +
    "-" +
    String(dt.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(dt.getDate()).padStart(2, "0")
  );
}

function todayFmt() {
  return fmt(today.getFullYear(), today.getMonth(), today.getDate());
}

function getWeekStart(date) {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS_SHORT = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
const DAYS_LONG  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const EVENT_COLORS = {
  purple: { bg: "#2b2860", text: "#a99fff" },
  blue:   { bg: "#0c2a4a", text: "#6aafff" },
  green:  { bg: "#0d3322", text: "#4dd9a0" },
  pink:   { bg: "#3a1030", text: "#ff85c0" },
  amber:  { bg: "#3a2000", text: "#ffc36b" },
};

const initialEvents = [
  { id: 1, title: "Team standup",     date: fmt(today.getFullYear(), today.getMonth(), today.getDate()),     time: "09:00", color: "purple" },
  { id: 2, title: "Design review",    date: fmt(today.getFullYear(), today.getMonth(), today.getDate() + 1), time: "14:00", color: "blue"   },
  { id: 3, title: "Workout",          date: fmt(today.getFullYear(), today.getMonth(), today.getDate() - 1), time: "07:00", color: "green"  },
  { id: 4, title: "Birthday party",   date: fmt(today.getFullYear(), today.getMonth(), today.getDate() + 3), time: "18:00", color: "pink"   },
  { id: 5, title: "Project deadline", date: fmt(today.getFullYear(), today.getMonth(), today.getDate() + 5), time: "17:00", color: "amber"  },
];

export default function Calendar() {
  const [cur, setCur]                   = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [view, setView]                 = useState("month");
  const [selectedDate, setSelectedDate] = useState(new Date(today));
  const [events, setEvents]             = useState(initialEvents);
  const [showModal, setShowModal]       = useState(false);
  const [form, setForm]                 = useState({ title: "", date: "", time: "09:00", color: "purple" });
  const [user]                          = useState({ name: "Srivalli" });

  const eventsOn = (dateStr) => events.filter((e) => e.date === dateStr);

  const goPrev = () => {
    if (view === "month") { setCur(new Date(cur.getFullYear(), cur.getMonth() - 1, 1)); }
    else if (view === "week") { const d = new Date(selectedDate); d.setDate(d.getDate() - 7); setSelectedDate(d); }
    else { const d = new Date(selectedDate); d.setDate(d.getDate() - 1); setSelectedDate(d); }
  };

  const goNext = () => {
    if (view === "month") { setCur(new Date(cur.getFullYear(), cur.getMonth() + 1, 1)); }
    else if (view === "week") { const d = new Date(selectedDate); d.setDate(d.getDate() + 7); setSelectedDate(d); }
    else { const d = new Date(selectedDate); d.setDate(d.getDate() + 1); setSelectedDate(d); }
  };

  const goToday = () => {
    setCur(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(new Date(today));
  };

  const openModal = () => {
    setForm({
      title: "",
      date: fmt(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()),
      time: "09:00",
      color: "purple",
    });
    setShowModal(true);
  };

  const saveEvent = () => {
    if (!form.title.trim()) return;
    setEvents((prev) => [...prev, { id: Date.now(), ...form }]);
    setShowModal(false);
  };

  const monthLabel =
    view === "month"
      ? `${MONTHS[cur.getMonth()]} ${cur.getFullYear()}`
      : view === "week"
      ? (() => { const ws = getWeekStart(selectedDate); return `${MONTHS[ws.getMonth()]} ${ws.getFullYear()}`; })()
      : `${MONTHS[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;

  /* ══════════════ MONTH VIEW ══════════════ */
  const renderMonth = () => {
    const y = cur.getFullYear(), m = cur.getMonth();
    const firstDay    = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const daysInPrev  = new Date(y, m, 0).getDate();
    const cells = [];
    for (let i = firstDay - 1; i >= 0; i--)
      cells.push({ d: daysInPrev - i, mo: m - 1, yr: m === 0 ? y - 1 : y, other: true });
    for (let d = 1; d <= daysInMonth; d++)
      cells.push({ d, mo: m, yr: y, other: false });
    while (cells.length < 42)
      cells.push({ d: cells.length - daysInMonth - firstDay + 1, mo: m + 1, yr: m === 11 ? y + 1 : y, other: true });

    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {DAYS_SHORT.map((d) => (
            <div key={d} style={{ padding: "16px 0", textAlign: "center", fontSize: 11, fontWeight: 700, color: "#555d7a", letterSpacing: 1 }}>
              {d}
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>
          {cells.map((c, i) => {
            const dateStr = fmt(c.yr, c.mo, c.d);
            const isToday = dateStr === todayFmt();
            const isSel   = dateStr === fmt(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
            const evs     = eventsOn(dateStr);
            return (
              <div
                key={i}
                onClick={() => setSelectedDate(new Date(dateStr + "T00:00:00"))}
                style={{
                  borderRight: "1px solid rgba(255,255,255,0.04)",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  minHeight: 110,
                  padding: "10px 10px 8px",
                  cursor: "pointer",
                  background: c.other ? "#13162a" : isSel && !isToday ? "rgba(107,91,255,0.08)" : "transparent",
                  transition: "background .15s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 6 }}>
                  <span style={{
                    fontSize: 13, fontWeight: 700,
                    width: 28, height: 28,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderRadius: "50%",
                    background: isToday ? "#6B5BFF" : "transparent",
                    color: isToday ? "white" : c.other ? "#3a3f55" : "#c0c5d8",
                  }}>
                    {c.d}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {evs.slice(0, 3).map((e) => (
                    <div key={e.id} style={{
                      fontSize: 11, fontWeight: 600,
                      padding: "3px 8px", borderRadius: 6,
                      background: EVENT_COLORS[e.color].bg,
                      color: EVENT_COLORS[e.color].text,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {e.time} {e.title}
                    </div>
                  ))}
                  {evs.length > 3 && (
                    <div style={{ fontSize: 10, color: "#555d7a", paddingLeft: 4 }}>+{evs.length - 3} more</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  /* ══════════════ WEEK VIEW ══════════════ */
  const renderWeek = () => {
    const wStart = getWeekStart(selectedDate);
    const cols = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(wStart); d.setDate(d.getDate() + i); return d;
    });
    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "64px repeat(7,1fr)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div />
          {cols.map((d, i) => {
            const isToday = fmt(d.getFullYear(), d.getMonth(), d.getDate()) === todayFmt();
            return (
              <div key={i} style={{ padding: "14px 8px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#555d7a", letterSpacing: 1, marginBottom: 6 }}>{DAYS_SHORT[i]}</div>
                <div style={{
                  fontSize: 18, fontWeight: 700,
                  width: 36, height: 36,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "50%", margin: "0 auto",
                  background: isToday ? "#6B5BFF" : "transparent",
                  color: isToday ? "white" : "#c0c5d8",
                }}>
                  {d.getDate()}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "64px repeat(7,1fr)", overflowY: "auto", maxHeight: "62vh" }}>
          <div>
            {Array.from({ length: 24 }, (_, h) => (
              <div key={h} style={{ height: 52, display: "flex", alignItems: "flex-start", justifyContent: "flex-end", paddingRight: 12, paddingTop: 4, fontSize: 10, fontWeight: 700, color: "#555d7a" }}>
                {h === 0 ? "" : h < 12 ? `${h} AM` : h === 12 ? "12 PM" : `${h - 12} PM`}
              </div>
            ))}
          </div>
          {cols.map((d, i) => {
            const dateStr = fmt(d.getFullYear(), d.getMonth(), d.getDate());
            return (
              <div key={i} style={{ borderLeft: "1px solid rgba(255,255,255,0.04)", position: "relative", height: 1248 }}>
                {Array.from({ length: 24 }, (_, h) => (
                  <div key={h} style={{ position: "absolute", top: h * 52, left: 0, right: 0, height: 52, borderBottom: "1px solid rgba(255,255,255,0.03)" }} />
                ))}
                {eventsOn(dateStr).map((e) => {
                  const [hh, mm] = e.time.split(":").map(Number);
                  return (
                    <div key={e.id} style={{
                      position: "absolute", top: hh * 52 + mm * 0.87,
                      left: 4, right: 4, height: 46,
                      borderRadius: 8, padding: "5px 8px",
                      fontSize: 11, fontWeight: 700, overflow: "hidden",
                      background: EVENT_COLORS[e.color].bg,
                      color: EVENT_COLORS[e.color].text,
                      borderLeft: `3px solid ${EVENT_COLORS[e.color].text}`,
                    }}>
                      <div style={{ fontSize: 10, opacity: .8, marginBottom: 2 }}>{e.time}</div>
                      <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.title}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  /* ══════════════ DAY VIEW ══════════════ */
  const renderDay = () => {
    const dateStr = fmt(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    const evs     = eventsOn(dateStr);
    const prevDay = () => { const d = new Date(selectedDate); d.setDate(d.getDate() - 1); setSelectedDate(d); };
    const nextDay = () => { const d = new Date(selectedDate); d.setDate(d.getDate() + 1); setSelectedDate(d); };

    return (
      <div>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 28px", borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <button onClick={prevDay} style={s.dayNavBtn}>&#8249;</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#555d7a", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
              {DAYS_LONG[selectedDate.getDay()]}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <span style={{ fontSize: 42, fontWeight: 700, lineHeight: 1, color: dateStr === todayFmt() ? "#6B5BFF" : "white" }}>
                {selectedDate.getDate()}
              </span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#c0c5d8" }}>{MONTHS[selectedDate.getMonth()]}</div>
                <div style={{ fontSize: 13, color: "#555d7a" }}>{selectedDate.getFullYear()}</div>
              </div>
            </div>
            {dateStr === todayFmt() && (
              <div style={{ marginTop: 6, fontSize: 11, fontWeight: 700, color: "#6B5BFF", letterSpacing: .5 }}>TODAY</div>
            )}
          </div>
          <button onClick={nextDay} style={s.dayNavBtn}>&#8250;</button>
        </div>

        <div style={{ padding: "12px 28px 0", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#555d7a" }}>
            {evs.length === 0 ? "No events" : `${evs.length} event${evs.length > 1 ? "s" : ""}`}
          </span>
          {evs.length > 0 && (
            <span style={{ background: "#6B5BFF", color: "white", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>
              {evs.length}
            </span>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "64px 1fr", overflowY: "auto", maxHeight: "62vh", marginTop: 8 }}>
          <div>
            {Array.from({ length: 24 }, (_, h) => (
              <div key={h} style={{ height: 52, display: "flex", alignItems: "flex-start", justifyContent: "flex-end", paddingRight: 12, paddingTop: 4, fontSize: 10, fontWeight: 700, color: "#555d7a" }}>
                {h === 0 ? "" : h < 12 ? `${h} AM` : h === 12 ? "12 PM" : `${h - 12} PM`}
              </div>
            ))}
          </div>
          <div style={{ borderLeft: "1px solid rgba(255,255,255,0.04)", position: "relative", height: 1248 }}>
            {Array.from({ length: 24 }, (_, h) => (
              <div key={h} style={{ position: "absolute", top: h * 52, left: 0, right: 0, height: 52, borderBottom: "1px solid rgba(255,255,255,0.03)" }} />
            ))}
            {evs.length === 0 && (
              <div style={{ position: "absolute", top: "40%", left: 0, right: 0, textAlign: "center", color: "#2e3348", fontSize: 14, fontWeight: 700 }}>
                No events scheduled — click + to add one
              </div>
            )}
            {evs.map((e) => {
              const [hh, mm] = e.time.split(":").map(Number);
              return (
                <div key={e.id} style={{
                  position: "absolute", top: hh * 52 + mm * 0.87,
                  left: 8, right: 16, height: 58,
                  borderRadius: 10, padding: "8px 14px",
                  background: EVENT_COLORS[e.color].bg,
                  color: EVENT_COLORS[e.color].text,
                  borderLeft: `4px solid ${EVENT_COLORS[e.color].text}`,
                  display: "flex", flexDirection: "column", justifyContent: "center", gap: 2,
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{e.title}</div>
                  <div style={{ fontSize: 11, opacity: .75 }}>{e.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  /* ══════════════ MAIN RENDER ══════════════ */
  return (
    <div style={{ display: "flex", background: "#0f111a", minHeight: "100vh" }}>


      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "28px 32px", overflow: "auto", fontFamily: "sans-serif" }}>

        {/* TOP HEADER */}
        <div style={s.header}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span style={s.title}>Calendar</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <button style={s.navBtn} onClick={goPrev}>&#8249;</button>
              <span style={s.monthLabel}>{monthLabel}</span>
              <button style={s.navBtn} onClick={goNext}>&#8250;</button>
            </div>
            <button style={s.todayBtn} onClick={goToday}>Today</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button style={s.addBtn} onClick={openModal} title="Add event">
              <span style={{ fontSize: 20, lineHeight: 1 }}>+</span>
            </button>
            <div style={s.viewBtns}>
              {["month","week","day"].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  style={{ ...s.viewBtn, ...(view === v ? s.viewBtnActive : {}) }}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CALENDAR BODY */}
        <div style={s.body}>
          {view === "month" && renderMonth()}
          {view === "week"  && renderWeek()}
          {view === "day"   && renderDay()}
        </div>

      </div>

      {/* ADD EVENT MODAL */}
      {showModal && (
        <div style={s.modalOverlay}>
          <div style={s.modalBox}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "white" }}>New event</span>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", color: "#555d7a", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={s.label}>Title</label>
              <input
                style={s.input}
                placeholder="Event name"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                autoFocus
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              <div>
                <label style={s.label}>Date</label>
                <input style={s.input} type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </div>
              <div>
                <label style={s.label}>Time</label>
                <input style={s.input} type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={s.label}>Color</label>
              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                {Object.entries(EVENT_COLORS).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setForm({ ...form, color: key })}
                    title={key}
                    style={{
                      width: 28, height: 28, borderRadius: "50%", border: "none", cursor: "pointer",
                      background: val.text,
                      outline: form.color === key ? `3px solid ${val.text}` : "none",
                      outlineOffset: 3,
                      transform: form.color === key ? "scale(1.2)" : "scale(1)",
                      transition: ".15s",
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <button style={s.cancelBtn} onClick={() => setShowModal(false)}>Cancel</button>
              <button style={s.saveBtn} onClick={saveEvent}>Save event</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════ STYLES ══════════════ */
const s = {
  header:       { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 14 },
  title:        { fontSize: 26, fontWeight: 700, color: "white", letterSpacing: -.3 },
  monthLabel:   { fontSize: 16, fontWeight: 700, color: "white", minWidth: 170, textAlign: "center" },
  navBtn:       { background: "#181c2f", border: "none", color: "#7880A4", width: 34, height: 34, borderRadius: 10, cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" },
  todayBtn:     { background: "transparent", border: "1px solid rgba(107,91,255,0.5)", color: "#a99fff", padding: "7px 18px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontWeight: 700 },
  addBtn:       { background: "#6B5BFF", border: "none", color: "white", width: 36, height: 36, borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
  viewBtns:     { display: "flex", background: "#181c2f", padding: 4, borderRadius: 12, gap: 2 },
  viewBtn:      { background: "transparent", border: "none", color: "#7880A4", padding: "7px 18px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 700 },
  viewBtnActive:{ background: "#6B5BFF", color: "white" },
  body:         { background: "#181c2f", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" },
  dayNavBtn:    { background: "#0f111a", border: "1px solid rgba(255,255,255,0.07)", color: "#7880A4", width: 40, height: 40, borderRadius: 12, cursor: "pointer", fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center" },
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 },
  modalBox:     { background: "#181c2f", borderRadius: 20, padding: "28px 30px", width: 380, border: "1px solid rgba(255,255,255,0.08)" },
  label:        { display: "block", fontSize: 11, fontWeight: 700, color: "#555d7a", marginBottom: 7, letterSpacing: .5, textTransform: "uppercase" },
  input:        { width: "100%", background: "#0f111a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 14px", color: "white", fontSize: 14, outline: "none", boxSizing: "border-box" },
  saveBtn:      { background: "#6B5BFF", border: "none", color: "white", padding: "11px 0", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 14, width: "100%" },
  cancelBtn:    { background: "transparent", border: "1px solid rgba(255,255,255,0.08)", color: "#7880A4", padding: "11px 0", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 14, width: "100%" },
};