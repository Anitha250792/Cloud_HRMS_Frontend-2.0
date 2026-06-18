import "./StatusCard.css";

function StatusCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className="status-card"
      style={{
        borderTop: `5px solid ${color}`,
      }}
    >
      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}

export default StatusCard;