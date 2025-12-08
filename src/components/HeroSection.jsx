import { motion } from 'framer-motion';
import foto from '../assets/foto.png'; // Will fail if not moved, will handle fallback visually if needed

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-content"
                >
                    <h2 className="subtitle">Bem-vinda ao mundo de</h2>
                    <h1 className="title">Mirlene <span className="gold-text">Andrade</span></h1>
                    <p className="roles">Historiadora | Poetisa | Funcionária Pública</p>
                    <p className="tagline">"Transformando sentimentos e histórias em arte."</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="image-content"
                >
                    <div className="image-frame">
                        {/* Fallback to text initials if image breaks or check manually */}
                        <img src={foto} alt="Mirlene Andrade" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('no-image') }} />
                        <div className="placeholder-text">MA</div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background: radial-gradient(circle at 70% 50%, #2a2a2a, #0F0F0F);
                    overflow: hidden;
                }
                .hero-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    gap: 4rem;
                    z-index: 2;
                }
                .subtitle {
                    font-family: var(--font-body);
                    font-weight: 300;
                    color: var(--color-text-muted);
                    font-size: 1.5rem;
                    letter-spacing: 2px;
                    margin-bottom: 0.5rem;
                }
                .title {
                    font-size: 5rem;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    color: var(--color-text-main);
                }
                .gold-text {
                    color: var(--color-gold);
                    font-style: italic;
                }
                .roles {
                    font-size: 1.2rem;
                    color: var(--color-text-main);
                    border-left: 3px solid var(--color-gold);
                    padding-left: 1rem;
                    margin-bottom: 2rem;
                }
                .tagline {
                    font-family: var(--font-heading);
                    font-style: italic;
                    color: var(--color-text-muted);
                }
                .image-frame {
                    width: 400px;
                    height: 500px;
                    border: 2px solid var(--color-gold);
                    padding: 20px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(255,255,255,0.02);
                }
                .image-frame img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    filter: grayscale(20%) sepia(10%);
                    transition: filter 0.5s;
                }
                .image-frame img:hover {
                    filter: grayscale(0%);
                }
                .no-image .placeholder-text {
                    display: block;
                }
                .placeholder-text {
                    display: none;
                    font-size: 5rem;
                    font-family: var(--font-heading);
                    color: var(--color-gold);
                }

                @media (max-width: 768px) {
                    .hero-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 2rem;
                        padding-top: 4rem;
                    }
                    .roles {
                        border-left: none;
                        border-bottom: 3px solid var(--color-gold);
                        padding-bottom: 1rem;
                        padding-left: 0;
                        display: inline-block;
                    }
                    .image-frame {
                        width: 300px;
                        height: 400px;
                        margin: 0 auto;
                    }
                    .title {
                        font-size: 3.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
