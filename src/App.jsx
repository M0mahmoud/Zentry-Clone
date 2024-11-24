import About from "./components/About";
import Hero from "./components/Hero";

function App() {
    return (
        <main className="relative w-screen min-h-screen overflow-x-hidden">
            <Hero />
            <About />
            <section className=" min-h-[200vh]" />
        </main>
    );
}

export default App;
