import "./App.css";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero";
import Join from "./Component/Join/Join";
import Plans from "./Component/Plans/Plans";
import Programs from "./Component/Programs/Programs";
import Reasons from "./Component/Reasons/Reasons";
import Testimonials from "./Component/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>

    </div>
  );
}

export default App;
