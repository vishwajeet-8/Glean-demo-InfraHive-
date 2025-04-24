import React from "react";

function QuickActions() {
  const actions = [
    {
      id: "create-order",
      icon: "plus",
      label: "Create New Order",
      hasArrow: true,
      badge: null,
      color: "blue",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: "pending-approvals",
      icon: "clock",
      label: "Pending Approvals",
      hasArrow: false,
      badge: 1,
      badgeColor: "bg-yellow-100 text-yellow-800",
      color: "gray",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      id: "delivery-alerts",
      icon: "alert",
      label: "Delivery Alerts",
      hasArrow: false,
      badge: 2,
      badgeColor: "bg-red-100 text-red-800",
      color: "gray",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      id: "generate-reports",
      icon: "document",
      label: "Generate Reports",
      hasArrow: true,
      badge: null,
      color: "gray",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
  ];

  const renderIcon = (iconType, color) => {
    switch (iconType) {
      case "plus":
        return (
          <svg
            className={`w-5 h-5 text-blue-600`}
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
        );
      case "clock":
        return (
          <svg
            className={`w-5 h-5 text-gray-500`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        );
      case "alert":
        return (
          <svg
            className={`w-5 h-5 text-gray-500`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            ></path>
          </svg>
        );
      case "document":
        return (
          <svg
            className={`w-5 h-5 text-gray-500`}
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 lg:ml-20 md:ml-24 mt-5 mx-auto">
      <h2 className="text-xl font-medium text-gray-800 mb-4">Quick Actions</h2>

      <div className="space-y-3">
        {actions.map((action) => (
          <div
            key={action.id}
            className={`${action.bgColor} ${action.hoverColor} border border-gray-200 rounded-lg p-4 flex items-center justify-between cursor-pointer transition-colors duration-150`}
          >
            <div className="flex items-center space-x-3">
              {renderIcon(action.icon, action.color)}
              <span
                className={`font-medium ${
                  action.id === "create-order"
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {action.label}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {action.badge && (
                <span
                  className={`inline-flex items-center justify-center ${action.badgeColor} text-xs font-medium w-6 h-6 rounded-full`}
                >
                  {action.badge}
                </span>
              )}

              {action.hasArrow && (
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;
