import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import FloatingMailButton from "@/components/FloatingMailButton";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated glowing background */}
      <div className="animated-bg">
        <div className="animated-bg-blob" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
      <FloatingMailButton />
    </main>
  );
};

export default Index;
