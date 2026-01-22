import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <i className="bi bi-exclamation-triangle text-8xl text-primary animate-pulse"></i>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Página Não <span className="text-gradient-gold">Encontrada</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="hero" size="lg">
              <i className="bi bi-house-door mr-2"></i>
              Voltar para Home
            </Button>
          </Link>
          <Link to="/contato">
            <Button variant="outline" size="lg">
              <i className="bi bi-envelope mr-2"></i>
              Fale Conosco
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
