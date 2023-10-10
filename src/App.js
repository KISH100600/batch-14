import React from "react";
import Third from "./components/Third";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useRoutes,
} from "react-router-dom";
import Home from "./components/Home";
import First from "./components/First";
import Second from "./components/Second";
import Fourth from "./components/Fourth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/first"
          element={<First />}
          children={
            <>
              <Route path="second" element={<Second data={"hello"} />} />
              <Route path="third" element={<Third />} />
              <Route path="fourth" element={<Fourth />} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
