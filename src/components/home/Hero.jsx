import React from "react";
import Chart from "./Chart";
import HomeBarchart from "./HomeBarchart";

function Hero() {
  const gleans = [
    {
      company: "MainStreet",
      logo: "https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png",
      title: "Significant new item purchased",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore harum explicabo quas numquam culpa pariatur, sapiente molestias est, nam perspiciatis, amet mollitia et vel! Quia veniam rerum repellendus voluptatem!",
    },
    {
      company: "HubSpot",
      logo: "https://w7.pngwing.com/pngs/430/271/png-transparent-hubspot-inc-inbound-marketing-business-sales-marketing-text-logo-number.png",
      title: "Large monthly increase",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png",
      title: "Buy new assets",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore harum explicabo quas numquam culpa pariatur, sapiente molestias est, nam perspiciatis, amet mollitia et vel! Quia veniam rerum repellendus voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, autem!",
    },
    {
      company: "MicroSoft",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu_punmVpXPehlmF-zb9LO30EZQRtHpK7KA&s",
      title: "Last month expenditure",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore harum explicabo quas numquam culpa pariatur, sapiente molestias est, nam perspiciatis, amet mollitia et vel!",
    },
    {
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png",
      title: "Getting new stock from store",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore harum explicabo quas numquam culpa pariatur, sapiente molestias est, nam perspiciatis, amet mollitia et vel! Quia veniam rerum repellendus voluptatem! Lorem ipsum dolor sit.",
    },
    {
      company: "MainStreet",
      logo: "https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png",
      title: "Price goes high",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore harum explicabo quas numquam culpa pariatur, sapiente molestias est, nam perspiciatis, amet mollitia et vel! Quia veniam rerum repellendus voluptatem!",
    },
  ];

  const vendorData = [
    {
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png",
      amount: "$86.1k",
      width: "60%",
    },
    {
      company: "MainStreet",
      logo: "https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png",
      amount: "$119.1k",
      width: "75%",
    },
    {
      company: "Microsoft",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu_punmVpXPehlmF-zb9LO30EZQRtHpK7KA&s",
      amount: "$29.0k",
      width: "40%",
    },
    {
      company: "HubSpot",
      logo: "https://w7.pngwing.com/pngs/430/271/png-transparent-hubspot-inc-inbound-marketing-business-sales-marketing-text-logo-number.png",
      amount: "$10.8k",
      width: "25%",
    },
    {
      company: "MainStreet",
      logo: "https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png",
      amount: "$98.78k",
      width: "65%",
    },
    {
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png",
      amount: "$71.0k",
      width: "45%",
    },
    {
      company: "HubSpot",
      logo: "https://w7.pngwing.com/pngs/430/271/png-transparent-hubspot-inc-inbound-marketing-business-sales-marketing-text-logo-number.png",
      amount: "$65.1k",
      width: "40%",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 pb-4 mt-2 lg:ml-20">
      {/* Left Column */}
      <div className="w-full lg:w-1/2">
        {/* Month Info */}
        <div className="px-5 py-4">
          <h2 className="font-medium text-xl">January 2024</h2>
          <p className="text-sm">
            You have been billed <span className="font-bold">$14.5k</span> over
            11 invoices this month
          </p>
        </div>

        {/* AP Overview */}
        <div className="bg-white rounded-lg shadow-md p-5 mb-4">
          <h3 className="text-xl font-light mb-4">AP Overview</h3>
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
            <div className="space-y-1">
              <h6 className="text-xs text-gray-500 font-medium">
                NEEDS APPROVAL
              </h6>
              <h1 className="text-2xl font-medium">14</h1>
              <p className="text-xs text-gray-600 font-semibold">$26,744</p>
              <p className="flex items-center gap-1 text-xs text-red-500 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-exclamation-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>
                4 Past Due
              </p>
            </div>

            <div className="space-y-1">
              <h6 className="text-xs text-gray-500 font-medium">
                NEEDS PAYMENT SCHEDULED
              </h6>
              <h1 className="text-2xl font-medium">2</h1>
              <p className="text-xs text-gray-600 font-semibold">$15,234</p>
              <p className="flex items-center gap-1 text-xs text-red-500 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-exclamation-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>
                4 Past Due
              </p>
            </div>

            <div className="space-y-1">
              <h6 className="text-xs text-gray-500 font-medium">
                PAYMENT SCHEDULED
              </h6>
              <h1 className="text-2xl font-medium">13</h1>
              <p className="text-xs text-gray-600 font-semibold">$19,204</p>
            </div>
          </div>
        </div>

        {/* Recent Gleans */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-base font-medium mb-4">Recent Gleans</h2>

          <div className="space-y-4 pr-2">
            {gleans.map((glean, index) => (
              <div
                key={index}
                className="border-b border-gray-100 pb-3 last:border-b-0"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-5 h-5 flex-shrink-0">
                    <img
                      src={glean.logo}
                      alt={glean.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-700 font-semibold">{glean.company}</p>
                </div>

                <div className="pl-8">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {glean.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-tight line-clamp-2">
                    {glean.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2">
        <div className="p-5 h-auto lg:h-[800px]">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <h3 className="italic font-medium">Spend Summary</h3>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 w-full sm:w-auto">
              <p className="text-sm">Month to Date</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-bar-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </div>
          </div>

          <div className="mb-4 h-[200px] sm:h-[250px]">
            <Chart />
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 italic text-sm">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-bar-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
                />
              </svg>
              August 2022
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-bar-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
                />
              </svg>
              December 2022
            </p>
          </div>

          <div className="bg-gray-50 p-4 overflow-hidden">
            <h3 className="italic text-lg font-medium mb-4">Top Vendors</h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex flex-col gap-4 sm:gap-10 w-full sm:w-auto">
                {vendorData.map((vendor, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center w-28 sm:w-32 mr-2 sm:mr-4">
                      <div className="w-5 h-5 mr-2 flex-shrink-0">
                        <img
                          src={vendor.logo}
                          alt={vendor.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-sm truncate mr-10">
                          {vendor.company}
                        </span>
                        <span className="font-medium lg:hidden">
                          {vendor.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full sm:w-auto overflow-x-hidden hidden lg:block">
                <HomeBarchart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
