import React from 'react';

export default function StudentModal({ student, onClose }) {
  if (!student) return null;
  return <div className="modal-backdrop-custom" role="presentation" onClick={onClose}>
    <section className="profile-modal" role="dialog" aria-modal="true" aria-labelledby="profile-title" onClick={e => e.stopPropagation()}>
      <button className="modal-close" aria-label="Close profile" onClick={onClose}><i className="bi bi-x-lg" /></button>
      <div className="modal-avatar"><i className="bi bi-person-fill" /></div>
      <p className="eyebrow mb-1">STUDENT PROFILE</p><h2 id="profile-title">{student.name}</h2>
      <div className="profile-details"><div><span>Student ID</span><strong>{student.id}</strong></div><div><span>Major</span><strong>{student.major}</strong></div><div><span>Academic year</span><strong>Year {student.year}</strong></div><div><span>Current GPA</span><strong>{student.gpa.toFixed(1)} / 4.0</strong></div></div>
      <button className="btn btn-primary w-100 mt-4" onClick={onClose}>Done</button>
    </section>
  </div>;
}
