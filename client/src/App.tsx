import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { DashBoard } from "./pages/DashBoard";
import { Transaction } from "./pages/Transactions";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/transaction" element={<Transaction />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
