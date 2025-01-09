import React from "react";
import "../vendor-styles.css";
import { useNavigate } from "react-router-dom";

function Vendors() {
  const navigate = useNavigate();
  const vendors = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQE3bUzwtw4Nk5_O6EBT6L-vBdJtePEpTWQ&s",
      name: "Codat",
      department: "Product",
      vendorOwner: "Tia Alexander",
      glAccount: "AP Partners",
      approvers: 2,
      lastInvoice: "Aug 8, 2022",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB76eE2bnXcjG2XFi1NNLmULApVr8UmDOfWA&s",
      name: "Currencycloud",
      department: "Product",
      vendorOwner: "Howard Katzenberg",
      glAccount: "AP Partners",
      approvers: 2,
      lastInvoice: "Sep 4, 2022",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9sgQ2IJecBn9DHrVqVKzJSCKvvmYcxjicw&s",
      name: "Dwolla",
      department: "Product",
      vendorOwner: "Add +",
      glAccount: "AP Partners",
      approvers: 1,
      lastInvoice: "Jun 1, 2022",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpbKq2S3gqJI_dVLGj5RYyI7H4pG8FdQlFA&s",
      name: "Odetta",
      department: "Data",
      vendorOwner: "Add +",
      glAccount: "Invoice processing - BPO",
      approvers: 1,
      lastInvoice: "Apr 7, 2021",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQE3bUzwtw4Nk5_O6EBT6L-vBdJtePEpTWQ&s",
      name: "Codat",
      department: "Product",
      vendorOwner: "Tia Alexander",
      glAccount: "AP Partners",
      approvers: 2,
      lastInvoice: "Aug 8, 2022",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB76eE2bnXcjG2XFi1NNLmULApVr8UmDOfWA&s",
      name: "Currencycloud",
      department: "Product",
      vendorOwner: "Howard Katzenberg",
      glAccount: "AP Partners",
      approvers: 2,
      lastInvoice: "Sep 4, 2022",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9sgQ2IJecBn9DHrVqVKzJSCKvvmYcxjicw&s",
      name: "Dwolla",
      department: "Product",
      vendorOwner: "Add +",
      glAccount: "AP Partners",
      approvers: 1,
      lastInvoice: "Jun 1, 2022",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpbKq2S3gqJI_dVLGj5RYyI7H4pG8FdQlFA&s",
      name: "Odetta",
      department: "Data",
      vendorOwner: "Add +",
      glAccount: "Invoice processing - BPO",
      approvers: 1,
      lastInvoice: "Apr 7, 2021",
    },
  ];

  function handleClick() {
    navigate("/awsbilling");
  }
  return (
    <div className="dashboard-container">
      <div className="vendorNav">
        <h3 className="homeHead">Vendors</h3>
        <div className="homeContent">
          <div className="homeUpload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-upload"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
            </svg>
          </div>
          <p className="homeGlean">Glean</p>
          <button className="homeButton">U</button>
        </div>
      </div>

      <header className="header">
        <button className="request-vendor-btn">Request New Vendor</button>
      </header>

      <section className="overview">
        <h2>Overview</h2>
        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-label">NEW</span>
            <span className="stat-value">10</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">RECENTLY INVOICED</span>
            <span className="stat-value">2</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">MISSING DETAILS</span>
            <span className="stat-value missing">18</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">PENDING REQUESTS</span>
            <span className="stat-value">6</span>
          </div>
        </div>
      </section>

      <nav className="nav-tabs">
        <button className="tab active">Vendors</button>
        <button className="tab">Requested Vendors</button>
      </nav>

      <section className="vendors-section">
        <div className="filters-bar">
          <button className="filter-btn">
            <span>Filters</span>
            <span className="triangle-down"></span>
          </button>
          <div className="search-results">76 Vendors matching "d"</div>
          <div className="pagination">
            <span>1 of 2</span>
            <div className="pagination-controls">
              <button className="nav-btn">←</button>
              <button className="nav-btn">→</button>
              <button className="settings-btn">⚙️</button>
            </div>
          </div>
        </div>

        <table className="vendors-table">
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Department</th>
              <th>Vendor Owner</th>
              <th>GL Account</th>
              <th>Approvers</th>
              <th>Last Invoice</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index}>
                <td>
                  <img src={vendor.img} alt="" />
                </td>
                <td
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {vendor.name}
                </td>
                <td>{vendor.department}</td>
                <td>{vendor.vendorOwner}</td>
                <td>{vendor.glAccount}</td>
                <td>{vendor.approvers}</td>
                <td>{vendor.lastInvoice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Vendors;
