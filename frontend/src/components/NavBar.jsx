import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { to: "/", label: "Home"},
        { to: "/login", label: "Login" },
        { to: "/register", label: "Register" },
    ];

    return (
        <>
            <nav className={`
                fixed top-0 left-0 right-0 z-50 
                transition-all duration-300 ease-in-out
                ${isScrolled 
                    ? 'bg-[#5174f0]/90 backdrop-blur-lg shadow-lg py-3' 
                    : 'bg-[#5174f0] py-4'
                }
            `}>
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo with animation */}
                    <Link 
                        to="/" 
                        className="group relative overflow-hidden"
                    >
                        <h1 className="text-white text-[25px] font-bold transition-all duration-300 transform group-hover:scale-105">
                            <span className="relative inline-block">
                                My App
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </span>
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-1 text-white">
                        {navLinks.map((link, index) => {
                            const isActive = location.pathname === link.to;
                            return (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        onMouseEnter={() => setHoveredLink(index)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className={`
                                            relative px-4 py-2 rounded-lg font-medium
                                            transition-all duration-300 ease-out
                                            flex items-center space-x-2
                                            ${isActive 
                                                ? 'bg-white/20 text-white' 
                                                : 'hover:bg-white/10 text-white/90'
                                            }
                                            ${hoveredLink === index ? 'transform scale-105' : ''}
                                        `}
                                    >
                                        <span className="text-lg transition-transform duration-300 inline-block">
                                            {link.icon}
                                        </span>
                                        <span>{link.label}</span>
                                        
                                        {/* Active indicator */}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"></span>
                                        )}
                                        
                                        {/* Hover effect background */}
                                        <span className={`
                                            absolute inset-0 rounded-lg bg-white/10
                                            transition-all duration-300
                                            ${hoveredLink === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                                        `}></span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative w-10 h-10 rounded-lg focus:outline-none group"
                        aria-label="Toggle menu"
                    >
                        <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex flex-col items-center justify-center w-full h-full">
                            <span className={`
                                block w-6 h-0.5 bg-white rounded-full
                                transition-all duration-300 ease-out
                                ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}
                            `}></span>
                            <span className={`
                                block w-6 h-0.5 bg-white rounded-full my-1
                                transition-all duration-300 ease-out
                                ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
                            `}></span>
                            <span className={`
                                block w-6 h-0.5 bg-white rounded-full
                                transition-all duration-300 ease-out
                                ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}
                            `}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`
                    md:hidden absolute top-full left-0 right-0
                    bg-[#5174f0]/95 backdrop-blur-lg
                    transition-all duration-300 ease-in-out
                    overflow-hidden
                    ${isMobileMenuOpen 
                        ? 'max-h-96 opacity-100 shadow-lg' 
                        : 'max-h-0 opacity-0'
                    }
                `}>
                    <ul className="py-4 space-y-2">
                        {navLinks.map((link, index) => {
                            const isActive = location.pathname === link.to;
                            return (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className={`
                                            flex items-center space-x-3 px-6 py-3
                                            transition-all duration-300
                                            ${isActive 
                                                ? 'bg-white/20 text-white' 
                                                : 'text-white/90 hover:bg-white/10'
                                            }
                                        `}
                                        style={{
                                            animation: isMobileMenuOpen 
                                                ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                                                : 'none'
                                        }}
                                    >
                                        <span className="text-xl">{link.icon}</span>
                                        <span className="font-medium">{link.label}</span>
                                        {isActive && (
                                            <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>

            {/* Spacer to prevent content from hiding under fixed navbar */}
            <div className="h-16"></div>

            {/* Add custom animations */}
            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}

export default NavBar;