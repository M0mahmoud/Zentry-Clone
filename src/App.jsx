import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

function App() {
    return (
        <main className="relative w-screen min-h-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <section className=" min-h-[200vh]" />
        </main>
    );
}

export default App;
