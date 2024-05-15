import "./App.scss";
import Layout from "./Layout";
import Home from "./components/Home";
import SideBar from "./components/sidebar";
import { Route, Routes } from "react-router-dom";
import Configuration from "./components/Configuration";

function App() {
  return (
    <>
      <main>
        <SideBar />
        <Layout>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/configuration" element={<Configuration />} />
          </Routes>
        </Layout>
      </main>
    </>
  );
}

export default App;
