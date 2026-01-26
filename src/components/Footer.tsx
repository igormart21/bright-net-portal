import { Link } from "react-router-dom";
import logo from "@/assets/logo-new.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", path: "/" },
    { label: "Planos", path: "/planos" },
    { label: "Serviços", path: "/servicos" },
    { label: "Sobre", path: "/sobre" },
    { label: "Contato", path: "/contato" },
  ];

  const services = [
    "Internet Banda Larga",
    "Internet Corporativa",
    "Streaming",
    "Suporte Técnico"
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Alternativa Internet" className="h-28 w-auto mb-4" />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sua melhor alternativa em internet banda larga. Conexão de qualidade para sua casa ou empresa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/alternativainternet?igsh=N2J4NDQzdm5jZTF3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-primary"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1BtmEoKNg7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook text-primary"></i>
              </a>
              <a
                href="https://wa.me/5518996904225"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted/30 hover:bg-primary/20 border border-border/50 hover:border-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp text-primary"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <i className="bi bi-chevron-right text-xs"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground flex items-start gap-2">
                  <i className="bi bi-check-circle-fill text-primary flex-shrink-0 mt-1 text-xs"></i>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <i className="bi bi-telephone-fill text-primary flex-shrink-0 mt-1"></i>
                <div>
                  <div>(18) 99690-4225</div>
                  <div className="text-xs">(18) 99674-6085</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <i className="bi bi-envelope-fill text-primary flex-shrink-0 mt-1"></i>
                <a href="mailto:contato@internetalternativa.com.br" className="hover:text-primary transition-colors">
                  contato@internetalternativa.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <i className="bi bi-geo-alt-fill text-primary flex-shrink-0 mt-1"></i>
                <div>
                  <div>Rua Doutor Francisco de Jesus Valois, 303</div>
                  <div className="text-xs">Moradas dos Nobres - Araçatuba/SP</div>
                  <div className="text-xs">CEP 16022-140</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <i className="bi bi-clock-fill text-primary flex-shrink-0 mt-1"></i>
                <div>
                  <div className="text-xs">Seg-Sex: 8h às 18h</div>
                  <div className="text-xs">Sáb: 8h às 12h</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} ALTERNATIVA INTERNET & SERVIÇOS. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm text-center md:text-right">
              Desenvolvido com <i className="bi bi-heart-fill text-primary mx-1"></i> por{" "}
              <a
                href="https://camaly.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
              >
                Camaly
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
