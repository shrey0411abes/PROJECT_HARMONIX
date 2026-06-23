import "./Productivity.css";
import FocusChart from "../components/FocusChart/FocusChart";
import { useState, useEffect } from "react";

const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

function Productivity() {
  const [mode, setMode] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);

  const [sessions, setSessions] = useState(
    Number(localStorage.getItem("sessions")) || 0
  );

  const [xp, setXp] = useState(
    Number(localStorage.getItem("xp")) || 0
  );

  const [streak, setStreak] = useState(
    Number(localStorage.getItem("streak")) || 0
  );

  useEffect(() => {
    localStorage.setItem("sessions", sessions);
    localStorage.setItem("xp", xp);
    localStorage.setItem("streak", streak);
  }, [sessions, xp, streak]);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      handleSessionComplete();
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleSessionComplete = () => {
    if (mode === "focus") {
      setSessions((prev) => prev + 1);
      setXp((prev) => prev + 25);

      updateStreak();

      showNotification(
        "🎉 Focus Session Complete",
        "Time for a short break."
      );

      setMode("break");
      setTimeLeft(BREAK_TIME);
    } else {
      showNotification(
        "☕ Break Finished",
        "Ready for another focus session?"
      );

      setMode("focus");
      setTimeLeft(FOCUS_TIME);
    }
  };

  const updateStreak = () => {
    const today = new Date().toDateString();

    const lastDate =
      localStorage.getItem("lastFocusDate");

    if (!lastDate) {
      setStreak(1);
      localStorage.setItem(
        "lastFocusDate",
        today
      );
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(
      yesterday.getDate() - 1
    );

    if (lastDate === today) return;

    if (
      lastDate ===
      yesterday.toDateString()
    ) {
      setStreak((prev) => prev + 1);
    } else {
      setStreak(1);
    }

    localStorage.setItem(
      "lastFocusDate",
      today
    );
  };

  const showNotification = (
    title,
    body
  ) => {
    if (
      Notification.permission ===
      "granted"
    ) {
      new Notification(title, {
        body,
      });
    }
  };

  useEffect(() => {
    if (
      Notification.permission !==
      "granted"
    ) {
      Notification.requestPermission();
    }
  }, []);

  const formatTime = () => {
    const minutes = Math.floor(
      timeLeft / 60
    );

    const seconds = timeLeft % 60;

    return `${minutes
      .toString()
      .padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const level =
    Math.floor(xp / 100) + 1;

  const progress = xp % 100;

  const focusScore = Math.min(
    100,
    sessions * 5 +
      streak * 3 +
      Math.floor(xp / 20)
  );

  const achievements = [
    {
      name: "🥉 First Session",
      unlocked: sessions >= 1,
    },
    {
      name: "🥈 5 Sessions",
      unlocked: sessions >= 5,
    },
    {
      name: "🥇 20 Sessions",
      unlocked: sessions >= 20,
    },
    {
      name: "🔥 7 Day Streak",
      unlocked: streak >= 7,
    },
    {
      name: "🚀 Productivity Master",
      unlocked:
        sessions >= 50 &&
        streak >= 15,
    },
  ];

  const dailyGoal = 4;

 const dailyProgress = Math.min(
  sessions,
  dailyGoal
);

  const weeklyFocus =
    sessions * 25;

  const averageDailyFocus =
    Math.floor(weeklyFocus / 7);

    // 🌳 Focus Tree

const getTreeStage = () => {
  if (sessions >= 100)
    return {
      emoji: "🌴",
      title: "Focus Legend",
    };

  if (sessions >= 50)
    return {
      emoji: "🌲",
      title: "Forest Master",
    };

  if (sessions >= 20)
    return {
      emoji: "🌳",
      title: "Growing Tree",
    };

  if (sessions >= 5)
    return {
      emoji: "🌿",
      title: "Sapling",
    };

  return {
    emoji: "🌱",
    title: "Seed",
  };
};

// 🎯 Daily Mission

const missions = [
  "Complete 4 Focus Sessions",
  "Earn 100 XP",
  "Maintain Your Streak",
  "Study For 2 Hours",
  "Complete 2 Pomodoro Cycles",
];

const todayMission =
  missions[
    new Date().getDate() %
      missions.length
  ];

// 🤖 AI Coach

const getCoachMessage = () => {
  if (sessions < 5)
    return "Great start! Consistency beats intensity.";

  if (sessions < 20)
    return "You're building a strong productivity habit.";

  if (sessions < 50)
    return "Excellent focus discipline. Keep going.";

  return "Productivity Master! You're unstoppable 🚀";
};

// 🎵 Smart Recommendation

const getRecommendedTrack = () => {
  if (mode === "focus")
    return "🎵 Deep Focus";

  return "🎵 Chill Vibes";
};

const tree = getTreeStage();

  return (
    <div className="productivity-page">
      <h1>🎯 Productivity Hub</h1>

      {/* Timer */}

      <div className="timer-card">
        <h2>
          {mode === "focus"
            ? "🎯 Focus Session"
            : "☕ Break Time"}
        </h2>

        <div className="timer">
          {formatTime()}
        </div>

        <button
          onClick={() =>
            setIsRunning(!isRunning)
          }
        >
          {isRunning
            ? "Pause"
            : "Start"}
        </button>

        <button
          onClick={() => {
            setIsRunning(false);

            setTimeLeft(
              mode === "focus"
                ? FOCUS_TIME
                : BREAK_TIME
            );
          }}
        >
          Reset
        </button>
      </div>

      {/* Main Stats */}

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Completed Sessions</h3>
          <p>{sessions}</p>
        </div>

        <div className="stat-card">
          <h3>Current Streak</h3>
          <p>🔥 {streak} Days</p>
        </div>

        <div className="stat-card">
          <h3>XP Earned</h3>
          <p>{xp}</p>
        </div>

        <div className="stat-card">
          <h3>Level</h3>
          <p>{level}</p>
        </div>
      </div>

      {/* XP */}

      <div className="xp-section">
        <h2>⚡ Progress To Next Level</h2>

        <div className="xp-bar">
          <div
            className="xp-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p>{progress}/100 XP</p>
      </div>

      {/* Analytics */}

      <div className="analytics-section">
        <h2>📈 Weekly Analytics</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Focus Minutes</h3>
            <p>{weeklyFocus}</p>
          </div>

          <div className="stat-card">
            <h3>Sessions</h3>
            <p>{sessions}</p>
          </div>

          <div className="stat-card">
            <h3>Daily Average</h3>
            <p>
              {averageDailyFocus} min
            </p>
          </div>
        </div>
      </div>

      {/* Focus Score */}

      <div className="xp-section">
        <h2>🧠 Focus Score</h2>

        <div className="xp-bar">
          <div
            className="xp-fill"
            style={{
              width: `${focusScore}%`,
            }}
          />
        </div>

        <p>
  {focusScore}/100
  {focusScore >= 80
    ? " 🚀"
    : focusScore >= 50
    ? " 🔥"
    : " 🌱"}
</p>
      </div>

      {/* Daily Mission */}

      <div className="xp-section">
        <h2>🎯 Daily Mission</h2>

        <p>
          Complete 4 Focus Sessions
        </p>

        <div className="xp-bar">
          <div
            className="xp-fill"
            style={{
              width: `${
                (dailyProgress /
                  dailyGoal) *
                100
              }%`,
            }}
          />
        </div>

        <p>
          {dailyProgress}/{dailyGoal}
        </p>
      </div>

      {/* Achievements */}

      <div className="xp-section">
        <h2>🏆 Achievements</h2>

        <div className="stats-grid">
          {achievements.map(
            (achievement) => (
              <div
                key={
                  achievement.name
                }
                className="stat-card"
              >
                <h3>
                  {achievement.name}
                </h3>

                <p>
                  {achievement.unlocked
                    ? "✅ Unlocked"
                    : "🔒 Locked"}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Focus Tree */}

<div className="xp-section">
  <h2>🌳 Focus Tree</h2>

  <div className="tree-display">
    <div className="tree-emoji">
      {tree.emoji}
    </div>

    <h3>{tree.title}</h3>

    <p>
      Complete more sessions to grow
      your productivity tree.
    </p>
  </div>
</div>

{/* Daily Mission */}

<div className="xp-section">
  <h2>🎯 Today's Mission</h2>

  <div className="mission-card">
    {todayMission}
  </div>
</div>

{/* AI Coach */}

<div className="xp-section">
  <h2>🤖 AI Focus Coach</h2>

  <div className="coach-card">
    {getCoachMessage()}
  </div>
</div>

{/* Music Recommendation */}

<div className="xp-section">
  <h2>🎵 Smart Recommendation</h2>

  <div className="music-card">
    <h3>
      {getRecommendedTrack()}
    </h3>

    <p>
      Recommended for your current
      productivity mode.
    </p>
  </div>
</div>

<FocusChart sessions={sessions} />

    </div>
  );
}

export default Productivity;