import React from 'react';

export default function StudentCard({ student, onView, onDelete }) {
  return <div className="card student-card h-100">
    <div className="student-avatar"><i className="bi bi-person-fill" aria-hidden="true" /></div>
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-start gap-2"><h2 className="student-name">{student.name}</h2><span className="student-status" title="Active student"><i className="bi bi-circle-fill" /></span></div>
      <p className="student-detail"><span>ID:</span> {student.id}</p>
      <p className="student-detail"><span>Major:</span> {student.major}</p>
      <p className="student-detail"><span>Year:</span> {student.year}</p>
      <p className="student-detail mb-3"><span>GPA:</span> <strong>{student.gpa.toFixed(1)}</strong><span className="gpa-track"><span style={{width: `${student.gpa / 4 * 100}%`}} /></span></p>
      <div className="student-actions"><button className="btn btn-outline-primary btn-sm" onClick={() => onView(student)}><i className="bi bi-person-vcard me-1" />View Profile</button><button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(student.id)}><i className="bi bi-trash3 me-1" />Delete</button></div>
      <div className="student-tags"><span className="badge rounded-pill">{student.tag}</span></div>
    </div>
  </div>;
}
