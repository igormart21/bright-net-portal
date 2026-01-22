import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Início", path: "/" },
    { label: "Planos", path: "/planos" },
    { label: "Serviços", path: "/servicos" },
    { label: "Sobre", path: "/sobre" },
    { label: "Contato", path: "/contato" },
  ];

  const whatsappLink = "https://wa.me/5518996904225?text=Olá! Gostaria de saber mais sobre os planos de internet.";

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Alternativa Internet" className="h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`transition-colors duration-300 font-medium ${isActive(item.path)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="whatsapp" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <i className="bi bi-whatsapp"></i>
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`transition-colors duration-300 font-medium py-2 ${isActive(item.path)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="whatsapp" className="mt-4" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <i className="bi bi-whatsapp"></i>
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
