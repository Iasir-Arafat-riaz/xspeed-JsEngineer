import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./pages/Table/Table";
import Navigation from "./Shared/Navigation/Navigation";
import GetForm from './pages/GetForm/GetForm';
import UpdateForm from './pages/UpdateForm/UpdateForm';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navigation />
        <Routes>
         
          <Route path="/" element={<Table />} />
          <Route path="/table" element={<Table />} />
          <Route path="/getForm" element={<GetForm />} />
          <Route path="/updateForm/:id" element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
