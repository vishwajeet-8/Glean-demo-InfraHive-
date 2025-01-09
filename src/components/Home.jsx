import React from "react";
import Chart from "./Chart";
import HomeBarchart from "./HomeBarchart";

function Home() {
  return (
    <div className="mainHome">
      <div className="home">
        <h3 className="homeHead">Home</h3>
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

      <div className="month">
        <h2>January 2024</h2>
        <p>
          You have been billed <span>$14.5k</span> over 11 invoices this month{" "}
        </p>
      </div>

      <div className="info">
        <div className="overview">
          <div className="apOverview">
            <h3>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
              </span>
              AP Overview
            </h3>
            <div className="dues">
              <div className="items">
                <h6 className="para">NEEDS APPROVAL</h6>
                <h1>14</h1>
                <p className="exp">$26,744</p>
                <p className="danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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

              <div className="items">
                <h6 className="para">NEEDS PAYMENT SCHEDULED</h6>
                <h1>2</h1>
                <p className="exp">$15,234</p>
                <p className="danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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

              <div className="items">
                <h6 className="para">PAYMENT SCHEDULED</h6>
                <h1>13</h1>
                <p className="exp">$19,204</p>
              </div>
            </div>
          </div>

          <div className="recent">
            <h1>Recent Gleans</h1>
            <div className="item">
              <div className="head">
                <img
                  src="https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png"
                  height="15px"
                  alt=""
                />
                <p className="title">MainStreet</p>
              </div>
              <div className="body">
                <h1>Significant new item purchased</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi labore harum explicabo quas numquam culpa pariatur,
                  Lorem, ipsum. sapiente molestias est, nam perspiciatis, amet
                  mollitia et vel! Quia veniam rerum repellendus voluptatem!
                </p>
              </div>
            </div>

            <div className="item">
              <div className="head">
                <img
                  src="https://w7.pngwing.com/pngs/430/271/png-transparent-hubspot-inc-inbound-marketing-business-sales-marketing-text-logo-number.png"
                  height="15px"
                  alt=""
                />
                <p className="title">HubSpot</p>
              </div>
              <div className="body">
                <h1>Large monthly increase</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="item">
              <div className="head">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
                  height="15px"
                  alt=""
                />
                <p className="title">Google</p>
              </div>
              <div className="body">
                <h1>Buy new assets </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi labore harum explicabo quas numquam culpa pariatur,
                  sapiente molestias est, nam perspiciatis, amet mollitia et
                  vel! Quia veniam rerum repellendus voluptatem! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Doloribus, autem!
                </p>
              </div>
            </div>

            <div className="item">
              <div className="head">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu_punmVpXPehlmF-zb9LO30EZQRtHpK7KA&s"
                  height="15px"
                  alt=""
                />
                <p className="title">MicroSoft</p>
              </div>
              <div className="body">
                <h1>Last month expenditure</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi labore harum explicabo quas numquam culpa pariatur,
                  sapiente molestias est, nam perspiciatis, amet mollitia et
                  vel!
                </p>
              </div>
            </div>

            <div className="item">
              <div className="head">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
                  height="15px"
                  alt=""
                />
                <p className="title">Google</p>
              </div>
              <div className="body">
                <h1>Getting new stock from store</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi labore harum explicabo quas numquam culpa pariatur,
                  sapiente molestias est, nam perspiciatis, amet mollitia et
                  vel! Quia veniam rerum repellendus voluptatem! Lorem ipsum
                  dolor sit.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="head">
                <img
                  src="https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png"
                  height="15px"
                  alt=""
                />
                <p className="title">MainStreet</p>
              </div>
              <div className="body">
                <h1>Price goes high</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi labore harum explicabo quas numquam culpa pariatur,
                  sapiente molestias est, nam perspiciatis, amet mollitia et
                  vel! Quia veniam rerum repellendus voluptatem!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="summary">
          <div className="chartSummary">
            <h3>Spend Summary</h3>
            <div>
              <p>Month to Date</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-bar-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </div>
          </div>

          <Chart />

          <div className="lowMonthChart">
            <p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-bar-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
                  />
                </svg>
              </span>
              August 2022
            </p>
            <p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-bar-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
                  />
                </svg>
              </span>
              December 2022
            </p>
          </div>

          <div className="barChart">
            <h3>Top Vendors</h3>
            <div className="barVendors">
              <ul>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
                    height="15px"
                    alt=""
                  />
                  <p>Google</p>
                </li>
                <li>
                  <img
                    src="https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png"
                    height="15px"
                    alt=""
                  />
                  <p>MainStreet</p>
                </li>
                <li>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu_punmVpXPehlmF-zb9LO30EZQRtHpK7KA&s"
                    height="15px"
                    alt=""
                  />
                  <p>MicroSoft</p>
                </li>
                <li>
                  <img
                    src="https://w7.pngwing.com/pngs/430/271/png-transparent-hubspot-inc-inbound-marketing-business-sales-marketing-text-logo-number.png"
                    height="15px"
                    alt=""
                  />
                  <p>HubSpot</p>
                </li>
                <li>
                  <img
                    src="https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png"
                    height="15px"
                    alt=""
                  />
                  <p>MainStreet</p>
                </li>
                <li>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
                    height="15px"
                    alt=""
                  />
                  <p>Google</p>
                </li>
                <li>
                  <img
                    src="https://w7.pngwing.com/pngs/430/271/png-transparent-hubspot-inc-inbound-marketing-business-sales-marketing-text-logo-number.png"
                    height="15px"
                    alt=""
                  />
                  <p>HubSpot</p>
                </li>
              </ul>
              <HomeBarchart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
