import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/StatsCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroBg from "@/assets/hero-bg.jpg";
import strategyImg from "@/assets/strategy-section.jpg";
import gamerImg from "@/assets/gamer-section.jpg";

const Home = () => {
    const whatsappLink = "https://wa.me/5518996904225?text=Olá! Gostaria de saber mais sobre os planos de internet.";

    return (
        <div className="min-h-screen">
            {/* Hero Section - Novo Design Premium com Imagem */}
            <section className="relative min-h-screen flex flex-col items-center justify-start md:justify-center pt-44 md:pt-0 pb-12 md:pb-0 overflow-hidden">
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

                <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-0">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Badge Premium */}
                        <div className="hidden md:inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 animate-scale-in">
                            <i className="bi bi-award-fill text-primary text-xl"></i>
                            <span className="font-semibold text-primary">A Internet Mais Rápida da Região</span>
                        </div>

                        {/* Headline Poderoso */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in-up">
                            A Internet que você{" "}
                            <span className="text-gradient-gold block sm:inline">Merece</span>
                            <span className="block">está aqui!</span>
                        </h1>


                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
                            Conexão ultra-rápida e estável para sua casa ou empresa. Streaming em 4K, gaming sem lag e trabalho remoto sem preocupações.
                        </p>

                        {/* CTAs Premium */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
                            <Link to="/planos" className="w-full sm:w-auto">
                                <Button variant="hero" size="lg" className="text-base md:text-lg px-8 py-6 hover-glow w-full sm:w-auto">
                                    <i className="bi bi-rocket-takeoff-fill mr-2"></i>
                                    Ver Planos
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="text-base md:text-lg px-8 py-6 w-full sm:w-auto" asChild>
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
                                description: "Tecnologia XGPON de última geração para velocidade e estabilidade máximas.",
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

            {/* Strategic Lifestyle Section */}
            <section className="py-20 md:py-28 bg-background overflow-hidden relative">
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative animate-fade-in-left">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
                                <img
                                    src={strategyImg}
                                    alt="Estilo de vida digital com internet rápida"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-8 bg-glass-dark backdrop-blur-md p-4 rounded-2xl border border-white/10 animate-float">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                            <i className="bi bi-wifi text-green-400 text-2xl"></i>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Conexão Estável</div>
                                            <div className="text-white/60 text-sm">Ideal para Home Office</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 animate-fade-in-right">
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Liberdade Digital</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                                Modernize sua <span className="text-gradient-gold">Vida Digital</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Transforme sua casa em um verdadeiro escritório do futuro. Com nossa conexão ultra-estável, você tem a liberdade de trabalhar, se divertir e gerenciar suas finanças online com total tranquilidade.
                            </p>

                            <ul className="space-y-6 mb-10">
                                {[
                                    { title: "Home Office Sem Interrupções", desc: "Videoconferências em HD sem travar, garantindo sua produtividade.", icon: "bi-laptop" },
                                    { title: "Entretenimento em 4K", desc: "Streaming de filmes e jogos online com ping baixo e alta definição.", icon: "bi-controller" },
                                    { title: "Facilidade no Dia a Dia", desc: "Pague contas, faça transferências e acesse serviços bancários num piscar de olhos.", icon: "bi-phone" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <i className={`bi ${item.icon} text-xl text-primary`}></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <Button variant="hero" size="lg" className="hover-glow w-full sm:w-auto" asChild>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-arrow-right-circle mr-2"></i>
                                    Quero Modernizar Agora
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gaming Strategic Section */}
            <section className="py-20 md:py-28 bg-navy-dark overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative animate-fade-in-right">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
                                <img
                                    src={gamerImg}
                                    alt="Setup gamer com cadeira e luzes neon"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 right-8 bg-glass-dark backdrop-blur-md p-4 rounded-2xl border border-white/10 animate-pulse">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                            <i className="bi bi-joystick text-primary text-2xl"></i>
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Modo Gamer</div>
                                            <div className="text-white/60 text-sm">Ping Ultra Baixo</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 animate-fade-in-left">
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Performance Extrema</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight text-white">
                                Potência Máxima para <span className="text-gradient-gold">Gamers</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Domine as partidas com nossa conexão direta com as melhores plataformas e servidores do mundo. Experimente a vantagem competitiva de jogar com estabilidade total e latência mínima.
                            </p>

                            <ul className="space-y-6 mb-10">
                                {[
                                    { title: "Ping Baixo e Estável", desc: "Rotas otimizadas para os principais servidores de jogos.", icon: "bi-speedometer" },
                                    { title: "Wi-Fi 6 de Alta Performance", desc: "Roteadores de última geração para jogar via wireless sem lag.", icon: "bi-wifi" },
                                    { title: "Até 1 Giga de Velocidade", desc: "Downloads de atualizações pesadas em questão de segundos.", icon: "bi-lightning-charge" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <i className={`bi ${item.icon} text-xl text-primary`}></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-white">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <Button variant="hero" size="lg" className="hover-glow w-full sm:w-auto" asChild>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-controller mr-2"></i>
                                    Quero Jogar sem Lag
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Planos em Destaque */}
            <section className="py-20 md:py-28 bg-background relative overflow-hidden">
                {/* Decorative Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Planos Populares</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                            Escolha seu <span className="text-gradient-gold">Plano Ideal</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Do básico ao ultra, temos o plano perfeito para você
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto mb-12">
                        {[
                            {
                                name: "Start",
                                speed: "420 Mega",
                                price: "R$ 89,90",
                                period: "/mês",
                                icon: "bi-lightning-fill",
                                features: [
                                    "Download até 420 Mbps",
                                    "Upload até 210 Mbps",
                                    "Wi-Fi 6 incluso",
                                    "Instalação grátis",
                                    "Suporte técnico 24/7",
                                    "Fibra óptica 100%"
                                ]
                            },
                            {
                                name: "Plus",
                                speed: "520 Mega",
                                price: "R$ 99,90",
                                period: "/mês",
                                icon: "bi-star-fill",
                                popular: true,
                                features: [
                                    "Download até 520 Mbps",
                                    "Upload até 260 Mbps",
                                    "Wi-Fi 6 incluso",
                                    "Instalação grátis",
                                    "Suporte prioritário 24/7",
                                    "Fibra óptica 100%",
                                    "Garantia de velocidade"
                                ]
                            },
                            {
                                name: "Premium",
                                speed: "620 Mega",
                                price: "R$ 119,90",
                                period: "/mês",
                                icon: "bi-rocket-takeoff-fill",
                                features: [
                                    "Download até 620 Mbps",
                                    "Upload até 310 Mbps",
                                    "Wi-Fi 6 incluso",
                                    "Instalação grátis",
                                    "Suporte VIP 24/7",
                                    "Fibra óptica 100%",
                                    "IP Fixo disponível",
                                    "Garantia de velocidade"
                                ]
                            },
                            {
                                name: "Ultra",
                                speed: "820 Mega",
                                price: "R$ 179,90",
                                period: "/mês",
                                icon: "bi-gem",
                                features: [
                                    "Download até 820 Mbps",
                                    "Upload até 410 Mbps",
                                    "Wi-Fi 6 incluso",
                                    "Instalação grátis",
                                    "Suporte VIP 24/7",
                                    "Fibra óptica 100%",
                                    "IP Fixo incluso",
                                    "Garantia de velocidade",
                                    "Prioridade máxima"
                                ]
                            }
                        ].map((plan, idx) => (
                            <div
                                key={idx}
                                className={`relative flex flex-col h-full rounded-3xl transition-all duration-500 p-8 ${plan.popular
                                    ? "bg-gradient-to-b from-navy-light to-navy-dark border-2 border-primary shadow-[0_0_50px_rgba(255,193,7,0.2)] z-10"
                                    : "bg-glass border-2 border-transparent border-white/5 hover:border-primary/30 hover:bg-navy-light/50 opacity-90 hover:opacity-100"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                                        <span className="bg-gradient-gold text-navy-dark font-extrabold text-xs px-6 py-2 rounded-full uppercase tracking-wider shadow-lg animate-pulse-glow">
                                            🔥 Mais Vendido
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-6 border-b border-white/10 pb-6">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${plan.popular ? 'bg-primary/20' : 'bg-white/5'}`}>
                                        <i className={`bi ${plan.icon} text-3xl ${plan.popular ? 'text-primary' : 'text-foreground/70'}`}></i>
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 uppercase tracking-wide ${plan.popular ? 'text-primary' : 'text-foreground/70'}`}>{plan.name}</h3>
                                    <div className="flex items-center justify-center gap-1 mb-2">
                                        <span className={`text-5xl font-black ${plan.popular ? 'text-gradient-gold' : 'text-foreground'}`}>
                                            {plan.speed.split(' ')[0]}
                                        </span>
                                        <span className="text-lg font-medium text-muted-foreground self-end mb-2">Mega</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-1 text-muted-foreground">
                                        <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                                        <span className="text-sm">{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow text-sm">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <i className={`bi bi-check-circle-fill flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-primary/70'}`}></i>
                                            <span className="text-foreground/90 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.popular ? "hero" : "outline"}
                                    className={`w-full py-6 text-base font-bold rounded-xl mt-auto ${plan.popular ? 'hover-glow shadow-gold' : 'hover:bg-primary/10 hover:text-primary hover:border-primary/50'}`}
                                    asChild
                                >
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-whatsapp mr-2 text-lg"></i>
                                        Contratar
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/planos">
                            <Button variant="ghost" size="lg" className="text-lg hover:text-primary px-8">
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

            {/* Área de Cobertura */}
            <section className="py-20 md:py-28 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Onde Atendemos</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                            Área de <span className="text-gradient-gold">Cobertura</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Atendemos diversos bairros em Araçatuba e estamos sempre expandindo.
                            <br />
                            <span className="font-semibold text-primary">Cobertura total de 88% da cidade</span>, incluindo condomínios fechados.
                        </p>

                        <div className="glass-card rounded-2xl p-8 md:p-12 mb-8 border border-primary/20 bg-primary/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
                                {[
                                    "Moradas dos Nobres",
                                    "Jardim Algo Azul",
                                    "Jardim Moreira",
                                    "Clóvis Valentim Picolotto",
                                    "Claudionor Cinti",
                                    "Jussara",
                                    "Esplanada",
                                    "Residencial Paquere",
                                    "Residencial Aimoré",
                                    "Chácaras Aguiar",
                                    "Chácaras Osakas",
                                    "Chácara de Recreio"
                                ].map((area, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <i className="bi bi-geo-alt-fill text-primary"></i>
                                        <span className="text-foreground/90 text-sm md:text-base capitalize">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-muted-foreground mb-8">
                            Não encontrou seu bairro? Fale conosco agora mesmo!
                        </p>

                        <div className="flex justify-center">
                            <Button variant="hero" size="lg" asChild className="hover-glow">
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp mr-2"></i>
                                    Consultar Meu Bairro
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="py-20 md:py-28 bg-muted/30">
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
                            name="Clarice Rozal"
                            location="Jardim Moreira"
                            rating={5}
                            text="Incrível! A velocidade é exatamente como prometido. Assisto Netflix em 4K sem travamentos e trabalho de casa sem problemas."
                        />
                        <TestimonialCard
                            name="Gabriel Massaroto"
                            location="Residencial Paquere"
                            rating={5}
                            text="Melhor internet que já tive! O suporte é rápido e eficiente. Recomendo de olhos fechados para quem quer qualidade."
                        />
                        <TestimonialCard
                            name="Sabino Silva"
                            location="Moradas dos Nobres"
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
