import {Routes, Route} from "react-router-dom"
import About from "../About";
import Contact from "../Contact";
import Service from "../Service";
import Summary from "../Summary";

const AllRoutes = () => {
    return (
        <Routes>
            <Route  path="/about" element={<About />}/>
            <Route  path="/contact" element={<Contact />}/>
            <Route  path="/service" element={<Service />}/>
            <Route  path="/summary" element={<Summary />}/>
        </Routes>
    )
}

export default AllRoutes;