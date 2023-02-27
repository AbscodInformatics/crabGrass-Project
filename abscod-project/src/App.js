import "./App.css";
import DashBoard from "./pages/DashBoard";
import SignIn from "./components/SignIn";
import { useNavigate } from "react-router-dom";
import PrintSlip from "./components/PrintSlip";

function App() {
  const navigate = useNavigate();
  
  const auth = JSON.parse(localStorage.getItem("signin"));

  return  <div> <PrintSlip/>

  {auth ? <DashBoard/> : <SignIn/>}</div>;
}

export default App;
