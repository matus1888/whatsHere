import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./shared/LoginPage/Login";
import { Visits } from "./shared";
import { Resume } from "./shared/Resume";
import { Layout } from "./shared/Layout";
import { Home } from "./shared/Home/Home";

export function App() {
  //TO prod
  return (
    <BrowserRouter basename={"/whatsHere"}>
      <Routes>
        <Route path="/home" element={<Layout main={<Home />} />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/" element={<Layout main={<Home />} />} />
        <Route path="/visits" element={<Layout main={<Visits />} />} />
        <Route path="/resume" element={<Layout main={<Resume />} />} />
      </Routes>
    </BrowserRouter>
  );
}
