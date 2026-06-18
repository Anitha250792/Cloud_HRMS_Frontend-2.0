import "./StatCard.css";

function StatCard({
  title,
  value,
  subtitle,
  status,
}) {
  return (
    <div className="stat-card">
      <h4>{title}</h4>

      <h2>{value}</h2>

      <p>{subtitle}</p>

      <span className="badge">
        {status}
      </span>
    </div>
  );
}

export default StatCard;