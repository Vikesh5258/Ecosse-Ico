import { useState } from 'react';
import headerImg from '../../assets/header-img.png';

const LandingHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 110;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            
            // Update the URL hash without jumping
            window.history.pushState(null, null, `${sectionId}`);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Spacer to prevent content from jumping up under the fixed header */}
            <div className="w-full h-[110px] bg-[#f6f4f0]"></div>
            
            <header className="w-full bg-[#f6f4f0] fixed top-0 left-0 z-[100] shadow-sm">
                {/* The background texture can be applied if needed, currently using a subtle off-white/beige */}
                <div className="px-4 sm:px-6 lg:px-8 h-[110px] flex items-center justify-between">

                {/* Logo & Title */}
                <div className="flex items-center gap-3 cursor-pointer">
                    {/* Placeholder for the coin logo */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                        <img src={headerImg} alt="Ecosse Coin Logo" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                    </div>
                    <span className="text-[#B47B59] font-bold text-xl tracking-wider uppercase">
                        Ecosse Coin
                    </span>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-10">
                    {['About', 'Tokenomics', 'Roadmap', 'Teams', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            onClick={(e) => scrollToSection(e, item.toLowerCase().replace(' ', '-'))}
                            className="text-[#374151] hover:text-[#a66a45] text-[15px] font-medium transition-colors cursor-pointer"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Desktop Action Button */}
                <div className="hidden lg:flex items-center">
                    <button className="bg-[linear-gradient(104.84deg,#C58E6D_0%,#8C5A3C_100%)] hover:opacity-90 text-white font-medium px-4 py-2.5 rounded-[8px] shadow-sm transition-all duration-300 text-[15px]">
                        Get Started 
                    </button>
                </div>

                {/* Mobile Menu Toggle (Visible only on small screens) */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-[#1A1A1A] hover:text-[#C58E6D] transition-colors focus:outline-none"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-[110px] left-0 w-full bg-[#f6f4f0] shadow-md border-t border-gray-200 z-50 flex flex-col px-4 py-6 gap-6 min-h-screen">
                    <nav className="flex flex-col gap-4">
                        {['About', 'Tokenomics', 'Roadmap', 'Teams', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                onClick={(e) => scrollToSection(e, item.toLowerCase().replace(' ', '-'))}
                                className="text-[#374151] hover:text-[#a66a45] text-lg font-medium transition-colors cursor-pointer"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <button className="w-full bg-[linear-gradient(104.84deg,#C58E6D_0%,#8C5A3C_100%)] hover:opacity-90 text-white font-medium px-4 py-3 rounded-[8px] shadow-sm transition-all duration-300 text-[15px]">
                        Get Started
                    </button>
                </div>
            )}
        </header>
        </>
    )
}

export default LandingHeader