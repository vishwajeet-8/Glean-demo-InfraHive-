import React from "react";

const RecentAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "Reorder Alert",
      description: "Office supplies inventory below threshold",
      priority: "Medium Priority",
      priorityColor: "bg-amber-100 text-amber-800",
      icon: "warning",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-500",
      date: "19 Apr 2025",
    },
    {
      id: 2,
      type: "Performance Alert",
      description: "Mega Manufacturing score dropped below 70%",
      priority: "High Priority",
      priorityColor: "bg-red-100 text-red-800",
      icon: "alert",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      date: "18 Apr 2025",
    },
    {
      id: 3,
      type: "Delivery Alert",
      description: "Expected delay in PO-2025-002 delivery",
      priority: "",
      priorityColor: "",
      icon: "warning",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-500",
      date: "17 Apr 2025",
    },
  ];

  return (
    <div className="m-3 sm:m-4 p-4 sm:p-6 md:ml-20 w-auto rounded-lg shadow-md bg-white overflow-x-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
          Recent Alerts
        </h2>
      </div>

      <div className="space-y-4 overflow-hidden">
        {alerts.map((alert) => (
          <div key={alert.id} className="border-t border-gray-200 pt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div className="flex">
                <div className={`p-2 mr-3 flex-shrink-0`}>
                  {alert.icon === "warning" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 sm:h-6 sm:w-6 ${alert.iconColor}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 sm:h-6 sm:w-6 ${alert.iconColor}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-gray-700 text-sm sm:text-base truncate">
                    {alert.type}
                  </h3>
                  <p className="text-gray-500 mt-1 font-medium text-xs sm:text-sm line-clamp-2">
                    {alert.description}
                  </p>
                  {alert.priority && (
                    <span
                      className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${alert.priorityColor} mt-2`}
                    >
                      {alert.priority}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-0 flex-shrink-0">
                {alert.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAlerts;
