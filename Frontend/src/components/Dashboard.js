import React from 'react';
import '../dashboard.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="#">
        <span className="material-symbols-sharp">grid_view</span>
        <h3>Dashbord</h3>
      </a>
      <a href="#" className="active">
        <span className="material-symbols-sharp">person_outline</span>
        <h3>costomers</h3>
      </a>
      <a href="#">
        <span className="material-symbols-sharp">report_gmailerrorred</span>
        <h3>Reports</h3>
      </a>
      <a href="#">
        <span className="material-symbols-sharp">settings</span>
        <h3>settings</h3>
      </a>
      <a href="#">
        <span className="material-symbols-sharp">add</span>
        <h3>Add Product</h3>
      </a>
      <a href="#">
        <span className="material-symbols-sharp">logout</span>
        <h3>logout</h3>
      </a>
    </div>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Dashbord</h1>
      <div className="date">
        <input type="date" />
      </div>
      <div className="insights">
        {/* Insights components */}
      </div>
      <div className="recent_order">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payments</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mini USB</td>
              <td>4563</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
            {/* Additional rows */}
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div>
    </main>
  );
}

function RightSidebar() {
  return (
    <div className="right">
      <div className="top">
        <button id="menu_bar">
          <span className="material-symbols-sharp">menu</span>
        </button>
        <div className="theme-toggler">
          <span className="material-symbols-sharp active">light_mode</span>
          <span className="material-symbols-sharp">dark_mode</span>
        </div>
        <div className="profile">
          <div className="info">
            <p><b>User</b></p>
            <p>Admin</p>
            <small className="text-muted"></small>
          </div>
          <div className="profile-photo">
            <img src="pf.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="recent_updates">
        <h2>Recent Update</h2>
        <div className="updates">
          {/* Recent updates */}
        </div>
      </div>
      <div className="sales-analytics">
        <h2>Sales Analytics</h2>
        <div className="item onlion">
          {/* Sales analytics items */}
        </div>
      </div>
      <div className="item add_product">
        <div>
          <span className="material-symbols-sharp">add</span>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="container">
      <aside>
        <div className="top">
          <div className="logo">
            <h2>VS<span className="danger">Techshat</span></h2>
          </div>
          <div className="close" id="close_btn">
            <span className="material-symbols-sharp">close</span>
          </div>
        </div>
        <Sidebar />
      </aside>
      <MainContent />
      <RightSidebar />
    </div>
  );
}

export default AdminDashboard;
