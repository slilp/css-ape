import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "routes";
import Layout from "components/Layout";

function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
