import "./QuickActionCard.css";

function QuickActionCard({ title, icon, color }) {
  return (
    <div
      className="quick-card"
      style={{
        borderLeft: `5px solid ${color}`,
      }}
    >
      <div className="quick-icon">
        {icon}
      </div>

      <h4>{title}</h4>
    </div>
  );
}

export default QuickActionCard;