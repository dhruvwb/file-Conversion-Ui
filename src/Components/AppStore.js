import React from "react";

export default function AppStore() {
  return (
    <div>
      {" "}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>Download App on Mobile</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <a href="#" className="btn btn-dark">
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Apple_App_Store_Logo.svg/1200px-Apple_App_Store_Logo.svg.png"
                alt="App"
                height="30"
              /> */}
              <span>Download on the App Store</span>
            </a>
          </div>
          <div className="col-3">
            <a href="#" className="btn btn-dark">
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Google_Play_Store_badge.svg/1200px-Google_Play_Store_badge.svg.png"
                alt="Play"
                height="30"
              /> */}
              <span>GET IT ON Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
