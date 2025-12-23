import { Brain, Users, Heart, Lightbulb, MessageCircle, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Psicoterapia Individual",
      description: "Acompanhamento personalizado para questões emocionais, comportamentais e de desenvolvimento pessoal."
    },
    {
      icon: Users,
      title: "Terapia de Casal",
      description: "Trabalho focado na comunicação, resolução de conflitos e fortalecimento dos vínculos afetivos."
    },
    {
      icon: Heart,
      title: "Orientação Familiar",
      description: "Suporte para famílias que buscam melhorar a dinâmica relacional e enfrentar desafios em conjunto."
    },
    {
      icon: Lightbulb,
      title: "Desenvolvimento Pessoal",
      description: "Processo focado em autoconhecimento, definição de metas e desenvolvimento de habilidades emocionais."
    },
    {
      icon: MessageCircle,
      title: "Atendimento Online",
      description: "Sessões por videoconferência com a mesma qualidade e sigilo do atendimento presencial."
    },
    {
      icon: Clock,
      title: "Acolhimento em Crises",
      description: "Suporte profissional para momentos de maior vulnerabilidade emocional, com disponibilidade flexível."
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-terracotta uppercase tracking-wider mb-4">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Como posso ajudar
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofereço acompanhamento psicológico em diferentes modalidades, 
            sempre com foco nas suas necessidades e objetivos pessoais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-terracotta-light flex items-center justify-center mb-5 group-hover:bg-terracotta/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            * O processo terapêutico é individual e os resultados variam de acordo com 
            o engajamento, contexto e características de cada pessoa. Não são garantidos 
            resultados específicos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
