import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import StudentCard from './components/StudentCard.jsx';
import StudentModal from './components/StudentModal.jsx';

const initialStudents = [
  { id: 101, name: 'Maheen', major: 'Computer Science', year: 3, gpa: 3.8, tag: 'Dean’s List' },
  { id: 102, name: 'Hanita', major: 'Computer Science', year: 2, gpa: 3.6, tag: 'Academic Excellence' },
  { id: 103, name: 'Mariam', major: 'Computer Science', year: 3, gpa: 3.2, tag: 'Academic Excellence' },
  { id: 104, name: 'Sara', major: 'Computer Science', year: 2, gpa: 3.8, tag: 'Academic Excellence' },
  { id: 105, name: 'Zoha', major: 'Information Systems', year: 3, gpa: 3.7, tag: 'Dean’s List' },
  { id: 106, name: 'Ahmed', major: 'Software Engineering', year: 1, gpa: 3.9, tag: 'High Achiever' },
  { id: 107, name: 'Neha', major: 'Computer Science', year: 4, gpa: 3.2, tag: 'Student Mentor' },
  { id: 108, name: 'Ayesha ', major: 'Data Science', year: 2, gpa: 3.3, tag: 'Dean’s List' },
  { id: 109, name: 'Hina', major: 'Cybersecurity', year: 3, gpa: 3.5, tag: 'Academic Excellence' },
  { id: 110, name: 'Zain', major: 'Software Engineering', year: 2, gpa: 3.7, tag: 'Student Mentor' },
  { id: 111, name: 'Saif', major: 'Information Systems', year: 1, gpa: 3.5, tag: 'New Student' },
  { id: 112, name: 'Zara', major: 'Data Science', year: 4, gpa: 3.8, tag: 'Dean’s List' },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');
  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState({ type: 'success', message: 'Student records have been successfully updated.' });
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newMajor, setNewMajor] = useState('Computer Science');
  const pageSize = 4;
  const filteredStudents = useMemo(() => students.filter(s => `${s.name} ${s.id} ${s.major} ${s.tag}`.toLowerCase().includes(submittedSearch.toLowerCase())), [students, submittedSearch]);
  const pageCount = Math.max(1, Math.ceil(filteredStudents.length / pageSize));
  const visibleStudents = filteredStudents.slice((page - 1) * pageSize, page * pageSize);
  const submitSearch = e => { e.preventDefault(); setSubmittedSearch(search.trim()); setPage(1); };
  const deleteStudent = id => { setStudents(prev => prev.filter(s => s.id !== id)); setAlert({ type: 'warning', message: `Student ID ${id} has been removed from the directory.` }); setPage(1); };
  const addStudent = e => { e.preventDefault(); if (!newName.trim()) return; const nextId = Math.max(100, ...students.map(s => s.id)) + 1; const student = { id: nextId, name: newName.trim(), major: newMajor, year: 1, gpa: 0.0, tag: 'New Student' }; setStudents(prev => [...prev, student]); setNewName(''); setNewMajor('Computer Science'); setShowAddForm(false); setSubmittedSearch(''); setSearch(''); setPage(Math.ceil((students.length + 1) / pageSize)); setAlert({ type: 'success', message: `${student.name} was added to the student directory.` }); };
  const changePage = next => { setPage(Math.min(pageCount, Math.max(1, next))); document.getElementById('students')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

  return <>
    <Navbar search={search} setSearch={setSearch} onSearch={submitSearch} />
    <main className="container portal-container main-content" id="students">
      <nav aria-label="breadcrumb"><ol className="breadcrumb portal-breadcrumb"><li className="breadcrumb-item"><a href="#home">Home</a></li><li className="breadcrumb-item"><a href="#students">Students</a></li><li className="breadcrumb-item active" aria-current="page">Directory</li></ol></nav>
      <div className="page-heading"><div><p className="eyebrow">PEOPLE &amp; ACADEMICS</p><h1>Student Directory</h1><p className="page-subtitle">Browse student profiles and academic information.</p></div><button className="btn btn-primary add-student-btn" onClick={() => setShowAddForm(v => !v)}><i className={`bi ${showAddForm ? 'bi-x-lg' : 'bi-plus-lg'} me-2`} />{showAddForm ? 'Cancel' : 'Add New Student'}</button></div>
      {showAddForm && <form className="add-student-panel" onSubmit={addStudent}><div className="row g-3 align-items-end"><div className="col-md-5"><label htmlFor="studentName" className="form-label">Student name</label><input id="studentName" className="form-control" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Enter full name" required /></div><div className="col-md-5"><label htmlFor="studentMajor" className="form-label">Major</label><select id="studentMajor" className="form-select" value={newMajor} onChange={e => setNewMajor(e.target.value)}><option>Computer Science</option><option>Software Engineering</option><option>Data Science</option><option>Information Systems</option><option>Cybersecurity</option></select></div><div className="col-md-2"><button className="btn btn-primary w-100" type="submit">Add student</button></div></div></form>}
      <div className="directory-meta"><span><strong>{filteredStudents.length}</strong> students found</span><span className="meta-divider" /><span><i className="bi bi-grid-3x3-gap me-1" />Directory view</span></div>
      {alert && <div className={`alert alert-${alert.type} portal-alert alert-dismissible fade show`} role="status"><i className={`bi ${alert.type === 'success' ? 'bi-check-circle-fill' : 'bi-info-circle-fill'} me-2`} />{alert.message}<button type="button" className="btn-close" aria-label="Close" onClick={() => setAlert(null)} /></div>}
      {visibleStudents.length ? <div className="row g-4 student-grid">{visibleStudents.map(student => <div className="col-12 col-sm-6 col-xl-3" key={student.id}><StudentCard student={student} onView={setSelectedStudent} onDelete={deleteStudent} /></div>)}</div> : <div className="empty-state"><i className="bi bi-search" /><h2>No students found</h2><p>Try another name, student ID, or major.</p><button className="btn btn-outline-primary" onClick={() => { setSearch(''); setSubmittedSearch(''); setPage(1); }}>Clear search</button></div>}
      <div className="pagination-wrap"><span className="pagination-caption">Showing {filteredStudents.length ? (page - 1) * pageSize + 1 : 0}–{Math.min(page * pageSize, filteredStudents.length)} of {filteredStudents.length}</span><nav aria-label="Student directory pages"><ul className="pagination mb-0"><li className={`page-item ${page === 1 ? 'disabled' : ''}`}><button className="page-link" onClick={() => changePage(page - 1)} disabled={page === 1}><i className="bi bi-chevron-left me-1" />Previous</button></li>{Array.from({ length: pageCount }, (_, i) => <li className={`page-item ${page === i + 1 ? 'active' : ''}`} key={i}><button className="page-link" aria-current={page === i + 1 ? 'page' : undefined} onClick={() => changePage(i + 1)}>{i + 1}</button></li>)}<li className={`page-item ${page === pageCount ? 'disabled' : ''}`}><button className="page-link" onClick={() => changePage(page + 1)} disabled={page === pageCount}>Next<i className="bi bi-chevron-right ms-1" /></button></li></ul></nav></div>
    </main>
    <footer className="portal-footer"><div className="container portal-container"><div className="row gy-4"><div className="col-6 col-md-3"><h2>Explore</h2><a href="#home">Home</a><a href="#students">Student directory</a><a href="#courses">Courses</a><a href="#reports">Reports</a></div><div className="col-6 col-md-3"><h2>Resources</h2><a href="#academic-calendar">Academic calendar</a><a href="#student-guide">Student guide</a><a href="#help">Help center</a></div><div className="col-md-4 ms-md-auto"><h2>Contact information</h2><p><i className="bi bi-telephone me-2" />+1 123 456 7890</p><p><i className="bi bi-envelope me-2" />info@studentportal.com</p><p><i className="bi bi-geo-alt me-2" />Student Services Center</p></div></div><div className="footer-bottom"><span>© 2026 StudentPortal. All rights reserved.</span><span>Built for better campus connections.</span></div></div></footer>
    <StudentModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
  </>;
}
