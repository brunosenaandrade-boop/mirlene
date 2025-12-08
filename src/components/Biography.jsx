import { motion } from 'framer-motion';
import { BookOpen, Heart, Landmark } from 'lucide-react';

const Biography = () => {
    return (
        <section className="section bg-surface" id="biography">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bio-header"
                >
                    <h2 className="section-title">Minha <span className="gold-text">Trajetória</span></h2>
                    <p className="section-subtitle">De Aracaju para o mundo das letras</p>
                </motion.div>

                <div className="bio-grid">
                    <motion.div
                        className="bio-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            Nascida em <strong className="gold-highlight">Aracaju, Sergipe</strong>, Mirlene Andrade trilhou um caminho singular entre a História e a Poesia.
                            Graduada em Licenciatura em História pela UNIT (Universidade Tiradentes), ela construiu uma sólida carreira pública
                            na cidade de Barra dos Coqueiros.
                        </p>
                        <p>
                            Sua sensibilidade artística despertou cedo, inspirada pelo vizinho e grande poeta <strong className="gold-highlight">Santo Souza</strong>.
                            Na adolescência, descobriu nas letras um refúgio para sua alma "bastante sensível" e de tendência espiritualista.
                        </p>
                        <p>
                            Como funcionária pública, dedicou 18 anos à área de Saúde Mental em um CAPS, onde uniu arte e cuidado,
                            realizando oficinas de teatro do oprimido e alfabetização para pessoas com transtornos mentais.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bio-cards"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <div className="card">
                            <Landmark className="icon" size={32} />
                            <h3>Academia</h3>
                            <p>Membra da ABLPL (Cadeira 13) e ABLA (Cadeira 07)</p>
                        </div>
                        <div className="card">
                            <BookOpen className="icon" size={32} />
                            <h3>Publicações</h3>
                            <p>Antologias "Poemas do Brasil" e "Mulheres Brilhantes"</p>
                        </div>
                        <div className="card">
                            <Heart className="icon" size={32} />
                            <h3>Saúde & Arte</h3>
                            <p>Atuação terapêutica no CAPS e Teatro do Oprimido</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .bg-surface {
                    background-color: var(--color-surface);
                }
                .bio-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .section-title {
                    font-size: 3rem;
                    color: var(--color-text-main);
                }
                .section-subtitle {
                    color: var(--color-text-muted);
                    font-style: italic;
                }
                .gold-highlight {
                    color: var(--color-gold);
                }
                .bio-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 4rem;
                    align-items: center;
                }
                .bio-text p {
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                    color: var(--color-text-main);
                    text-align: justify;
                }
                .bio-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .card {
                    background: rgba(255,255,255,0.03);
                    padding: 1.5rem;
                    border-left: 2px solid var(--color-gold);
                    transition: transform 0.3s ease, background 0.3s;
                }
                .card:hover {
                    transform: translateX(10px);
                    background: rgba(212, 175, 55, 0.05);
                }
                .card h3 {
                    font-size: 1.25rem;
                    margin: 0.5rem 0;
                    color: var(--color-text-main);
                }
                .card p {
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                }
                .icon {
                    color: var(--color-gold);
                }

                @media (max-width: 768px) {
                    .bio-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .section-title {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Biography;
