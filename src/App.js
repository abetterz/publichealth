import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.scss";
import Screens from "./components/screens";
import { Row, Col } from "antd";
import AppRoute from "./app/route";
function App() {
  return <Screens />;
}

export default App;
