export default function AlertsView() {
  const alerts = [
    { id: 1, message: "High Temperature Detected!" },
    { id: 2, message: "Front Door Left Open" },
  ];

  return (
    <div>
      <h3>Alert Notifications</h3>
      {alerts.map((alert) => (
        <div key={alert.id} className="card alert">
          {alert.message}
        </div>
      ))}
    </div>
  );
}
