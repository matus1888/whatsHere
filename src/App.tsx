import { Layout } from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./shared/LoginPage/Login";
import { exampleMain } from "./shared";
import { isTmaLaunched } from "./main";
import { Visits } from "./shared";

export function App() {
  console.log("render");

  if (isTmaLaunched) {
    return <WithTma />;
  } else {
    return <WithoutTma />;
  }
}
function WithoutTma() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Layout main={exampleMain} />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/" element={<Layout main={exampleMain} />} />
        <Route path="/visits" element={<Layout main={<Visits />} />} />
      </Routes>
    </BrowserRouter>
  );
}
function WithTma() {
  return <WithoutTma />;
}
