import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);
  const [astrologers, setAstrologers] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/customers")
      .then((res) => setCustomers(res.data));

    axios
      .get("http://localhost:5000/astrologers")
      .then((res) => setAstrologers(res.data));

    axios
      .get("http://localhost:5000/appointments")
      .then((res) => setAppointments(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Astrologer CRM Dashboard 🚀</h1>

      <h2>Customers</h2>
      {customers.map((customer) => (
        <div className="card" key={customer._id}>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
        </div>
      ))}

      <h2>Astrologers</h2>
      {astrologers.map((astrologer) => (
        <div className="card" key={astrologer._id}>
          <p><strong>Name:</strong> {astrologer.name}</p>
          <p><strong>Specialization:</strong> {astrologer.specialization}</p>
          <p><strong>Experience:</strong> {astrologer.experience} years</p>
          <p><strong>Fees:</strong> ₹{astrologer.fees}</p>
        </div>
      ))}

      <h2>Appointments</h2>
      {appointments.map((appointment) => (
        <div className="card" key={appointment._id}>
          <p>
            <strong>Customer:</strong>{" "}
            {appointment.customerId?.name}
          </p>

          <p>
            <strong>Astrologer:</strong>{" "}
            {appointment.astrologerId?.name}
          </p>

          <p>
            <strong>Date:</strong> {appointment.date}
          </p>

          <p>
            <strong>Time:</strong> {appointment.time}
          </p>

          <p>
            <strong>Status:</strong> {appointment.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;