import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Firestone from "./pages/Firestone";
import FirestoneVision from "./pages/FirestoneVision";
import Home from "./pages/Home";
import Process from "./pages/Process";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

export default function AppPrerender() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/firestone" element={<Firestone />} />
                    <Route
                        path="/firestone/vision"
                        element={<FirestoneVision />}
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
