import "./App.css";
import ListEmployeeCommponent from "./components/ListEmployeeCommponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";
import EmployeeComponent from "./components/EmployeeComponent";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <HeaderComponent />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<ListEmployeeCommponent />} />
            <Route path="/helloji" element={<HelloWorld />} />
            <Route path="/add-employee" element={<EmployeeComponent />} />
            {/* http:localhost:3000/edit-employee/1 */}
            <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
