import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "routes";

function App() {
  return (
    <div className="container-center">
      <Routes>
        {routes.routes.map((route, idx: number) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                element={<route.component></route.component>}
              />
            )
          );
        })}
        <Route
          path="*"
          element={<routes.redirect.component></routes.redirect.component>}
        />
      </Routes>
    </div>
  );
}

export default App;
