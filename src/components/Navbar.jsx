import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pages, setPages] = useState(() => {
    return localStorage.getItem("page") || "Home";
  });

  // Close menu when clicking outside
  const handleClickOutside = () => {
    setIsMobileMenuOpen(false);
  };

  // Add event listener to handle ESC key for closing the sidebar
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className="relative flex">
      {/* Semi-transparent overlay that appears behind the sidebar on mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={handleClickOutside}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - Fixed on desktop, toggleable on mobile with animation */}
      <div
        className={`fixed left-0 top-0 h-screen bg-white shadow-md z-20 md:w-20 overflow-hidden
    transform transition-all duration-300 ease-in-out
    ${
      isMobileMenuOpen
        ? "w-20 translate-x-0"
        : "w-0 -translate-x-full md:translate-x-0 md:w-20"
    }`}
      >
        <div className="flex justify-between items-center my-2 bg-white px-2">
          <img
            src="https://cdn.prod.website-files.com/6127a84dfe068e153ef20572/66ded1bc82df72f2e1d56eb7_Glean%20Logomark%20Blue.svg"
            className="px-2 w-full"
            alt="Glean logo"
          />
        </div>

        <div className="flex flex-col space-y-4 items-center flex-grow bg-[#5050C5] h-full">
          <Link
            className="flex flex-col items-center justify-center w-full py-2 text-white hover:text-[13px] hover:scale-105 transition-all duration-200"
            to="/"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setPages("Home");
              localStorage.setItem("page", "Home");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mb-1"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
            <p className="text-xs text-center">Home</p>
          </Link>

          <Link
            className="flex flex-col items-center justify-center w-full py-2 text-white hover:text-[13px] hover:scale-105 transition-all duration-200"
            to="/procurement"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setPages("Procurement");
              localStorage.setItem("page", "Procurement");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mb-1"
              viewBox="0 0 16 16"
            >
              <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
            </svg>
            <p className="text-xs text-center">Procurement</p>
          </Link>

          <Link
            className="flex flex-col items-center justify-center w-full py-2 text-white hover:text-[13px] hover:scale-105 transition-all duration-200"
            to="/vendors"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setPages("Vendors");
              localStorage.setItem("page", "Vendors");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mb-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            <p className="text-xs text-center">Vendors</p>
          </Link>

          <Link
            className="flex flex-col items-center justify-center w-full py-2 text-white hover:text-[13px] hover:scale-105 transition-all duration-200"
            to="/ordermanagement"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setPages("Order Management");
              localStorage.setItem("page", "Order Management");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mb-1"
              viewBox="0 0 16 16"
            >
              <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
              <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118z" />
            </svg>
            <p className="text-xs text-center">Order Management</p>
          </Link>
        </div>
      </div>

      {/* Main content area - NO left margin on mobile, dynamic margin on desktop */}
      <div
        className={`flex flex-col w-full transition-all duration-300 ease-in-out md:ml-20`}
      >
        {/* Header */}
        <div className="bg-gray-50 flex justify-between items-center p-4 w-full">
          <div className="flex items-center">
            {/* Mobile menu toggle button with animation */}
            <button
              className="mr-4 md:hidden transition-transform duration-300 ease-in-out"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className={`transform transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : "rotate-0"
                }`}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <h3 className="text-xl font-medium">{pages}</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="cursor-pointer">
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
            <p className="font-medium hidden sm:block">Glean</p>
            <button className="p-2 rounded-full border-none bg-black text-white w-8 h-8 flex items-center justify-center">
              U
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
