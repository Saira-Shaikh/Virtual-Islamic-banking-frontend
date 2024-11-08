import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ProductsWithAnalytics from "./components/Products";
import ServicesWithAnalytics from "./components/Services";
import Investments from "./components/Investments";
import Blogs from "./components/Blogs.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Header />
        <AboutUs />
        <ProductsWithAnalytics />
        <ServicesWithAnalytics />
        <Investments />
        <Blogs />
        <Footer />
      </div>
    </>
  );
}

export default App;
