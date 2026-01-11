import Hero from "./components/home/Hero";
import Sectionrun from "./components/running/Secctionrun"
import Sectiontwo from "./components/for_you/Sectiontwo"
import Sectionthree from "./components/approach/Sectionthree"
import Sectionfour from "./components/cliente/sectionfour";
import Sectionfive from "./components/faqs/Sectionfive"
import Sectionsix from "./components/contact/Sectionsix"  
import Footer from "./components/footer/Footer"

function App() {
 

  return (
    
    <div className="w-screen bg-[#0F172A] ">

      <div className="bg-[#F8FAFC] rounded-b-[50px] ">
      <Hero/>
      <Sectionrun/>
      <Sectiontwo />
      <Sectionthree />
      </div>

      <div className="">
        <Sectionfour />
        <Sectionfive />
        <Sectionsix />
        <Footer />

      </div>
    
    </div>
  );
}

export default App;
