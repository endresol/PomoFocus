import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";


function App() {
   
  return (
    <div className="flex">
      <NavBar />
      <div className="p-7 w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default App
