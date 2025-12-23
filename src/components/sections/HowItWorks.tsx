const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Primeiro Contato",
      description: "Entre em contato para agendarmos uma conversa inicial. Nela, você poderá tirar dúvidas sobre o processo terapêutico."
    },
    {
      number: "02",
      title: "Sessão de Acolhimento",
      description: "Na primeira sessão, conheceremos melhor sua história, demandas e expectativas. É um momento de escuta e acolhimento."
    },
    {
      number: "03",
      title: "Plano Terapêutico",
      description: "Juntos, definiremos a frequência das sessões e os objetivos do acompanhamento, de forma colaborativa."
    },
    {
      number: "04",
      title: "Processo Contínuo",
      description: "O acompanhamento segue no ritmo que for mais adequado para você, com reavaliações periódicas do processo."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-sage-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-terracotta uppercase tracking-wider mb-4">
            O Processo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Como funciona a terapia
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Entender o processo terapêutico pode ajudar a diminuir a ansiedade 
            do primeiro contato. Conheça as etapas do acompanhamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-soft">
                  <span className="text-2xl font-serif font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 lg:p-12 rounded-2xl bg-background shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Perguntas Frequentes
              </h3>
              <p className="text-muted-foreground mb-6">
                É normal ter dúvidas antes de iniciar um processo terapêutico. 
                Estou à disposição para esclarecer qualquer questão.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card">
                <h4 className="font-medium text-foreground mb-2">Quanto tempo dura uma sessão?</h4>
                <p className="text-sm text-muted-foreground">As sessões têm duração de 50 minutos.</p>
              </div>
              <div className="p-4 rounded-lg bg-card">
                <h4 className="font-medium text-foreground mb-2">As sessões online são seguras?</h4>
                <p className="text-sm text-muted-foreground">Sim, utilizo plataformas com criptografia que garantem a confidencialidade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
