import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import HeroPage from "../views/Hero";
import ResponsiveAppBar from "../component/CustomeAppBar";
import AboutUS from "../views/About";
import Studentpro from "../views/Studentpro";
import SignIn from "../views/Sign";




export const CreateRouter = () => {
    return(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<ResponsiveAppBar />} />
        <Route path="/home" element={<HeroPage />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/student" element={<Studentpro/>} />
        <Route path="/sign" element={<SignIn/>} />
       
       
        
     </Routes>
    
</BrowserRouter>
    )
}