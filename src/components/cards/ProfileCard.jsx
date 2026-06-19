function ProfileCard() {

  const userName =
    localStorage.getItem("userName") ||
    "Sarah Johnson";

  const userRole =
    localStorage.getItem("userRole") ||
    "HR Manager";

  const initials =
    userName
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase();

  return (

    <div
      style={{
        background:"#fff",
        padding:"24px",
        borderRadius:"16px",
        textAlign:"center",
        boxShadow:
          "0 4px 12px rgba(0,0,0,0.05)"
      }}
    >

      <div
        style={{
          width:"80px",
          height:"80px",

          background:"#4338CA",

          color:"#fff",

          borderRadius:"50%",

          margin:"0 auto",

          display:"flex",
          alignItems:"center",
          justifyContent:"center",

          fontSize:"28px",
          fontWeight:"700",
        }}
      >

        {initials}

      </div>

      <h3
        style={{
          marginTop:"15px",
          marginBottom:"5px",
        }}
      >
        {userName}
      </h3>

      <p
        style={{
          color:"#6B7280",
        }}
      >
        {userRole}
      </p>

      <hr
        style={{
          margin:"18px 0",
          border:
          "1px solid #E5E7EB",
        }}
      />

      <p>
        Payroll Approval Authority
      </p>

      <p
        style={{
          color:"#6B7280",
        }}
      >
        Last Login : Today
      </p>

    </div>

  );

}

export default ProfileCard;