import { motion } from 'framer-motion';
import { BookOpen, Heart, Feather } from 'lucide-react';

const Poems = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const poems = [
        {
            id: 1,
            title: "POR ENQUANTO",
            icon: Feather,
            content: `Que nenhum silêncio me cale
Que nenhum tempo me detenha
Que nenhuma dúvida me roube o instante
Que nenhum medo me tire o agora
Que nenhuma certeza me prenda

Por enquanto

Quero dançar meus pensamentos soltos
sem rima, sem pressa, sem destino
deixar o coração escrever sem pontuação
só o pulso marcando o compasso do sentir

Por enquanto

Quero o infinito em forma de toque
o acaso virando certeza em teus olhos
a entrega virando caminho
a pele dizendo o que a boca não diz

Por enquanto

Quero o sopro da liberdade
o passo
o voo
o abraço
o beijo
o eterno disfarçado de instante

porque é só neste agora
que a vida acontece.`
        },
        {
            id: 2,
            title: "Roubaram a poesia no céu",
            icon: Heart,
            content: `Diz como há no céu poema sem ti?
Se eu sou o soneto
e tu és a caneta que me escreve.
Se teus abraços são como papéis de um poeta ardoroso,
E se meu corpo só rima com o teu.

Diz como há poesia no céu?
Se o sol do teu sorriso colore a minha vida em branco e preto
E aquece o meu pobre coração empoeirado e álgido...
Flagelado...
Esmagado pelas amarguras da desilusões.

Diz como há poesia no céu?
Se pelas asas da inspiração ainda beijas a minh'alma
e, no meu céu, tu fizeste poesia perenal.`
        },
        {
            id: 3,
            title: "SONETO DA PAIXÃO",
            icon: BookOpen,
            content: `Para ti o amor de saudade rasgava,
Sobre à luz dessa paixão florida,
Como minha boca na sede haurida,
Entre a lua fria, seu sol chegava!

Era luz das estrelas no céu frio,
Pelas nuvens do seu amor eu voava!
Era o beijo que minha alma sonhava,
Que os oceanos banhavam meu rio!

Era seus olhos que vivi sonhando...
Lábios de mel que me deixou sorrindo...
Suas mãos que a noite vêm dedilhando...

Beije-me o coração doce anjo lindo!
Em ti- na vida ficarei sonhando...
Em ti- nos lábios, viverei sorrindo!`
        }
    ];

    return (
        <section className="section poems-section" id="poems" aria-labelledby="poems-title">
            <div className="container">
                <motion.header
                    initial={prefersReducedMotion ? {} : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={prefersReducedMotion ? { duration: 0 } : {}}
                    className="poems-header"
                >
                    <h2 id="poems-title" className="section-title text-center">
                        Poesias <span className="gold-text">Selecionadas</span>
                    </h2>
                    <p className="text-center subtitle">"A poesia é a voz da alma"</p>
                </motion.header>

                <div className="poems-grid">
                    {poems.map((poem, index) => {
                        const Icon = poem.icon;
                        return (
                            <motion.article
                                key={poem.id}
                                className="poem-card"
                                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={prefersReducedMotion ? { duration: 0 } : { delay: index * 0.2 }}
                            >
                                <div className="poem-header">
                                    <Icon className="poem-icon" size={28} aria-hidden="true" />
                                    <h3 className="poem-title">{poem.title}</h3>
                                </div>
                                <div className="poem-content">
                                    {poem.content.split('\n').map((line, i) => (
                                        <p key={i} className={line.trim() === '' ? 'poem-space' : 'poem-line'}>
                                            {line || '\u00A0'}
                                        </p>
                                    ))}
                                </div>
                                <div className="poem-author">
                                    <span>Mirlene Andrade</span>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .poems-section {
                    background: linear-gradient(135deg, #0F0F0F 0%, #1a1510 100%);
                }

                .poems-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .poems-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
                    gap: 2.5rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .poem-card {
                    background: rgba(26, 26, 26, 0.6);
                    border: 1px solid rgba(230, 195, 71, 0.2);
                    padding: 2.5rem;
                    border-radius: 8px;
                    backdrop-filter: blur(10px);
                    transition: all 0.4s ease;
                    display: flex;
                    flex-direction: column;
                }

                .poem-card:hover {
                    border-color: var(--color-gold);
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(230, 195, 71, 0.15);
                }

                .poem-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(230, 195, 71, 0.2);
                }

                .poem-icon {
                    color: var(--color-gold);
                    flex-shrink: 0;
                }

                .poem-title {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    color: var(--color-gold);
                    margin: 0;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                .poem-content {
                    flex: 1;
                    margin-bottom: 1.5rem;
                    line-height: 1.9;
                }

                .poem-line {
                    font-family: var(--font-heading);
                    font-size: 1.05rem;
                    color: var(--color-text-main);
                    margin: 0;
                    padding: 0.15rem 0;
                    font-style: italic;
                    font-weight: 400;
                }

                .poem-space {
                    margin: 0.8rem 0;
                    height: 0.5rem;
                }

                .poem-author {
                    text-align: right;
                    font-family: var(--font-heading);
                    color: var(--color-gold);
                    font-size: 1rem;
                    font-style: italic;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(230, 195, 71, 0.1);
                }

                .text-center {
                    text-align: center;
                }

                .subtitle {
                    color: var(--color-text-muted);
                    font-style: italic;
                    margin-bottom: 3rem;
                    font-size: 1.1rem;
                }

                @media (max-width: 1024px) {
                    .poems-grid {
                        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                        gap: 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .poems-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }

                    .poem-card {
                        padding: 2rem;
                    }

                    .poem-title {
                        font-size: 1.3rem;
                    }

                    .poem-line {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .poems-grid {
                        gap: 1.5rem;
                    }

                    .poem-card {
                        padding: 1.5rem;
                    }

                    .poem-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }

                    .poem-title {
                        font-size: 1.2rem;
                    }

                    .poem-line {
                        font-size: 0.95rem;
                    }

                    .poem-icon {
                        width: 24px;
                        height: 24px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .poem-card {
                        transition: none;
                    }

                    .poem-card:hover {
                        transform: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Poems;
