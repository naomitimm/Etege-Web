import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowComponent from "./components/show-navbar/ShowNavbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import AuthPage from "./pages/auth/signup/AuthPage";
import ServiceDetails from "./pages/service-details/ServiceDetails";
import NotFound from "./pages/404";
import SelfExamination from "./pages/self-examination/selfExamination";
import CommingSoon from "./pages/commingSoon";
function App() {
  return (
    <Router>
      <div className="App">
        <ShowComponent>
          <NavBar />
        </ShowComponent>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/login" element={<AuthPage />} />
            <Route
              exact
              path="/self-examination"
              element={<SelfExamination />}
            />
            <Route exact path="/consultations" element={<CommingSoon />} />
			<Route exact path="/donate" element={<CommingSoon />} />
            <Route
              exact
              path="/services/:serviceName"
              element={<ServiceDetails />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <ShowComponent>
          <Footer />
        </ShowComponent>
      </div>
    </Router>
  );
}

export default App;
