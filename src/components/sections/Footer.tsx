import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-2">
              Dra. Thaissa Ramila
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Psicóloga Clínica
            </p>
          </div>

          {/* CRP Info */}
          <div className="text-center">
            <p className="text-sm text-primary-foreground/80">
              Registro Profissional
            </p>
            <p className="text-lg font-medium">
              CRP 01/123456
            </p>
          </div>

          {/* Links */}
          <div className="md:text-right space-y-2">
            <a 
              href="https://site.cfp.org.br/legislacao/codigo-de-etica/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Código de Ética do Psicólogo
            </a>
            <a 
              href="https://www.crpsp.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Conselho Regional de Psicologia DF
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Dra. Thaissa Ramila Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-terracotta" /> para você
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-primary-foreground/50 max-w-2xl mx-auto">
            Este site tem caráter informativo e não substitui a consulta psicológica. 
            O conteúdo aqui apresentado segue as diretrizes do Conselho Federal de Psicologia 
            e não oferece diagnósticos ou promessas de resultados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
