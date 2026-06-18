import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

function Settings() {

  const [settings, setSettings] =
    useState({
      companyName:
        "PayFlow Pvt Ltd",
      payrollCycle:
        "Monthly",
      currency:
        "INR",
      hrEmail:
        "hr@payflow.com",
    });

  const handleChange = (e) => {

    setSettings({
      ...settings,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSave = () => {

    localStorage.setItem(
      "hrmsSettings",
      JSON.stringify(settings)
    );

    alert(
      "Settings Saved Successfully"
    );

  };

  return (

    <AdminLayout>

      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        System Settings
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "16px",
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "20px",
          }}
        >

          <div>

            <label>
              Company Name
            </label>

            <input
              name="companyName"
              value={
                settings.companyName
              }
              onChange={
                handleChange
              }
            />

          </div>

          <div>

            <label>
              Payroll Cycle
            </label>

            <select
              name="payrollCycle"
              value={
                settings.payrollCycle
              }
              onChange={
                handleChange
              }
            >

              <option>
                Monthly
              </option>

              <option>
                Weekly
              </option>

            </select>

          </div>

          <div>

            <label>
              Currency
            </label>

            <input
              name="currency"
              value={
                settings.currency
              }
              onChange={
                handleChange
              }
            />

          </div>

          <div>

            <label>
              HR Email
            </label>

            <input
              name="hrEmail"
              value={
                settings.hrEmail
              }
              onChange={
                handleChange
              }
            />

          </div>

        </div>

        <button
          onClick={handleSave}
          style={{
            marginTop: "25px",
            background: "#4338CA",
            color: "#fff",
            border: "none",
            padding:
              "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Save Settings
        </button>

      </div>

    </AdminLayout>

  );
}

export default Settings;