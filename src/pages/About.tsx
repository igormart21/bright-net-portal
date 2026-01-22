import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
    return (
        <div className="min-h-screen pt-20">
            <PageHero
                title="Sobre Nós"
                subtitle="Mais de 6 anos de experiência conectando você ao mundo com velocidade e estabilidade."
                breadcrumbs={[{ label: "Sobre" }]}
                icon="bi-info-circle"
            />

            {/* Mission, Vision, Values */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "bi-bullseye",
                                title: "Missão",
                                text: "Conectar pessoas e empresas com internet de qualidade, contribuindo para o desenvolvimento digital da nossa região."
                            },
                            {
                                icon: "bi-eye",
                                title: "Visão",
                                text: "Ser referência em provedores de internet, reconhecidos pela excelência no atendimento e tecnologia de ponta."
                            },
                            {
                                icon: "bi-heart",
                                title: "Valores",
                                text: "Compromisso, transparência, inovação, respeito ao cliente e responsabilidade social."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card rounded-2xl p-8 text-center hover-lift">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                                    <i className={`bi ${item.icon} text-3xl text-primary`}></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16 md:py-24 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Nossa <span className="text-gradient-gold">História</span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="glass-card rounded-xl p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="bi bi-flag text-xl text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">Nossa Trajetória</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Com <strong>mais de 6 anos de experiência</strong> no mercado, a <strong>Alternativa Internet e Serviços Ltda.</strong> é uma empresa especializada em fornecer soluções de conectividade de alta velocidade.
                                            Nascemos com a missão de atender às necessidades de internet de residências e empresas com excelência.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-xl p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="bi bi-graph-up-arrow text-xl text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">Qualidade e Expansão</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Prestamos serviços para grandes provedores e atuamos diretamente como um provedor de internet, entregando banda larga de alta qualidade e alto desempenho.
                                            Nossa infraestrutura utiliza <strong>Tecnologia de Fibra Óptica 100%</strong> para garantir a melhor experiência.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-xl p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="bi bi-heart text-xl text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">Compromisso Humanizado</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Nosso diferencial é o <strong>Atendimento Humanizado</strong> e capacitado. Oferecemos suporte técnico incomparável, disponível <strong>24 horas por dia, 7 dias por semana</strong>.
                                            Priorizamos um atendimento rápido, atencioso e uma qualidade de serviço impecável.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Nossa <span className="text-gradient-gold">Infraestrutura</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Tecnologia de ponta para garantir a melhor experiência de conectividade
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "bi-hdd-network",
                                title: "Data Center",
                                description: "Equipamentos de alta qualidade em nossos sistemas"
                            },
                            {
                                icon: "bi-diagram-3",
                                title: "Fibra Óptica 100%",
                                description: "Tecnologia de ponta para melhor performance"
                            },
                            {
                                icon: "bi-activity",
                                title: "Alta Performance",
                                description: "Garantia de velocidade e estabilidade"
                            },
                            {
                                icon: "bi-shield-lock",
                                title: "Segurança",
                                description: "Rede segura e protegida 24/7"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card rounded-xl p-6 text-center hover-lift">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                                    <i className={`bi ${item.icon} text-2xl text-primary`}></i>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-24 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Nossa <span className="text-gradient-gold">Equipe</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Profissionais dedicados e qualificados para atender você
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Equipe Comercial", icon: "bi-briefcase", desc: "Vendas e atendimento" },
                            { name: "Equipe Técnica", icon: "bi-tools", desc: "Instalação e suporte" },
                            { name: "Central de Atendimento", icon: "bi-headset", desc: "Atendimento 24/7" },
                            { name: "Gerência", icon: "bi-person-badge", desc: "Gestão e qualidade" }
                        ].map((team, idx) => (
                            <div key={idx} className="glass-card rounded-xl p-6 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                                    <i className={`bi ${team.icon} text-3xl text-primary`}></i>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{team.name}</h3>
                                <p className="text-muted-foreground text-sm">{team.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Area */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Área de <span className="text-gradient-gold">Cobertura</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Atendemos diversos bairros e estamos sempre expandindo nossa cobertura
                        </p>

                        <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                                {[
                                    "Centro", "Bairro Alto", "Jardim Primavera", "Vila Nova",
                                    "Parque das Flores", "São José", "Industrial", "Nova Esperança"
                                ].map((area, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <i className="bi bi-geo-alt-fill text-primary"></i>
                                        <span className="text-foreground/90">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                            Não encontrou seu bairro? Entre em contato para verificar a disponibilidade!
                        </p>

                        <Link to="/contato">
                            <Button variant="hero" size="lg">
                                <i className="bi bi-search mr-2"></i>
                                Consultar Disponibilidade
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 md:py-24 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">
                            Certificações e <span className="text-gradient-gold">Compromissos</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "bi-patch-check",
                                    title: "ANATEL",
                                    desc: "Regulamentado e certificado"
                                },
                                {
                                    icon: "bi-shield-check",
                                    title: "ISO 9001",
                                    desc: "Qualidade garantida"
                                },
                                {
                                    icon: "bi-award",
                                    title: "Prêmios",
                                    desc: "Reconhecimento regional"
                                }
                            ].map((cert, idx) => (
                                <div key={idx} className="glass-card rounded-xl p-6">
                                    <i className={`bi ${cert.icon} text-4xl text-primary mb-4`}></i>
                                    <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                                    <p className="text-muted-foreground text-sm">{cert.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
