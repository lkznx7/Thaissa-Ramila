import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dra. Thaissa Ramila | Psicóloga Clínica em Luziânia - CRP 01/123456</title>
        <meta 
          name="description" 
          content="Psicóloga clínica em Luziânia. Atendimento online. Psicoterapia individual . Agende sua consulta." 
        />
        <meta name="keywords" content="psicóloga São Paulo, psicoterapia, terapia online, saúde mental, psicóloga clínica" />
        <link rel="canonical" href="https://www.drathaissaramila.com.br" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <HowItWorks />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
