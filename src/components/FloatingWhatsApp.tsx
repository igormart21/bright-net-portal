const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/5518996904225?text=Olá! Preciso de ajuda.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow group"
      aria-label="Fale Conosco"
    >
      <i className="bi bi-whatsapp text-2xl text-white"></i>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
