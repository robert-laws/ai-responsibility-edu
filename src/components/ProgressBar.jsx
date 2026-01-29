function ProgressBar({ value, label }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      {label && <span className="progress-label">{label}</span>}
    </div>
  );
}

export default ProgressBar;
