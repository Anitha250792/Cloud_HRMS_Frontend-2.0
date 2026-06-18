function ProfileCard() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "16px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          background: "#4338CA",
          color: "#fff",
          borderRadius: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          fontWeight: "700",
        }}
      >
        SJ
      </div>

      <h3
        style={{
          marginTop: "15px",
        }}
      >
        Sarah Johnson
      </h3>

      <p>HR Manager</p>

      <hr
        style={{
          margin: "15px 0",
        }}
      />

      <p>
        Payroll Approval Authority
      </p>

      <p>
        Last Login: Today 9:30 AM
      </p>
    </div>
  );
}

export default ProfileCard;