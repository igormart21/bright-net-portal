import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de envio do formulário
        const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0AAssunto: ${formData.subject}%0A%0AMensagem: ${formData.message}%0A%0AContato: ${formData.email} / ${formData.phone}`;
        window.open(`https://wa.me/5518996904225?text=${whatsappMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen pt-20">
            <PageHero
                title="Fale Conosco"
                subtitle="Estamos prontos para atender você. Entre em contato!"
                breadcrumbs={[{ label: "Contato" }]}
                icon="bi-envelope"
            />

            {/* Contact Methods */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                        {[
                            {
                                icon: "bi-whatsapp",
                                title: "WhatsApp",
                                info: "(18) 99690-4225",
                                link: "https://wa.me/5518996904225"
                            },
                            {
                                icon: "bi-telephone",
                                title: "Telefone",
                                info: "(18) 99674-6085",
                                link: "tel:+5518996746085"
                            },
                            {
                                icon: "bi-envelope",
                                title: "E-mail",
                                info: "contato@internetalternativa.com.br",
                                link: "mailto:contato@internetalternativa.com.br"
                            },
                            {
                                icon: "bi-geo-alt",
                                title: "Endereço",
                                info: "Escritório Principal",
                                link: "#"
                            }
                        ].map((contact, idx) => (
                            <a
                                key={idx}
                                href={contact.link}
                                target={contact.link.startsWith('http') ? '_blank' : undefined}
                                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="glass-card rounded-xl p-6 text-center hover-lift block"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                                    <i className={`bi ${contact.icon} text-2xl text-primary`}></i>
                                </div>
                                <h3 className="font-bold mb-2">{contact.title}</h3>
                                <p className="text-muted-foreground text-sm">{contact.info}</p>
                            </a>
                        ))}
                    </div>

                    {/* Form and Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Envie uma <span className="text-gradient-gold">Mensagem</span>
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                                    <Input
                                        type="text"
                                        placeholder="Seu nome"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">E-mail</label>
                                        <Input
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Telefone</label>
                                        <Input
                                            type="tel"
                                            placeholder="(00) 00000-0000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Assunto</label>
                                    <Input
                                        type="text"
                                        placeholder="Sobre o que você quer falar?"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                        className="w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                                    <Textarea
                                        placeholder="Digite sua mensagem aqui..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={5}
                                        className="w-full resize-none"
                                    />
                                </div>

                                <Button type="submit" variant="hero" size="lg" className="w-full">
                                    <i className="bi bi-send mr-2"></i>
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Informações <span className="text-gradient-gold">Adicionais</span>
                            </h2>

                            <div className="space-y-6">
                                {/* Business Hours */}
                                <div className="glass-card rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <i className="bi bi-clock text-xl text-primary"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-3">Horário de Atendimento</h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Segunda a Sexta:</span>
                                                    <span className="font-medium">8h às 18h</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Sábado:</span>
                                                    <span className="font-medium">8h às 12h</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-muted-foreground">Domingo:</span>
                                                    <span className="font-medium">Fechado</span>
                                                </div>
                                                <div className="pt-2 border-t border-border/50">
                                                    <div className="flex items-center gap-2 text-primary">
                                                        <i className="bi bi-headset"></i>
                                                        <span className="font-semibold">Suporte Técnico: 24/7</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="glass-card rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <i className="bi bi-share text-xl text-primary"></i>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-3">Redes Sociais</h3>
                                            <div className="flex gap-3">
                                                {[
                                                    { icon: "bi-instagram", link: "https://www.instagram.com/alternativainternet?igsh=N2J4NDQzdm5jZTF3" },
                                                    { icon: "bi-facebook", link: "https://www.facebook.com/share/1BtmEoKNg7/" }
                                                ].map((social, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={social.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                                                    >
                                                        <i className={`bi ${social.icon} text-primary`}></i>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div className="glass-card rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <i className="bi bi-question-circle text-xl text-primary"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-3">Perguntas Frequentes</h3>
                                            <p className="text-muted-foreground text-sm mb-3">
                                                Muitas dúvidas podem ser respondidas na nossa seção de FAQ
                                            </p>
                                            <Button variant="outline" size="sm">
                                                <i className="bi bi-book mr-2"></i>
                                                Ver FAQ
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-16 md:py-24 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Nossa <span className="text-gradient-gold">Localização</span>
                        </h2>
                        <p className="text-muted-foreground">
                            Visite nosso escritório ou entre em contato pelos canais disponíveis
                        </p>
                    </div>

                    <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
                        <i className="bi bi-geo-alt text-6xl text-primary mb-6"></i>
                        <h3 className="text-2xl font-bold mb-4">Escritório Central</h3>
                        <p className="text-lg text-muted-foreground mb-6">
                            Rua Principal, 123 - Centro<br />
                            CEP 00000-000<br />
                            Cidade - Estado
                        </p>
                        <Button variant="outline" size="lg" asChild>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-map mr-2"></i>
                                Abrir no Mapa
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
