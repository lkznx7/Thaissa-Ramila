import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-psychologist.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sage-light/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta-light/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <span className="inline-block text-sm font-medium text-terracotta uppercase tracking-wider">
                Psicóloga Clínica
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
                Dra. Ana Carolina Silva
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
                Cuidando da sua saúde mental com acolhimento e ética
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Ofereço um espaço seguro e acolhedor para você explorar suas emoções, 
              desenvolver autoconhecimento e trabalhar questões que impactam sua qualidade de vida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contato">Agendar Consulta</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#sobre">Saiba Mais</a>
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                CRP 06/123456 • Atendimento presencial e online
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <img 
                src={heroImage}
                alt="Dra. Ana Carolina Silva - Psicóloga"
                className="w-full h-auto rounded-2xl shadow-hover object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-0" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-terracotta/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
