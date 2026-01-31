import { Routes, Route } from "react-router-dom";

import ErrorModal from "../components/ErrorModal";
import Home from "../pages/Home";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <ErrorModal />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
