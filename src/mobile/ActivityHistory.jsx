export default function ActivityHistory() {
  const history = [
    "Light turned ON",
    "Temperature Alert Triggered",
    "Door Closed",
  ];

  return (
    <div>
      <h3>Activity History</h3>
      {history.map((item, index) => (
        <div key={index} className="card">
          {item}
        </div>
      ))}
    </div>
  );
}
