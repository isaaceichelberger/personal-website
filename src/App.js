import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
