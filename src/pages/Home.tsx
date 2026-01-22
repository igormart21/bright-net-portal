import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/StatsCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
    const whatsappLink = "https://wa.me/5518996904225?text=Olá! Gostaria de saber mais sobre os planos de internet.";

    return (
        <div className="min-h-screen">
            {/* Hero Section - Novo Design Premium com Imagem */}
            <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />

                {/* Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-hero"></div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Badge Premium */}
                        <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 animate-scale-in">
                            <i className="bi bi-award-fill text-primary text-xl"></i>
                            <span className="font-semibold text-primary">A Internet Mais Rápida da Região</span>
                        </div>

                        {/* Headline Poderoso */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
                            A Internet que você{" "}
                            <span className="text-gradient-gold">Merece</span>
                            <br />
                            está aqui!
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Conexão ultra-rápida e estável para sua casa ou empresa. Streaming em 4K, gaming sem lag e trabalho remoto sem preocupações.
                        </p>

                        {/* CTAs Premium */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Link to="/planos">
                                <Button variant="hero" size="lg" className="text-lg px-8 py-6 hover-glow">
                                    <i className="bi bi-rocket-takeoff-fill mr-2"></i>
                                    Ver Planos
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp mr-2"></i>
                                    Falar com Consultor
                                </a>
                            </Button>
                        </div>

                        {/* Features Grid Premium */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            {[
                                { icon: "bi-lightning-charge-fill", title: "Ultra Rápido", desc: "Até 1 Gbps" },
                                { icon: "bi-shield-fill-check", title: "100% Estável", desc: "99.9% Uptime" },
                                { icon: "bi-headset", title: "Suporte VIP", desc: "24/7 Disponível" }
                            ].map((feature, idx) => (
                                <div key={idx} className="glass-card rounded-2xl p-6 hover-lift">
                                    <i className={`bi ${feature.icon} text-4xl text-primary mb-3 block`}></i>
                                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <span className="text-sm">Role para baixo</span>
                        <i className="bi bi-chevron-down text-2xl animate-pulse"></i>
                    </div>
                </div>
            </section>

            {/* Stats Section Premium */}
            <section className="py-20 md:py-28 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Números que <span className="text-gradient-gold">Impressionam</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Milhares de clientes satisfeitos confiam na nossa tecnologia
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <StatsCard icon="bi-people-fill" value="15k" suffix="+" label="Clientes Felizes" />
                        <StatsCard icon="bi-lightning-charge-fill" value="99.9" suffix="%" label="Disponibilidade" />
                        <StatsCard icon="bi-speedometer2" value="1" suffix=" Gbps" label="Velocidade Máxima" />
                        <StatsCard icon="bi-geo-alt-fill" value="50" suffix="+" label="Bairros Atendidos" />
                    </div>
                </div>
            </section>

            {/* Diferenciais Premium com Imagens */}
            <section className="py-20 md:py-28 bg-navy-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Por Que Somos Diferentes</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                            Muito Mais que <span className="text-gradient-gold">Internet</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Oferecemos uma experiência completa de conectividade
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: "bi-wifi",
                                title: "Fibra Óptica 100%",
                                description: "Tecnologia GPON de última geração para velocidade e estabilidade máximas.",
                                color: "primary"
                            },
                            {
                                icon: "bi-shield-lock-fill",
                                title: "Segurança Total",
                                description: "Proteção contra ataques DDoS e firewall avançado inclusos em todos os planos.",
                                color: "primary"
                            },
                            {
                                icon: "bi-tools",
                                title: "Instalação Grátis",
                                description: "Equipe técnica especializada instala tudo sem custo adicional.",
                                color: "primary"
                            },
                            {
                                icon: "bi-graph-up-arrow",
                                title: "Sem Limite de Dados",
                                description: "Use à vontade! Internet 100% ilimitada para você navegar sem preocupações.",
                                color: "primary"
                            },
                            {
                                icon: "bi-headset",
                                title: "Suporte Humanizado",
                                description: "Atendimento local que entende você. Nada de espera ou robôs.",
                                color: "primary"
                            },
                            {
                                icon: "bi-piggy-bank-fill",
                                title: "Melhor Custo-Benefício",
                                description: "Planos com preços justos e sem taxas escondidas. Transparência total.",
                                color: "primary"
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="glass-card rounded-2xl p-8 hover-lift group animate-fade-in-up"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <i className={`bi ${item.icon} text-3xl text-primary`}></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Planos em Destaque */}
            <section className="py-20 md:py-28 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Planos Populares</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                            Escolha seu <span className="text-gradient-gold">Plano Ideal</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Do básico ao ultra, temos o plano perfeito para você
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                        {[
                            {
                                name: "Start",
                                speed: "420 Mega",
                                price: "R$ 89,90/mês",
                                icon: "bi-lightning-fill",
                                features: [
                                    "Download até 420 Mbps",
                                    "Upload até 210 Mbps",
                                    "Wi-Fi 6 incluso",
                                    "Instalação grátis",
                                    "Suporte técnico 24/7"
                                ]
                            },
                            {
                                name: "Plus",
                                speed: "520 Mega",
                                price: "R$ 99,90/mês",
                                icon: "bi-star-fill",
                                popular: true,
                                features: [
                                    "Download até 520 Mbps",
                                    "Upload até 260 Mbps",
                                    "Wi-Fi 6 incluso",
                                    "Instalação grátis",
                                    "Suporte prioritário 24/7",
                                    "Fibra óptica 100%"
                                ]
                            },
                            {
                                name: "Premium",
                                speed: "620 Mega",
                                price: "R$ 119,90/mês",
                                icon: "bi-rocket-takeoff-fill",
                                features: [
                                    "Download até 620 Mbps",
                                    "Upload até 310 Mbps",
                                    "Wi-Fi 6 incluso",
                                    "Instalação grátis",
                                    "Suporte VIP 24/7",
                                    "Fibra óptica 100%",
                                    "IP Fixo disponível"
                                ]
                            }
                        ].map((plan, idx) => (
                            <div
                                key={idx}
                                className={`relative bg-gradient-card border rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 ${plan.popular
                                    ? "border-primary shadow-gold lg:scale-105"
                                    : "border-border hover:border-primary/50 shadow-card"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                        <span className="bg-gradient-gold text-primary-foreground text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wide shadow-lg">
                                            🔥 Mais Vendido
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                                        <i className={`bi ${plan.icon} text-3xl text-primary`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                                    <div className="text-5xl font-bold text-gradient-gold mb-2">{plan.speed}</div>
                                    <p className="text-muted-foreground">{plan.price}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <i className="bi bi-check-circle-fill text-primary flex-shrink-0 mt-1"></i>
                                            <span className="text-foreground/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.popular ? "hero" : "outline"}
                                    className="w-full text-lg py-6"
                                    asChild
                                >
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-whatsapp mr-2"></i>
                                        Assinar Agora
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/planos">
                            <Button variant="outline" size="lg" className="text-lg px-8">
                                Ver Todos os Planos
                                <i className="bi bi-arrow-right ml-2"></i>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Casos de Uso */}
            <section className="py-20 md:py-28 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Perfeita para <span className="text-gradient-gold">Todas</span> as Situações
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: "bi-film",
                                title: "Streaming",
                                items: ["Netflix 4K", "YouTube Premium", "Disney+", "Amazon Prime"]
                            },
                            {
                                icon: "bi-controller",
                                title: "Gaming",
                                items: ["Baixa latência", "Ping estável", "Upload rápido", "Sem lag"]
                            },
                            {
                                icon: "bi-laptop",
                                title: "Home Office",
                                items: ["Videochamadas HD", "Upload rápido", "Conexão estável", "VPN suportada"]
                            },
                            {
                                icon: "bi-building",
                                title: "Empresas",
                                items: ["IP fixo", "Suporte dedicado", "SLA garantido", "Múltiplos acessos"]
                            }
                        ].map((useCase, idx) => (
                            <div key={idx} className="glass-card rounded-2xl p-6 hover-lift">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <i className={`bi ${useCase.icon} text-2xl text-primary`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                                <ul className="space-y-2">
                                    {useCase.items.map((item, iIdx) => (
                                        <li key={iIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <i className="bi bi-check2 text-primary"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="py-20 md:py-28 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                            O Que Dizem Nossos <span className="text-gradient-gold">Clientes</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Avaliação média: ⭐⭐⭐⭐⭐ 4.9/5.0
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <TestimonialCard
                            name="Maria Silva"
                            location="Centro"
                            rating={5}
                            text="Incrível! A velocidade é exatamente como prometido. Assisto Netflix em 4K sem travamentos e trabalho de casa sem problemas."
                        />
                        <TestimonialCard
                            name="João Santos"
                            location="Jardim Primavera"
                            rating={5}
                            text="Melhor internet que já tive! O suporte é rápido e eficiente. Recomendo de olhos fechados para quem quer qualidade."
                        />
                        <TestimonialCard
                            name="Ana Costa"
                            location="Vila Nova"
                            rating={5}
                            text="Mudei para Alternativa há 6 meses e não me arrependo. Atendimento local faz toda a diferença. Nota 10!"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Rápido */}
            <section className="py-20 md:py-28 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                Perguntas <span className="text-gradient-gold">Frequentes</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    q: "A instalação é mesmo grátis?",
                                    a: "Sim! 100% gratuita em todos os planos."
                                },
                                {
                                    q: "Quanto tempo leva a instalação?",
                                    a: "Entre 24 a 48 horas após aprovação."
                                },
                                {
                                    q: "Tem fidelidade?",
                                    a: "Consulte condições via WhatsApp."
                                },
                                {
                                    q: "Posso mudar de plano depois?",
                                    a: "Sim! Upgrade ou downgrade quando quiser."
                                }
                            ].map((faq, idx) => (
                                <div key={idx} className="glass-card rounded-xl p-6">
                                    <div className="flex gap-4">
                                        <i className="bi bi-question-circle-fill text-2xl text-primary flex-shrink-0"></i>
                                        <div>
                                            <h3 className="font-bold mb-2">{faq.q}</h3>
                                            <p className="text-muted-foreground text-sm">{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link to="/contato">
                                <Button variant="outline" size="lg">
                                    <i className="bi bi-chat-dots mr-2"></i>
                                    Ver Todas as Perguntas
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final Premium */}
            <section className="py-24 md:py-32 bg-gradient-to-br from-primary/20 via-background to-primary/10 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <i className="bi bi-rocket-takeoff text-6xl text-primary mb-6 block animate-float"></i>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Pronto para ter a <span className="text-gradient-gold">Melhor Internet</span>?
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                            Milhares de clientes já aprovaram. Agora é sua vez de experimentar a diferença!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button variant="hero" size="lg" className="text-xl px-10 py-7 hover-glow" asChild>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp mr-2 text-2xl"></i>
                                    Quero Assinar Agora
                                </a>
                            </Button>
                            <Link to="/planos">
                                <Button variant="outline" size="lg" className="text-xl px-10 py-7">
                                    <i className="bi bi-eye mr-2"></i>
                                    Ver Planos
                                </Button>
                            </Link>
                        </div>

                        <p className="text-muted-foreground text-sm">
                            <i className="bi bi-shield-check mr-2"></i>
                            Sem taxas escondidas • Instalação grátis • Suporte 24/7
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
