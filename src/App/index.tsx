import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen">
        <Hero />
      </main>
    </>
  );
}

export default App;
