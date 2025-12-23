import { Heart, GraduationCap, Users } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Graduação em Psicologia pela faculdade. Especialização em Terapia Cognitivo-Comportamental."
    },
    {
      icon: Heart,
      title: "Abordagem",
      description: "Atendimento humanizado, baseado em evidências científicas e adaptado às necessidades individuais."
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Mais de 8 anos de experiência clínica com adultos, casais e famílias."
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-terracotta uppercase tracking-wider mb-4">
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Um espaço de escuta e acolhimento
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acredito que cada pessoa carrega em si a capacidade de transformação. 
            Meu papel é oferecer um ambiente seguro e livre de julgamentos, onde você 
            possa se expressar livremente e construir novos caminhos para o seu bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {credentials.map((item, index) => (
            <div 
              key={item.title}
              className="group p-8 rounded-2xl bg-background shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 lg:p-12 rounded-2xl bg-sage-light/50 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Compromisso Ético
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Minha prática é pautada pelo Código de Ética Profissional do Psicólogo, 
              garantindo sigilo absoluto, respeito à autonomia e dignidade de cada pessoa 
              que busca atendimento. O processo terapêutico é construído de forma colaborativa, 
              respeitando o tempo e as particularidades de cada indivíduo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
