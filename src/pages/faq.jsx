import { useState } from 'react';
import LandingHeader from '../components/landing-page/landing-header';
import LandingFooter from '../components/landing-page/landing-footer';

const FaqPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            q: 'How is the whisky verified?',
            a: 'Every cask within the ecosystem is supported by warehouse records, ownership documentation, and inventory controls. Verification procedures are designed to ensure transparency and accountability across the whisky portfolio.'
        },
        {
            q: 'What is a bonded warehouse?',
            a: 'A bonded warehouse is a government-regulated facility where spirits can mature under duty suspension. This is the standard method used throughout the Scotch whisky industry and provides a secure environment for long-term maturation.'
        },
        {
            q: 'What role does Foster Whisky play?',
            a: 'Foster Whisky provides bonded warehousing, cask management, storage, logistics, and whisky industry expertise that supports the wider ECOSSE ecosystem. Its role helps provide operational infrastructure, custody expertise, and asset management capabilities.'
        },
        {
            q: 'Is ECOSSE a cryptocurrency?',
            a: 'ECOSSE utilises blockchain technology but is fundamentally focused on real-world assets and whisky maturation. The project combines digital infrastructure with physical whisky assets to create a transparent asset-backed ecosystem.'
        },
        {
            q: 'What gives ECOSSE value?',
            a: 'The long-term vision of ECOSSE is based on the value created through Scotch whisky maturation, asset growth, ecosystem development, platform adoption, and ongoing expansion of the underlying whisky portfolio.'
        },
        {
            q: 'Is ECOSSE backed by physical assets?',
            a: 'The project is designed around real whisky assets held within bonded storage facilities. Investors should review all project documentation and disclosures to understand the specific relationship between the digital ecosystem and underlying assets.'
        },
        {
            q: 'How is transparency maintained?',
            a: 'ECOSSE is committed to providing clear information regarding asset holdings, custody arrangements, governance structures, and ecosystem development. Transparency is a core principle of the platform.'
        },
        {
            q: 'What is the long-term vision?',
            a: 'The vision is to create one of the world’s leading whisky-focused real-world asset ecosystems, combining Scotch whisky maturation, asset transparency, blockchain technology, and long-term value creation.'
        },
        {
            q: 'How large is the potential whisky market?',
            a: 'Scotch whisky is a global industry worth billions of pounds annually, with exports reaching more than 180 countries worldwide. Demand for premium aged whisky continues to grow across international markets.'
        },
        {
            q: 'Is there a fixed token supply?',
            a: 'Yes. ECOSSE has a fixed maximum supply, designed to provide transparency and certainty regarding issuance. Full tokenomics information is available in the project’s whitepaper.'
        },
        {
            q: 'What is the burn mechanism?',
            a: 'The ecosystem incorporates a burn model designed to permanently remove tokens from circulation under predefined conditions. The objective is to create a transparent and predictable supply framework over the long term.'
        },
        {
            q: 'Who is the project designed for?',
            a: 'ECOSSE is designed for individuals interested in innovation, blockchain technology, real-world assets, and Scotch whisky as a long-term asset class.'
        },
        {
            q: 'Is ECOSSE regulated?',
            a: 'ECOSSE operates within applicable laws and regulations and continues to work with professional advisers regarding governance, compliance, and regulatory requirements. Users should always review official documentation and disclosures before participating.'
        },
        {
            q: 'Where can I learn more?',
            a: 'You can explore the whitepaper, roadmap, tokenomics, governance information, and community channels available through the official ECOSSE website and social media platforms.'
        }
    ];

    const toggleFaq = (index) => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
            <LandingHeader />

            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-[36px] sm:text-[44px] md:text-[56px] font-black tracking-[0.2em] text-[#1E1E1E] mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-[#595959] text-[14px] sm:text-[16px] md:text-[18px] tracking-[0.1em] font-medium max-w-[640px] mx-auto leading-relaxed">
                            Find answers to common questions about the ECOSSE ecosystem, whisky maturation, and our platform.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl border transition-all duration-300 ${openFaq === index
                                    ? 'bg-[#FDE8D5] border-[#FDE8D5]'
                                    : 'bg-white border-[#FDE8D5]'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left"
                                >
                                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#1E1E1E] pr-4 tracking-[0.1em]">
                                        {faq.q}
                                    </h3>
                                    <svg
                                        className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-[#0B0B0B] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="px-6 sm:px-8 pb-5 sm:pb-6 text-[#0B0B0B] text-[14px] sm:text-[15px] md:text-[18px] leading-[1.7] tracking-[0.1em] font-regular">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <LandingFooter />
        </div>
    );
};

export default FaqPage;
