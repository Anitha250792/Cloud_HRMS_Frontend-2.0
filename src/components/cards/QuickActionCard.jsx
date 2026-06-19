import "./QuickActionCard.css";

function QuickActionCard({
  title,
  icon,
  color,
  onClick,
}) {

  return (

    <div
      className="quick-card"
      onClick={onClick}
      style={{
        borderLeft: `5px solid ${color}`,
        cursor: "pointer",
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