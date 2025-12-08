import { Mail, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-content">
                <div className="contact-info">
                    <h2 className="footer-title">Vamos <span className="gold-text">Conversar?</span></h2>
                    <p>Entre em contato para palestras, eventos ou dúvidas.</p>
                    <a href="mailto:eninhaandrade@gmail.com" className="email-link">
                        <Mail className="icon-inline" /> eninhaandrade@gmail.com
                    </a>
                </div>

                <div className="social-links">
                    <a href="https://www.facebook.com/mirlene.andrade" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <Facebook size={24} />
                    </a>
                    <a href="https://www.instagram.com/mirlene_poetisa/" target="_blank" rel="noopener noreferrer" className="social-btn">
                        <Instagram size={24} />
                    </a>
                </div>

                <div className="credits">
                    <p>&copy; {new Date().getFullYear()} Mirlene Andrade. Todos os direitos reservados.</p>
                    <p className="dev-credit">Desenvolvido com carinho por Bruno Sena.</p>
                </div>
            </div>

            <style>{`
                .footer {
                    background-color: #000;
                    padding: 4rem 0 2rem;
                    border-top: 1px solid #222;
                }
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 2rem;
                }
                .footer-title {
                    font-size: 2.5rem;
                }
                .email-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-text-main);
                    font-size: 1.2rem;
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    border: 1px solid #333;
                    border-radius: 50px;
                    transition: all 0.3s;
                }
                .email-link:hover {
                    border-color: var(--color-gold);
                    color: var(--color-gold);
                }
                .social-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .social-btn {
                    color: var(--color-text-muted);
                    transition: transform 0.3s, color 0.3s;
                }
                .social-btn:hover {
                    color: var(--color-gold);
                    transform: translateY(-5px);
                }
                .credits {
                    margin-top: 3rem;
                    border-top: 1px solid #111;
                    padding-top: 2rem;
                    width: 100%;
                }
                .credits p {
                    color: #444;
                    font-size: 0.8rem;
                }
                .dev-credit {
                    color: var(--color-gold-dim) !important;
                    margin-top: 0.5rem;
                }
            `}</style>
        </footer>
    );
};

export default Contact;
