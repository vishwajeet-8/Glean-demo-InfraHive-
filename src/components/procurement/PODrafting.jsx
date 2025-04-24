function PODrafting() {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <h2 className="text-xl font-medium text-gray-800">
          Purchase Order Drafts
        </h2>
        <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          Create New PO
        </button>
      </div>

      {/* Empty State */}
      <div className="bg-gray-50 rounded-lg p-10 flex flex-col items-center justify-center text-center">
        <div className="bg-blue-100 p-6 rounded-full mb-4">
          <svg
            className="w-10 h-10 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-medium text-gray-800 mb-3">
          Create Purchase Orders
        </h3>
        <p className="text-gray-600 max-w-md mb-8">
          Select approved quotes to generate purchase orders or create a new PO
          from scratch.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center px-5 py-2 border border-gray-300 rounded-lg bg-white text-blue-600 hover:bg-gray-50 transition-colors duration-150">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            View Approved Quotes
          </button>
          <button className="flex items-center justify-center px-5 py-2 border border-transparent rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Create New PO
          </button>
        </div>
      </div>
    </div>
  );
}

export default PODrafting;
