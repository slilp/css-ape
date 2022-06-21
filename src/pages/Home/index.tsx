import React from "react";

const Home = () => {
  return (
    <div>
      HOME
      <div className="row">
        <div className="col-lg-4">
          <div className="w-100" style={{ backgroundColor: "red" }}>
            <div className="row">
              <div>12345</div>
              <div>12345</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4" style={{ backgroundColor: "blue" }}>
          2
        </div>
        <div className="col-lg-4" style={{ backgroundColor: "yellow" }}>
          3
        </div>
      </div>
    </div>
  );
};

export default Home;
