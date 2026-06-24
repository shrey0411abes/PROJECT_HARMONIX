import "./Visualizer.css";

function Visualizer({
  isPlaying,
}) {
  return (
    <div className="visualizer">
      {[...Array(5)].map(
        (_, index) => (
          <span
            key={index}
            className={
              isPlaying
                ? "bar active"
                : "bar"
            }
          />
        )
      )}
    </div>
  );
}

export default Visualizer;