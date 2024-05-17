import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import component
import Header from "./component/Header";
import Footer from "./component/Footer";

//import pages
import LandingPage from "./pages/LandingPage";
import InforMation from "./pages/InforMation";
import TodoPage from "./pages/TodoPage";


const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inforMation" element={<InforMation />} />
        <Route path="/todoPage" element={<TodoPage />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
};

export default App;
