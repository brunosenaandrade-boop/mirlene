import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detectar seção ativa
            const sections = ['home', 'biography', 'works', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Início' },
        { id: 'biography', label: 'Biografia' },
        { id: 'works', label: 'Obras' },
        { id: 'contact', label: 'Contato' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Navegação principal">
            <div className="container nav-content">
                <button
                    onClick={() => scrollToSection('home')}
                    className="logo"
                    aria-label="Voltar para o início"
                >
                    <span className="logo-text">Mirlene</span>
                    <span className="logo-accent">Andrade</span>
                </button>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-menu" role="menubar">
                    {navItems.map(item => (
                        <li key={item.id} role="none">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                role="menuitem"
                                aria-current={activeSection === item.id ? 'page' : undefined}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="mobile-nav-links" role="menu">
                            {navItems.map(item => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    role="none"
                                >
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                                        role="menuitem"
                                    >
                                        {item.label}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: transparent;
                    transition: all 0.3s ease;
                    padding: 1.5rem 0;
                }

                .navbar.scrolled {
                    background-color: rgba(15, 15, 15, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
                    padding: 1rem 0;
                    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
                }

                .nav-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    color: var(--color-text-main);
                    transition: transform 0.3s ease;
                }

                .logo:hover {
                    transform: scale(1.05);
                }

                .logo:focus-visible {
                    outline: 2px solid var(--color-gold);
                    outline-offset: 4px;
                    border-radius: 4px;
                }

                .logo-text {
                    color: var(--color-text-main);
                }

                .logo-accent {
                    color: var(--color-gold);
                    font-style: italic;
                    margin-left: 0.25rem;
                }

                .nav-links {
                    display: flex;
                    gap: 2.5rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .nav-link {
                    background: none;
                    border: none;
                    color: var(--color-text-main);
                    font-family: var(--font-body);
                    font-size: 1rem;
                    cursor: pointer;
                    position: relative;
                    padding: 0.5rem 0;
                    transition: color 0.3s ease;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--color-gold);
                    transition: width 0.3s ease;
                }

                .nav-link:hover,
                .nav-link:focus-visible {
                    color: var(--color-gold);
                }

                .nav-link:focus-visible {
                    outline: 2px solid var(--color-gold);
                    outline-offset: 4px;
                    border-radius: 4px;
                }

                .nav-link:hover::after,
                .nav-link.active::after {
                    width: 100%;
                }

                .nav-link.active {
                    color: var(--color-gold);
                }

                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: var(--color-text-main);
                    cursor: pointer;
                    padding: 0.5rem;
                    transition: color 0.3s ease;
                }

                .mobile-menu-button:hover,
                .mobile-menu-button:focus-visible {
                    color: var(--color-gold);
                }

                .mobile-menu-button:focus-visible {
                    outline: 2px solid var(--color-gold);
                    outline-offset: 4px;
                    border-radius: 4px;
                }

                .mobile-menu {
                    background-color: rgba(15, 15, 15, 0.98);
                    border-top: 1px solid rgba(212, 175, 55, 0.2);
                    overflow: hidden;
                }

                .mobile-nav-links {
                    list-style: none;
                    padding: 1rem 0;
                    margin: 0;
                }

                .mobile-nav-link {
                    display: block;
                    width: 100%;
                    background: none;
                    border: none;
                    color: var(--color-text-main);
                    font-family: var(--font-body);
                    font-size: 1.1rem;
                    cursor: pointer;
                    padding: 1rem 2rem;
                    text-align: left;
                    transition: all 0.3s ease;
                    border-left: 3px solid transparent;
                }

                .mobile-nav-link:hover,
                .mobile-nav-link:focus-visible {
                    background-color: rgba(212, 175, 55, 0.1);
                    color: var(--color-gold);
                    border-left-color: var(--color-gold);
                }

                .mobile-nav-link.active {
                    color: var(--color-gold);
                    border-left-color: var(--color-gold);
                    background-color: rgba(212, 175, 55, 0.05);
                }

                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none;
                    }

                    .mobile-menu-button {
                        display: block;
                    }

                    .navbar {
                        padding: 1rem 0;
                    }

                    .navbar.scrolled {
                        padding: 0.75rem 0;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .navbar,
                    .nav-link,
                    .nav-link::after,
                    .mobile-menu-button,
                    .mobile-nav-link {
                        transition: none;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
