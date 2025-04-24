import React from "react";
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
    <div className="p-5 bg-gray-100 min-h-screen w-[97%] lg:ml-20 md:ml-20">
      {/* Header */}
      <header className="flex justify-end mb-5">
        <button className="bg-indigo-600 text-white px-5 py-2 rounded cursor-pointer">
          Request New Vendor
        </button>
      </header>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-gray-600 font-normal mb-5">Overview</h2>
        <div className="flex felx-wrap gap-5 mb-8 items-center justify-around">
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-xs mb-2">NEW</span>
            <span className="text-2xl font-bold text-gray-800">10</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-xs mb-2">
              RECENTLY INVOICED
            </span>
            <span className="text-2xl font-bold text-gray-800">2</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-xs mb-2">
              MISSING DETAILS
            </span>
            <span className="text-2xl font-bold text-red-500">18</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-xs mb-2">
              PENDING REQUESTS
            </span>
            <span className="text-2xl font-bold text-gray-800">6</span>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="mb-5 border-b border-gray-300">
        <button className="px-5 py-2 mr-5 text-indigo-600 border-b-2 border-indigo-600">
          Vendors
        </button>
        <button className="px-5 py-2 mr-5 text-gray-600">
          Requested Vendors
        </button>
      </nav>

      {/* Vendors Section */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded cursor-pointer">
            <span>Filters</span>
            <span className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-600"></span>
          </button>
          <div className="text-gray-600 text-sm">76 Vendors matching "d"</div>
          <div className="flex items-center gap-2">
            <span>1 of 2</span>
            <div className="flex gap-1">
              <button className="bg-white border border-gray-300 px-2 py-1 rounded cursor-pointer">
                ←
              </button>
              <button className="bg-white border border-gray-300 px-2 py-1 rounded cursor-pointer">
                →
              </button>
              <button className="bg-white border border-gray-300 px-2 py-1 rounded cursor-pointer">
                ⚙️
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-full bg-white rounded-lg shadow-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 border-b border-gray-300 text-gray-600 font-normal">
                  Vendor
                </th>
                <th className="text-left py-4 px-4 border-b border-gray-300 text-gray-600 font-normal">
                  Department
                </th>
                <th className="text-left py-4 px-4 border-b border-gray-300 text-gray-600 font-normal">
                  Vendor Owner
                </th>
                <th className="text-left py-4 px-4 border-b border-gray-300 text-gray-600 font-normal">
                  GL Account
                </th>
                <th className="text-left py-4 px-4 border-b border-gray-300 text-gray-600 font-normal">
                  Approvers
                </th>
                <th className="text-left py-4 px-4 border-b border-gray-300 text-gray-600 font-normal">
                  Last Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-4 border-b border-gray-200 cursor-pointer">
                    <img src={vendor.img} alt="" className="h-5" />
                  </td>
                  <td
                    className="py-4 px-4 border-b border-gray-200 text-gray-800 cursor-pointer"
                    onClick={handleClick}
                  >
                    {vendor.name}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200 text-gray-800">
                    {vendor.department}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200 text-gray-800">
                    {vendor.vendorOwner}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200 text-gray-800">
                    {vendor.glAccount}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200 text-gray-800">
                    {vendor.approvers}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200 text-gray-800">
                    {vendor.lastInvoice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Vendors;
