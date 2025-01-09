import React from "react";
import HighchartComponent from "./HighchartComponent";
import "bootstrap-icons/font/bootstrap-icons.css";

function Compare() {
  return (
    <div className="compare">
      <h1>Compare</h1>
      <div className="analyze">
        <p>Analyze</p>

        <div className="glean">
          <div className="gleanBar">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p>Glean</p>
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </span>
        </div>

        <div className="date">
          <p>Time Period</p>
          <p className="pContent">
            Jul 2022
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </p>
          <p>vs</p>
          <p className="pContent">
            Aug 2022
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>

      <div className="mixBar">
        <div className="sideBar1">
          <HighchartComponent />
        </div>
        <div className="sideBar2">
          <p>
            Total spend decreased{" "}
            <span className="green">
              -$58,717 -17% <i class="bi bi-arrow-down-right"></i>
            </span>
          </p>

          <h4>Vendor breakdown</h4>

          <ul>
            <li>
              10 vendors increased, for{" "}
              <span className="red">
                $13,389 <i class="bi bi-arrow-up-right"></i>
              </span>
            </li>
            <li>
              13 vendors decreased, for{" "}
              <span className="green">
                $88,389 <i class="bi bi-arrow-down-right"></i>
              </span>
            </li>
            <li>
              2 new vendors for{" "}
              <span className="red">
                $11,389 <i class="bi bi-arrow-up-right"></i>
              </span>
            </li>
          </ul>

          <h4>Largest driver of variance</h4>

          <li>
            <span className="green">
              $49,398 <i class="bi bi-arrow-down-right"></i>
            </span>
            decrease in Datadog
          </li>
        </div>
      </div>

      <div className="lastCard">
        <div className="filter">
          <p>
            <i class="bi bi-funnel"></i>
            filter
          </p>
          <p>
            <i class="bi bi-search"></i>
            Search Vendors
          </p>
        </div>

        <ul>
          <li className="main">
            <p>Vendor</p>
            <p>JUL 2022</p>
            <p> AUG 2022</p>
            <p> Delta ($)</p>
            <p> Delta (%)</p>
          </li>

          <li className="item">
            <div>
              <img
                src="https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png"
                alt=""
              />
              <p>Main street</p>
            </div>
            <p>..</p>
            <p>$12,995</p>
            <p className="red">
              +$12,995 <i class="bi bi-arrow-up-right"></i>
            </p>
            <p className="red">
              N/A <i class="bi bi-arrow-up-right"></i>
            </p>
          </li>
          <li className="item">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
                alt=""
              />
              <p>Google</p>
            </div>
            <p>..</p>
            <p>$1,995</p>
            <p className="red">
              +$995 <i class="bi bi-arrow-up-right"></i>
            </p>
            <p className="red">
              N/A <i class="bi bi-arrow-up-right"></i>
            </p>
          </li>
          <li className="item">
            <div>
              <img
                src="https://w7.pngwing.com/pngs/430/271/png-transparent-hubspot-inc-inbound-marketing-business-sales-marketing-text-logo-number.png"
                alt=""
              />
              <p>Hub spot</p>
            </div>
            <p>..</p>
            <p>$995</p>
            <p className="red">
              +$20,995 <i class="bi bi-arrow-up-right"></i>
            </p>
            <p className="red">
              +$2,995 <i class="bi bi-arrow-up-right"></i>
            </p>
          </li>
          <li className="item">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu_punmVpXPehlmF-zb9LO30EZQRtHpK7KA&s"
                alt=""
              />
              <p>MicroSoft</p>
            </div>
            <p>..</p>
            <p>$995</p>
            <p className="red">
              +$20,995 <i class="bi bi-arrow-up-right"></i>
            </p>
            <p className="red">
              +$2,995 <i class="bi bi-arrow-up-right"></i>
            </p>
          </li>
          <li className="item">
            <div>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <p>Oracle</p>
            </div>
            <p>$498</p>
            <p>$2,995</p>
            <p className="red">
              +$20,995 <i class="bi bi-arrow-up-right"></i>
            </p>
            <p className="red">
              +$2,995 <i class="bi bi-arrow-up-right"></i>
            </p>
          </li>
          <li className="item">
            <div>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <p>IBM</p>
            </div>
            <p>$982</p>
            <p>$7,895</p>
            <p className="red">
              +$20,995 <i class="bi bi-arrow-up-right"></i>
            </p>
            <p className="red">
              +$2,995 <i class="bi bi-arrow-up-right"></i>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Compare;
