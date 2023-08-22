import Home from "./Screens/Home";
import Services from "./Screens/Services";
import HowWeWork from "./Screens/HowWeWork";
import Contact from "./Screens/Contact";
import NavBar from "./Components/NavBar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

