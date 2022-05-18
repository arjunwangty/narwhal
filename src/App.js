import { Layout } from "antd";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import TeamsPage from "./pages/teamsPage/teamsPage";
import DummyPage from "./pages/dummyPage";
import help from "./assets/icon-help.svg";

const { Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Sider collapsed={true}>
        <Sidebar />
        <img
          onClick={() => alert("help")}
          className="logo"
          src={help}
          alt="Logo"
          style={{
            position: "fixed",
            left: "27px",
            bottom: "26px",
            cursor: "pointer",
          }}
        />
      </Sider>
      <Layout>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Navigate to="/teams/*" replace />} />
            <Route path="/teams/*" element={<TeamsPage />} />
            <Route path="/alternate" element={<DummyPage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center", color: "#cccccc" }}></Footer>
      </Layout>
    </Layout>
  );
}

export default App;
