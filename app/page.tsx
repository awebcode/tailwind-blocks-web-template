import Image from "next/image";
import Navbar from "./components/Navbar";
import Pricing from "./pricing/page";
import Blog from "./blog/page";
import Static from "./components/Static";
import Steps from "./components/Steps";
import Testimonial from "./components/Testimonial";
import Pricing2 from "./components/Pricing2";
import Steps2 from "./components/Steps2";
import Hero from "./components/Hero";
import ProductDetails from "./components/ProductDetails";
import Team from "./components/Team";
import Contact_us from "./components/Contact_us";
import Footer from "./components/Footer";
import Plan from "./components/Plan";
import Testimonial2 from "./components/Testimonial2";
import Stats from "./components/Stats";
import Pricing3 from "./components/Pricing3";
import Login from "./components/Login";
import Stats2 from "./components/Stats2";

const Home: React.FC = (): any => {
  return (
    <>
      <Navbar />{" "}
      <main className="flex min-h-screen flex-col items-center justify-between p-5">
        <Hero />
        <Static />
        <Team />
        <Stats />
        <Stats2/>
        <Blog />
        <ProductDetails />
        <Steps />
        <Steps2 />
        <Testimonial />
        <Testimonial2 />
        <Pricing2 />
        <Pricing />

        <Pricing3 />
        <Plan />
        <Login/>
        <Contact_us />
        <Footer />
      </main>
    </>
  );
};
export default Home;
