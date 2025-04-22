import React from "react";

function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "delivery",
      title: "Order Delivered",
      description: "PO-2025-001 from Tech Solutions Inc. has been delivered.",
      timeAgo: "2 hours ago",
      icon: "checkmark",
    },
    {
      id: 2,
      type: "shipment",
      title: "Shipment Update",
      description:
        "PO-2025-002 from Global Supplies Co. is in transit. Expected delivery on 19 Apr.",
      timeAgo: "Yesterday",
      icon: "truck",
    },
    {
      id: 3,
      type: "approval",
      title: "Approval Required",
      description: "PO-2025-004 requires your approval before processing.",
      timeAgo: "2 days ago",
      icon: "warning",
    },
  ];

  // Function to render the correct icon for each activity type
  const renderIcon = (type) => {
    switch (type) {
      case "delivery":
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        );
      case "shipment":
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              ></path>
            </svg>
          </div>
        );
      case "approval":
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100">
            <svg
              className="w-6 h-6 text-yellow-500"
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
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-5 lg:ml-20 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium text-gray-800">Recent Activity</h2>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View All
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-4 bg-gray-50 rounded-lg flex items-start space-x-4"
          >
            {renderIcon(activity.type)}

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-medium text-gray-900">
                {activity.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {activity.description}
              </p>
            </div>

            <div className="text-sm text-gray-500 whitespace-nowrap">
              {activity.timeAgo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
