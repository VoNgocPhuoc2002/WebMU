import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import DefaultLayout from "./layout/DefaultLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {AppRouter.map((route, index) => {  
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          const Page = route.component;
          return (
            <Route 
              key={index} 
              path={route.path} 
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
