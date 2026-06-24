import "./Home.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Home() {
const [time, setTime] = useState(
new Date()
);

const [favoritesCount, setFavoritesCount] =
useState(0);

const [sessions, setSessions] =
useState(0);

const [streak, setStreak] =
useState(0);

useEffect(() => {
const timer = setInterval(() => {
setTime(new Date());
}, 1000);

return () => clearInterval(timer);

}, []);

useEffect(() => {
try {
const favorites =
JSON.parse(
localStorage.getItem(
"favorites"
) || "[]"
);

  setFavoritesCount(favorites.length);

  setSessions(
    Number(localStorage.getItem("sessions") || 0)
  );

  setStreak(
    Number(localStorage.getItem("streak") || 0)
  );
} catch (error) {
  console.log(error);

  setFavoritesCount(0);
  setSessions(0);
  setStreak(0);
}

}, []);

const hour = time.getHours();

const greeting =
hour < 12
? "🌅 Good Morning"
: hour < 18
? "☀️ Good Afternoon"
: "🌙 Good Evening";

const stats = [
{
title: "🎵 Songs",
value: 20,
},
{
title: "❤️ Favorites",
value: favoritesCount,
},
{
title: "🎯 Sessions",
value: sessions,
},
{
title: "🔥 Streak",
value: streak,
},
];

return (
<motion.div
className="home-page"
initial={{
opacity: 0,
}}
animate={{
opacity: 1,
}}
transition={{
duration: 0.6,
}}
>
<motion.div
className="welcome-banner"
initial={{
y: -20,
opacity: 0,
}}
animate={{
y: 0,
opacity: 1,
}}
> <div> <h1>
{greeting}, Shrey 👋 </h1>

```
      <p>
        Ready to Sync,
        Create and Elevate?
      </p>
    </div>

    <div className="clock">
      <h2>
        {time.toLocaleTimeString()}
      </h2>

      <p>
        {time.toDateString()}
      </p>
    </div>
  </motion.div>

  <div className="dashboard-grid">
    {stats.map(
      (stat, index) => (
        <motion.div
          key={stat.title}
          className="dashboard-card"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay:
              index * 0.1,
          }}
          whileHover={{
            scale: 1.05,
          }}
        >
          <h3>
            {stat.title}
          </h3>

          <p>
            {stat.value}
          </p>
        </motion.div>
      )
    )}
  </div>

  <motion.div
    className="quote-card"
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
  >
    <h3>
      🎧 Quote of the Day
    </h3>

    <p>
      "Music can change
      the world because
      it can change
      people."
    </p>
  </motion.div>

  <motion.div
    className="info-card"
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
  >
    <h2>
      ⚡ Harmonix
    </h2>

    <p>
      Harmonix is a modern
      Music + Productivity
      platform combining
      playlists, favorites,
      focus sessions,
      analytics and
      immersive music
      experiences.
    </p>
  </motion.div>

  <motion.div
    className="info-card"
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
  >
    <h2>
      🚀 Quick Actions
    </h2>

    <ul>
      <li>
        🎵 Explore new
        playlists
      </li>

      <li>
        ❤️ Manage favorite
        songs
      </li>

      <li>
        🎯 Start a focus
        session
      </li>

      <li>
        📈 Track analytics
      </li>
    </ul>
  </motion.div>
</motion.div>


);
}

export default Home;
