import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
    const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços.";

    const services = [
        {
            icon: "bi-wifi",
            title: "Internet Banda Larga",
            description: "Conexão de fibra óptica de alta velocidade para sua residência ou empresa",
            benefits: [
                "Tecnologia de ponta em fibra óptica",
                "Velocidades de 100 Mbps a 1 Gbps",
                "Baixa latência para gaming e streaming",
                "Conexão simétrica em planos avançados"
            ]
        },
        {
            icon: "bi-tv",
            title: "Serviços de Streaming",
            description: "Acesso aos melhores conteúdos de streaming com qualidade HD e 4K",
            benefits: [
                "Parcerias com principais plataformas",
                "Qualidade 4K sem buffering",
                "Múltiplos dispositivos simultâneos",
                "Descontos exclusivos em planos"
            ]
        },
        {
            icon: "bi-headset",
            title: "Atendimento Local",
            description: "Equipe regional pronta para atender você com agilidade",
            benefits: [
                "Conhecimento da sua região",
                "Atendimento personalizado",
                "Resolução rápida de problemas",
                "Visitas técnicas ágeis"
            ]
        },
        {
            icon: "bi-tools",
            title: "Suporte Técnico",
            description: "Profissionais especializados disponíveis para resolver qualquer problema",
            benefits: [
                "Disponibilidade 24/7",
                "Equipe técnica certificada",
                "Atendimento remoto e presencial",
                "Monitoramento proativo"
            ]
        },
        {
            icon: "bi-building",
            title: "Internet Corporativa",
            description: "Soluções empresariais com SLA garantido e suporte dedicado",
            benefits: [
                "Planos personalizados",
                "IP fixo incluso",
                "Gerente de conta dedicado",
                "Backup de conexão opcional"
            ]
        },
        {
            icon: "bi-router",
            title: "Infraestrutura Wi-Fi",
            description: "Instalação e configuração profissional de redes Wi-Fi",
            benefits: [
                "Equipamentos de última geração",
                "Cobertura otimizada",
                "Segurança WPA3",
                "Gerenciamento remoto"
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            <PageHero
                title="Nossos Serviços"
                subtitle="Soluções completas em conectividade para você e sua empresa"
                breadcrumbs={[{ label: "Serviços" }]}
                icon="bi-gear"
            />

            {/* Services Grid */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-2xl p-6 md:p-8 hover-lift animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <i className={`bi ${service.icon} text-3xl text-primary`}></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <i className="bi bi-check-circle-fill text-primary flex-shrink-0 mt-1"></i>
                                            <span className="text-foreground/90 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* For Residential */}
            <section className="py-16 md:py-24 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                Para Residências
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                                Internet para <span className="text-gradient-gold">Sua Casa</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-6">
                                Conexão perfeita para toda a família curtir streaming, jogos online, trabalho remoto e muito mais.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    { icon: "bi-film", text: "Streaming em 4K sem travamentos" },
                                    { icon: "bi-controller", text: "Gaming com baixa latência" },
                                    { icon: "bi-laptop", text: "Home office sem interrupções" },
                                    { icon: "bi-phone", text: "Wi-Fi para todos os dispositivos" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <i className={`bi ${item.icon} text-primary`}></i>
                                        </div>
                                        <span className="font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/planos">
                                <Button variant="hero" size="lg">
                                    Ver Planos Residenciais
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </Button>
                            </Link>
                        </div>
                        <div className="glass-card rounded-2xl p-8 lg:p-12">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: "bi-speedometer2", label: "Velocidade", value: "Até 500 Mbps" },
                                    { icon: "bi-wifi", label: "Wi-Fi", value: "Wi-Fi 6" },
                                    { icon: "bi-infinity", label: "Franquia", value: "Ilimitada" },
                                    { icon: "bi-shield-check", label: "Garantia", value: "99.9% Uptime" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-3">
                                            <i className={`bi ${stat.icon} text-xl text-primary`}></i>
                                        </div>
                                        <div className="font-bold text-gradient-gold text-lg mb-1">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Business */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 glass-card rounded-2xl p-8 lg:p-12">
                            <h3 className="text-2xl font-bold mb-6 text-center">Benefícios Corporativos</h3>
                            <ul className="space-y-4">
                                {[
                                    "SLA com garantia de disponibilidade",
                                    "Suporte técnico dedicado 24/7",
                                    "IP fixo incluso em planos empresariais",
                                    "Gerente de conta personalizado",
                                    "Múltiplos pontos de acesso Wi-Fi",
                                    "Backup de conexão disponível",
                                    "Prioridade em atendimento",
                                    "Soluções personalizadas"
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <i className="bi bi-patch-check-fill text-primary flex-shrink-0 mt-1"></i>
                                        <span className="text-foreground/90">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                Para Empresas
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                                Soluções <span className="text-gradient-gold">Corporativas</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-6">
                                Internet de alta performance com SLA garantido, suporte dedicado e infraestrutura robusta para o seu negócio.
                            </p>
                            <div className="glass p-6 rounded-xl mb-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <i className="bi bi-shield-fill-check text-3xl text-primary"></i>
                                    <div>
                                        <div className="font-bold text-lg">SLA Garantido</div>
                                        <div className="text-muted-foreground">99.9% de disponibilidade</div>
                                    </div>
                                </div>
                                <p className="text-foreground/90 text-sm">
                                    Contrato com garantia de uptime e compensação em caso de indisponibilidade.
                                </p>
                            </div>
                            <Button variant="hero" size="lg" asChild>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp mr-2"></i>
                                    Solicitar Proposta Empresarial
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Precisa de uma <span className="text-gradient-gold">Solução Personalizada</span>?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Nossa equipe está pronta para criar o plano ideal para suas necessidades.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="hero" size="lg" asChild>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp mr-2"></i>
                                    Falar com Especialista
                                </a>
                            </Button>
                            <Link to="/contato">
                                <Button variant="outline" size="lg">
                                    <i className="bi bi-envelope mr-2"></i>
                                    Enviar Mensagem
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
