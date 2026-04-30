import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// Home is eagerly loaded — it's the landing page and pre-rendered,
// so lazy-loading it causes a flash during hydration.
import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Process = lazy(() => import("./pages/Process"));
const Contact = lazy(() => import("./pages/Contact"));
const Firestone = lazy(() => import("./pages/Firestone"));

export default function App() {
    return (
        <div className="app">
            <ScrollToTop />
            <Navbar />
            <main>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route
                            path="/projects/:slug"
                            element={<ProjectDetail />}
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/process" element={<Process />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/firestone" element={<Firestone />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
}
