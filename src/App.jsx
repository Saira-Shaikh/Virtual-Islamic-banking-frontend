import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Services from "./components/Services";
import Investments from "./components/Investments";
import Blogs from "./components/blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full">
        <Header />
        <AboutUs />
        <Products />
        <Services />
        <Investments />
        <Blogs />
        <Footer />
      </div>
    </>
  );
}

export default App;
