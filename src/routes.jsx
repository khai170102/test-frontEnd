import { Routes, Route } from "react-router-dom";

import Layout from "./app/components/Layout";
import { ComingSoon } from "./app/pages/ComingSoon/Loadable";
import { GamePage } from "./app/pages/GamePage/Loadable";

const Routers = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/games" element={<GamePage />} />

        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </Layout>
  );
};

export default Routers;
