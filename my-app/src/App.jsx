import About from "./src/components/About";
import Footer from "./src/components/Footer";
import Info from "./src/components/Info";
import Interest from "./src/components/Interest";

function App() {
  return (
    <>
      <div className="container">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </>
  );
}

export default App;
