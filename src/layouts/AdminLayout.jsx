import Sidebar from "../components/sidebar/Sidebar";
import TopNavbar from "../components/navbar/TopNavbar";

function AdminLayout({ children }) {

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >

      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          width: "calc(100% - 260px)",
        }}
      >

        <TopNavbar />

        <div
          style={{
            padding: "30px",
          }}
        >
          {children}
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;