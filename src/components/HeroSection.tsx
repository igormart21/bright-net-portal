import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de contratar um plano de internet.";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-start md:justify-center pt-52 md:pt-32 pb-12 md:pb-0 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 mt-8 md:mt-0">
        <div className="max-w-4xl mx-auto text-center md:animate-slide-up">
          {/* Mobile Spacer - pushes content below navbar */}
          <div className="h-40 md:h-0" aria-hidden="true"></div>

          {/* Badge */}
          <div className="hidden md:inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm border border-primary/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <i className="bi bi-lightning-charge-fill text-primary"></i>
            <span className="text-xs sm:text-sm font-medium text-primary">A Internet Mais Rápida da Região</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            A Internet que você <br />
            <span className="text-gradient-gold">Merece</span> está aqui!
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Conexão ultra-rápida e estável para sua casa ou empresa. Streaming em 4K, gaming sem lag e trabalho remoto sem preocupações.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
              <a href="#planos">
                Conhecer Planos
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <i className="bi bi-whatsapp"></i>
                Solicitar Atendimento
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto px-2">
            {[
              { icon: "bi-wifi", label: "Conexão Estável" },
              { icon: "bi-lightning-charge", label: "Alta Velocidade" },
              { icon: "bi-shield-check", label: "Suporte 24h" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="flex items-center justify-center gap-2 sm:gap-3 glass rounded-lg p-3 sm:p-4"
              >
                <i className={`bi ${feature.icon} text-primary text-xl`}></i>
                <span className="font-medium text-sm sm:text-base">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hide on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
