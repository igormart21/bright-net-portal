import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Plans = () => {
    const whatsappLink = "https://wa.me/5518996904225?text=Olá! Gostaria de contratar um plano de internet.";

    const plans = [
        {
            name: "Start",
            speed: "420",
            price: "89,90",
            icon: "bi-lightning-fill",
            recommended: false,
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
            speed: "520",
            price: "99,90",
            icon: "bi-star-fill",
            recommended: true,
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
            speed: "620",
            price: "119,90",
            icon: "bi-rocket-takeoff-fill",
            recommended: false,
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
            speed: "820",
            price: "179,90",
            icon: "bi-gem",
            recommended: false,
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
    ];

    return (
        <div className="min-h-screen">
            <PageHero
                title="Nossos Planos"
                subtitle="Escolha o plano ideal para sua necessidade de internet"
                icon="bi-speedometer2"
                breadcrumbs={[
                    { label: "Início", path: "/" },
                    { label: "Planos", path: "/planos" }
                ]}
            />

            {/* Plans Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto">
                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`relative flex flex-col h-full rounded-3xl transition-all duration-500 p-8 ${plan.recommended
                                    ? "bg-gradient-to-b from-navy-light to-navy-dark border-2 border-primary shadow-[0_0_50px_rgba(255,193,7,0.2)] z-10"
                                    : "bg-glass border-2 border-transparent border-white/5 hover:border-primary/30 hover:bg-navy-light/50 opacity-90 hover:opacity-100"
                                    }`}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                                        <span className="bg-gradient-gold text-navy-dark font-extrabold text-xs px-6 py-2 rounded-full uppercase tracking-wider shadow-lg animate-pulse-glow">
                                            🔥 Mais Popular
                                        </span>
                                    </div>
                                )}


                                <div className="text-center mb-6">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${plan.recommended ? 'bg-primary/20' : 'bg-white/5'}`}>
                                        <i className={`bi ${plan.icon} text-3xl ${plan.recommended ? 'text-primary' : 'text-foreground/70'}`}></i>
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 uppercase tracking-wide ${plan.recommended ? 'text-primary' : 'text-foreground/70'}`}>{plan.name}</h3>
                                    <div className="text-4xl lg:text-5xl font-black text-gradient-gold mb-1">{plan.speed} Mega</div>
                                    <p className="text-muted-foreground text-sm">
                                        <span className="text-2xl font-bold text-foreground">R$ {plan.price}</span>/mês
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-sm">
                                            <i className={`bi bi-check-circle-fill flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-primary' : 'text-primary/70'}`}></i>
                                            <span className="font-medium text-foreground/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.recommended ? "hero" : "outline"}
                                    className={`w-full py-6 text-base font-bold rounded-xl mt-auto ${plan.recommended ? 'hover-glow shadow-gold' : 'hover:bg-primary/10 hover:text-primary hover:border-primary/50'}`}
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
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl md:text-4xl font-bold mb-4">
                            Compare os <span className="text-gradient-gold">Planos</span>
                        </h2>
                        <p className="text-muted-foreground text-base md:text-lg">
                            Veja todos os detalhes e escolha o melhor para você
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full max-w-5xl mx-auto bg-background/50 rounded-2xl overflow-hidden">
                            <thead className="bg-muted/30">
                                <tr>
                                    <th className="text-left p-4 font-bold">Recurso</th>
                                    {plans.map((plan, idx) => (
                                        <th key={idx} className="text-center p-4 font-bold">{plan.name}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/30">
                                <tr>
                                    <td className="p-4 font-medium">Velocidade</td>
                                    {plans.map((plan, idx) => (
                                        <td key={idx} className="text-center p-4">{plan.speed} Mega</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Download</td>
                                    {plans.map((plan, idx) => (
                                        <td key={idx} className="text-center p-4">Até {plan.speed} Mbps</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Upload</td>
                                    {plans.map((plan, idx) => (
                                        <td key={idx} className="text-center p-4">Até {parseInt(plan.speed) / 2} Mbps</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Wi-Fi 6</td>
                                    {plans.map((plan, idx) => (
                                        <td key={idx} className="text-center p-4">
                                            <i className="bi bi-check-circle-fill text-primary"></i>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Instalação Grátis</td>
                                    {plans.map((plan, idx) => (
                                        <td key={idx} className="text-center p-4">
                                            <i className="bi bi-check-circle-fill text-primary"></i>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Fibra Óptica 100%</td>
                                    {plans.map((plan, idx) => (
                                        <td key={idx} className="text-center p-4">
                                            <i className="bi bi-check-circle-fill text-primary"></i>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">IP Fixo</td>
                                    {plans.map((plan, idx) => (
                                        <td key={idx} className="text-center p-4">
                                            {plan.name === "Start" || plan.name === "Plus" ? (
                                                <i className="bi bi-dash text-muted-foreground"></i>
                                            ) : (
                                                <i className="bi bi-check-circle-fill text-primary"></i>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Perguntas <span className="text-gradient-gold">Frequentes</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "Como funciona a instalação?",
                                    a: "A instalação é 100% gratuita e realizada por técnicos especializados em até 48 horas após aprovação."
                                },
                                {
                                    q: "Posso mudar de plano depois?",
                                    a: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento."
                                },
                                {
                                    q: "A velocidade é garantida?",
                                    a: "Sim, garantimos a velocidade contratada via fibra óptica 100%."
                                },
                                {
                                    q: "Tem fidelidade?",
                                    a: "Entre em contato pelo WhatsApp para consultar as condições atuais."
                                }
                            ].map((faq, idx) => (
                                <div key={idx} className="glass-card rounded-xl p-6">
                                    <div className="flex gap-4">
                                        <i className="bi bi-question-circle-fill text-2xl text-primary flex-shrink-0"></i>
                                        <div>
                                            <h3 className="font-bold mb-2 text-lg">{faq.q}</h3>
                                            <p className="text-muted-foreground">{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link to="/contato">
                                <Button variant="outline" size="lg">
                                    <i className="bi bi-chat-dots mr-2"></i>
                                    Mais Perguntas
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Pronto para <span className="text-gradient-gold">Contratar</span>?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Fale conosco agora pelo WhatsApp e garanta sua internet de alta velocidade!
                    </p>
                    <Button variant="hero" size="lg" asChild>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-whatsapp mr-2 text-xl"></i>
                            Contratar Agora
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Plans;
