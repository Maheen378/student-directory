import React from 'react';

export default function Navbar({ search, setSearch, onSearch }) {
  return <nav className="navbar navbar-expand-lg portal-navbar">
    <div className="container portal-container">
      <a className="navbar-brand" href="#home"><span className="brand-mark"><i className="bi bi-mortarboard-fill" /></span>StudentPortal</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portalNav" aria-controls="portalNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="portalNav">
        <ul className="navbar-nav me-auto ms-lg-4">
          <li className="nav-item"><a className="nav-link" href="#dashboard">Dashboard</a></li>
          <li className="nav-item"><a className="nav-link active" href="#students">Students</a></li>
          <li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
          <li className="nav-item"><a className="nav-link" href="#reports">Reports</a></li>
        </ul>
        <div className="d-flex align-items-center gap-2 nav-tools">
          <div className="dropdown"><button className="btn settings-btn dropdown-toggle" data-bs-toggle="dropdown">Settings</button><ul className="dropdown-menu dropdown-menu-end"><li><a className="dropdown-item" href="#profile">Profile settings</a></li><li><a className="dropdown-item" href="#preferences">Preferences</a></li></ul></div>
          <form className="d-flex search-form" role="search" onSubmit={onSearch}>
            <input className="form-control" aria-label="Search students" placeholder="Search students..." value={search} onChange={e => setSearch(e.target.value)} />
            <button className="btn btn-primary search-btn" type="submit"><i className="bi bi-search me-1" />Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>;
}
