import { motion } from 'framer-motion';

const Works = () => {
    return (
        <section className="section" id="works">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="works-header"
                >
                    <h2 className="section-title text-center">Obras & <span className="gold-text"> inspirações</span></h2>
                    <p className="text-center subtitle">"A poesia é o transbordar da alma"</p>
                </motion.div>

                <div className="works-grid">
                    <motion.div
                        className="poem-preview"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h3>Temáticas</h3>
                        <p>
                            Minhas obras são um reflexo de estados de ânimo profundos.
                            Nelas, você encontrará versos que exploram o <strong>amor</strong>,
                            a dor da <strong>perda</strong> e os silêncios da <strong>solidão</strong>.
                            Minha escrita carrega um forte liame espiritualista, buscando sempre
                            compreender o divino através do humano.
                        </p>
                    </motion.div>

                    <motion.div
                        className="book-teaser"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="book-content">
                            <span className="badge">Em Breve</span>
                            <h3>Novo Livro</h3>
                            <p>Uma coleção exclusiva de poesias e crônicas selecionadas.</p>
                            <button className="btn-gold">Aguarde o Lançamento</button>
                        </div>
                    </motion.div>
                </div>

                <div className="awards-list">
                    <h3 className="awards-title">Reconhecimentos</h3>
                    <ul className="awards-grid">
                        <li>3º Lugar - Concurso "Aprendiz de Poeta" (RS)</li>
                        <li>Honra ao Mérito - Academia Brasileira de Trovas</li>
                        <li>Júri da UBT (União Brasileira de Trovadores)</li>
                    </ul>
                </div>
            </div>

            <style>{`
                .text-center { text-align: center; }
                .subtitle { 
                    color: var(--color-text-muted); 
                    margin-bottom: 3rem;
                    font-style: italic;
                }
                .works-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    margin-bottom: 4rem;
                }
                .poem-preview, .book-teaser {
                    background: #151515;
                    padding: 3rem;
                    border: 1px solid #333;
                    position: relative;
                }
                .poem-preview h3, .book-teaser h3 {
                    font-family: var(--font-heading);
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    color: var(--color-gold);
                }
                .poem-preview p {
                    color: var(--color-text-muted);
                    line-height: 1.8;
                }
                .book-teaser {
                    border: 1px solid var(--color-gold);
                    background: linear-gradient(45deg, #0F0F0F, #1a1a10);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                .badge {
                    background: var(--color-gold);
                    color: #000;
                    padding: 0.25rem 0.75rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    margin-bottom: 1rem;
                    display: inline-block;
                }
                .btn-gold {
                    background: transparent;
                    color: var(--color-gold);
                    border: 1px solid var(--color-gold);
                    padding: 0.75rem 2rem;
                    margin-top: 1.5rem;
                    cursor: pointer;
                    font-family: var(--font-body);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s;
                }
                .btn-gold:hover {
                    background: var(--color-gold);
                    color: #000;
                }
                .awards-list {
                    text-align: center;
                    padding-top: 2rem;
                    border-top: 1px solid #333;
                }
                .awards-title {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    color: var(--color-text-main);
                    margin-bottom: 1.5rem;
                }
                .awards-grid {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    flex-wrap: wrap;
                }
                .awards-grid li {
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .awards-grid li::before {
                    content: "✦";
                    color: var(--color-gold);
                }

                @media (max-width: 768px) {
                    .works-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Works;
