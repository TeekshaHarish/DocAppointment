import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-3"
        onClick={() => navigate(`/book-appointment/${doctor._id}`)}
        style={{ cursor: "pointer" }}
      >
        <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization</b> {doctor.specialization}
          </p>
          <p>
            <b>Experience</b> {doctor.experience}
          </p>
          <p>
            <b>Fees Per Consultation</b> {doctor.feesPerConsultation}
          </p>
          <p>
            <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
}
