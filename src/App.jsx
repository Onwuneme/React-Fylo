import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import Home from './page/Home'

import Feature from "./page/Feature";
import Team from "./page/Team";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="Feature" element={<Feature />} />
          <Route path="Team" element={<Team />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
