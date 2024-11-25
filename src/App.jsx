import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
    return (
        <main className="relative w-screen min-h-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <section className=" min-h-[200vh]" />
        </main>
    );
}

export default App;
