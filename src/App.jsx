import React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/main-layout/main-layout"
import { Home } from "./pages/home"
import { Instructions } from "./pages/instructions"
import { Price } from "./pages/price"
import { Start } from "./pages/start"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/instructions" element={<Instructions/>}/>
          <Route path="/price" element={<Price/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="*" element={<h1>Page Not Founded</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
