import { Footer, Navbar } from "./components/layout";
import { About, Contact, Features, Hero, Story } from "./sections";

function App() {
    return (
        <main className="relative w-screen min-h-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
