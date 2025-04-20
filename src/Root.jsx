import { Outlet } from "react-router"
import Navber from "./components/Header/Navber"
import Footer from "./components/Footer/Footer"

function Root() {


  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Root
