import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "luziania",
      subtitle: "colocar endereço"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(61) 99999-9999",
      subtitle: "WhatsApp disponível"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@drathaissaramila.com.br",
      subtitle: "Resposta em até 24h"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta",
      subtitle: "8h às 20h"
    }
  ];

  return (
    <section id="contato" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-terracotta uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O primeiro passo pode ser o mais difícil, mas você não precisa dar ele sozinho. 
            Entre em contato e agende uma conversa inicial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={item.title}
                  className="p-6 rounded-xl bg-background shadow-soft animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-foreground font-medium">{item.content}</p>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background shadow-soft flex items-center justify-center hover:shadow-hover transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <p className="text-sm text-muted-foreground">
                Siga no Instagram para conteúdos sobre saúde mental
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:p-10 rounded-2xl bg-background shadow-soft animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              Envie uma mensagem
            </h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem (opcional)
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Conte brevemente o que você busca..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Suas informações são confidenciais e protegidas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
