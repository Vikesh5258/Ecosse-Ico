import { useState, useEffect } from 'react';
import cardIcon1 from '../../assets/card-icon-1.svg';
import cardIcon2 from '../../assets/card-icon-2.svg';
import cardIcon3 from '../../assets/card-icon-3.svg';
import sparkline1 from '../../assets/Container-1.svg';
import sparkline2 from '../../assets/Container-2.svg';
import sparkline3 from '../../assets/Container-3.svg';
import mainCoin from '../../assets/her-main-img.png';
import topBg from '../../assets/top-bg-img.jpg';
import coinVideo from '../../assets/video/coin-video.mp4';
import barrelImg from '../../assets/second-img.png';
import featureIcon1 from '../../assets/card-img.png';
import featureIcon2 from '../../assets/card-img-2.png';
import featureIcon3 from '../../assets/card-img-3.png';
import featureIcon4 from '../../assets/card-img-4.png';
import pieChart from '../../assets/Pie-Chart.png';
import tokIcon from '../../assets/Tokenomics-icons.svg';
import tokIcon1 from '../../assets/Tokenomics-icons-1.svg';
import tokIcon2 from '../../assets/Tokenomics-icons-2.svg';
import tokIcon3 from '../../assets/Tokenomics-icons-3.svg';
import tokIcon4 from '../../assets/Tokenomics-icons-4.svg';
import ellipse1 from '../../assets/Ellipse-1.svg';
import rectangle2 from '../../assets/Rectangle-2.svg';
import tokenCycleBg from '../../assets/token-cycle.svg';
import phase1 from '../../assets/phase-1.svg';
import phase2 from '../../assets/phase-2.svg';
import phase3 from '../../assets/phase-3.svg';
import ecosseBg from '../../assets/ecosse-bg.png';
import trustIcon1 from '../../assets/trust-ecosse-img.svg';
import trustIcon2 from '../../assets/trust-ecosse-img-2.svg';
import trustIcon3 from '../../assets/trust-ecosse-img-3.svg';
import trustIcon4 from '../../assets/trust-ecosse-img-4.svg';
import hoverImg1 from '../../assets/Hover-Effect-1.svg';
import hoverImg2 from '../../assets/Hover-Effect-2.svg';
import hoverImg3 from '../../assets/Hover-Effect-3.svg';
import hoverImg4 from '../../assets/Hover-Effect-4.svg';
import hoverImg5 from '../../assets/Hover-Effect-5.svg';
import hoverImg6 from '../../assets/Hover-Effect-6.svg';
import hoverImg7 from '../../assets/Hover-Effect-7.svg';
import hoverImg8 from '../../assets/Hover-Effect-8.svg';
import hoverImg9 from '../../assets/Hover-Effect-9.svg';
import faqsImg from '../../assets/faqs-img.svg';
import socialIcon1 from '../../assets/Social-icon1.svg';
import socialIcon2 from '../../assets/Social-icon2.svg';
import socialIcon3 from '../../assets/Social-icon3.svg';
import socialIcon4 from '../../assets/Social-icon4.svg';
import people1 from '../../assets/people-1.png';
import people2 from '../../assets/people-2.png';
import people3 from '../../assets/people-3.png';
import people4 from '../../assets/people-4.png';
import people5 from '../../assets/people-5.png';
import people6 from '../../assets/people-6.png';
import vectorDecor from '../../assets/Vector.svg';
import vectorKnot from '../../assets/Vector-2.svg';
import vectorStar from '../../assets/Vector-3.svg';
import vectorStar2 from '../../assets/Vector-4.svg';
import vectorOrnament from '../../assets/Vector-5.svg';
import team1 from '../../assets/popup-img-1.png';
import team2 from '../../assets/popup-img-2.png';
import team3 from '../../assets/popup-img-3.png';
import team4 from '../../assets/popup-img-4.png';
import team5 from '../../assets/popup-img-5.png';
import team6 from '../../assets/popup-img-6.png';


const LandingHero = () => {
    const fullContractAddress = "0x8c3F45E67890abcdef1234567890abcdef1239a7B";
    const displayAddress = "0x8c3F...9a7B";
    const [copied, setCopied] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = {
        rose_foster: {
            name: "Rose Foster",
            role: "Co-Founder / CFO",
            image: team1,
            bio: "Ross Foster is a visionary entrepreneur and Co-Founder of Foster Whisky, bringing together extensive experience in engineering, construction, and luxury development. As CEO of Snowdrop Developments, he has successfully led high-value residential projects across Scotland, earning a reputation for operational excellence and long-term strategic leadership. With a background that includes service in the Royal Navy and global engineering projects, Ross combines discipline, innovation, and business expertise to help drive the vision of the Ecosse Coin ecosystem and its whisky-backed asset model."
        },
        dean_thomson: {
            name: "Dean Thomson",
            role: "Operations Director / Warehouse Manager",
            image: team2,
            bio: "Dean Thomson is a seasoned whisky industry professional and Co-Founder of Foster Whisky, with over a decade of hands-on experience in Scotch whisky production, cask management, maturation, and logistics. Having worked with renowned distilleries including Whyte & Mackay, Dean developed deep expertise across every stage of whisky operations before moving into senior leadership roles within the whisky cask brokerage sector. His extensive industry knowledge and operational insight play a key role in strengthening the authenticity and real-world asset foundation of the Ecosse Coin platform. "
        },
        rose_blease: {
            name: "Rose Blease",
            role: "Expansion / Site Delivery Manager",
            image: team3,
            bio: "Ross Blease is an experienced construction and development professional with over 20 years of industry expertise, progressing from a qualified joiner to Managing Director of Snowdrop Developments UK Limited. With a strong background in residential property development, project management, and operational leadership, he has successfully overseen multiple live developments while maintaining high standards of quality, safety, and delivery. Ross combines hands-on technical knowledge with strategic leadership, bringing valuable operational experience and industry insight to the Ecosse Coin ecosystem and its long-term growth vision."
        },
        mark_stenhouse: {
            name: "Mark Stenhouse",
            role: "Finance Director",
            image: team4,
            bio: "Mark Stenhouse is an accomplished business development professional with over 35 years of experience across the finance, technology, oil, and gas sectors. Throughout his career, he has built strong relationships with high-net-worth individuals, banking institutions, insurance leaders, and major global energy companies including Saudi Aramco, Shell, Total, and Kuwait Oil Company. With extensive international market knowledge and a strong background in strategic growth and commercial development, Mark brings valuable industry expertise and global business connections to the Ecosse Coin ecosystem, supporting its vision of combining premium whisky assets with innovative blockchain technology. "
        },
        charles_mcgregor: {
            name: "Charles McGregor",
            role: "Technical Manager",
            image: team5,
            bio: "Charles McGregor is a highly experienced construction and civil engineering professional with over 20 years of expertise in residential development, infrastructure delivery, and operational leadership. As Managing Director of Snowdrop Developments UK Limited, he has successfully led multi-site developments, managed large civil engineering operations, and delivered projects safely, efficiently, and within budget. His strong technical background, combined with strategic and commercial expertise, has made him a respected leader within the construction industry. Charles is also actively involved in the Ecosse Coin project, a whisky-backed initiative that combines real-world asset value with innovative blockchain technology, further strengthening the project’s industry credibility and long-term vision."
        },
        bek_massie: {
            name: "Rebekah Massie",
            role: "Office Manager",
            image: team6,
            bio: "Rebekah Massie is an experienced operations and administration professional with a strong background in office management, financial coordination, and executive support. As Office Manager at Snowdrop Developments (UK) Ltd, she oversees daily business operations, budgeting, procurement, and organisational processes, ensuring efficiency and compliance across the company. With expertise in team coordination, strategic administration, and operational management, Rebekah brings valuable organisational strength and professional support to the Ecosse Coin ecosystem, contributing to its structured growth and operational excellence."
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedMember(null);
            }
        };
        if (selectedMember) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedMember]);

    const handleCopy = () => {
        navigator.clipboard.writeText(fullContractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <section
                className="w-full bg-[#f9f8f6] bg-cover bg-center py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
                style={{ backgroundImage: `url(${topBg})` }}
            >
                {/* Stat Cards Container */}
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-12">

                    {/* Card 1 - Holders */}
                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-[#e6e2da] flex items-center justify-between transition-transform duration-300 hover:translate-y-[-4px]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#F6EFE9] flex items-center justify-center flex-shrink-0">
                                <img src={cardIcon1} alt="Holders Icon" className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-[10px] sm:text-[11px] font-bold text-[#9CA3AF] tracking-wider uppercase">Holders</span>
                                <h4 className="text-xl sm:text-2xl text-[#B47B59] mt-0.5 tracking-wider">12,842</h4>
                            </div>
                        </div>
                        <div className="w-20 sm:w-24">
                            <img src={sparkline1} alt="Holders Trend" className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Card 2 - Circulating Supply */}
                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-[#e6e2da] flex items-center justify-between transition-transform duration-300 hover:translate-y-[-4px]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#F6EFE9] flex items-center justify-center flex-shrink-0">
                                <img src={cardIcon2} alt="Supply Icon" className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-[10px] sm:text-[11px] font-bold text-[#9CA3AF] tracking-wider uppercase">Circulating Supply</span>
                                <h4 className="text-xl sm:text-2xl text-[#B47B59] mt-0.5 tracking-wider">250,000,000</h4>
                            </div>
                        </div>
                        <div className="w-20 sm:w-24">
                            <img src={sparkline2} alt="Supply Trend" className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Card 3 - Total Burns */}
                    <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-[#e6e2da] flex items-center justify-between transition-transform duration-300 hover:translate-y-[-4px]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#F6EFE9] flex items-center justify-center flex-shrink-0">
                                <img src={cardIcon3} alt="Burns Icon" className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-[10px] sm:text-[11px] font-bold text-[#9CA3AF] tracking-wider uppercase">Total Burns</span>
                                <h4 className="text-xl sm:text-2xl text-[#B47B59] mt-0.5 tracking-wider">12,500,000</h4>
                            </div>
                        </div>
                        <div className="w-20 sm:w-24">
                            <img src={sparkline3} alt="Burns Trend" className="w-full h-auto" />
                        </div>
                    </div>

                </div>

                {/* Main Content & Coin Grid */}
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Content Side */}
                    <div className="lg:col-span-7 flex flex-col justify-center">

                        {/* Hero Headings */}
                        <div className="flex flex-col">
                            <h2 className="text-[#B47B59] font-semibold text-[36px] sm:text-[48px] md:text-[72px] leading-none tracking-wide mb-4 sm:mb-5">
                                Ecosse Coin
                            </h2>
                            <h1 className="text-[#1E1E1E] text-[28px] sm:text-[38px] md:text-[46px] tracking-wide font-semibold">
                                Tokenized Single Malt <br />
                                Scotch Whisky. <br />
                                Powered by Maturation.
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-[#4B5563] text-base sm:text-[20px] mt-6 sm:mt-8 leading-[1.65] max-w-[560px] tracking-wide">
                            ECOSSE transforms the maturation of single malt Scotch <br className="hidden md:inline" />
                            whisky into transparent, asset-backed digital exposure <br className="hidden md:inline" />
                            through licensed bonded custody, verified cask records, <br className="hidden md:inline" />
                            and on-chain proof systems.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8 sm:mt-10">
                            <button className="bg-[linear-gradient(104.84deg,#C58E6D_0%,#8C5A3C_100%)] hover:opacity-95 text-white font-semibold px-8 py-4 rounded-xl shadow-md transition-all duration-300 text-base">
                                Explore Now
                            </button>
                            <button className="border border-[#B47B59] text-[#B47B59] hover:bg-[#F6EFE9] font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base">
                                Download Whitepaper
                            </button>
                        </div>

                        {/* Contract Address Section */}
                        <div className="bg-white border border-[#F0EAE5] rounded-[30px] p-6 max-w-xl mt-12 shadow-sm">
                            <div className="flex items-center gap-2 text-[#9CA3AF] text-[12px] font-bold tracking-wider uppercase mb-4">
                                <i className="fa-regular fa-file-lines text-[#B47B59] text-base"></i>
                                <span>Contract Address</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Address Box */}
                                <div className="flex-1 flex items-center justify-between bg-[#FAF6F3] border border-[#E5DCD6] rounded-2xl px-5 py-3.5">
                                    <span className="text-base text-[#374151] font-medium tracking-wide">{displayAddress}</span>
                                    <button
                                        onClick={handleCopy}
                                        className="text-[#B47B59] hover:opacity-80 transition-opacity relative flex items-center gap-1.5"
                                    >
                                        {copied ? (
                                            <span className="text-[11px] font-sans font-bold text-[#B47B59] bg-white border border-[#B47B59]/20 px-2 py-0.5 rounded shadow-sm">Copied!</span>
                                        ) : (
                                            <i className="fa-regular fa-copy text-xl"></i>
                                        )}
                                    </button>
                                </div>

                                {/* Etherscan Link Button */}
                                <a
                                    href={``}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 border border-[#B47B59]/40 hover:border-[#B47B59] hover:bg-[#FAF6F3] text-[#B47B59] font-semibold px-6 py-3.5 rounded-2xl transition-all duration-300 text-[15px]"
                                >
                                    <span>View on Etherscan</span>
                                    <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Coin Side */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-center items-center">
                        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] xl:w-[500px] xl:h-[500px] rounded-full aspect-square drop-shadow-[0_20px_50px_rgba(140,90,60,0.3)] transition-transform lg:-translate-x-8 xl:-translate-x-14 hover:scale-[1.03] duration-500 overflow-hidden flex items-center justify-center">
                            <video
                                src={coinVideo}
                                poster={mainCoin}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Why Maturation Matters Section */}
            <section id="about" className="about w-full bg-[#141414] text-white relative overflow-hidden">

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Top grid lines: left line | vertical stub | right line */}
                    <div className="hidden md:grid grid-cols-2">
                        <div className="border-b border-[#FDE8D5]"></div>
                        <div className="border-b border-[#FDE8D5] border-l  h-[15vh]"></div>
                    </div>

                    {/* Main Content - inside the bordered area */}
                    <div className="relative">

                        <div className="mb-6 mt-2">
                            <span className="text-[20px] sm:text-xs font-bold tracking-[0.25em] text-[#E4DDCD] uppercase">
                                Why Ecosse
                            </span>
                        </div>

                        <h2 className="text-[40px] sm:text-[48px] md:text-[80px] font-black leading-[1.1] tracking-[0.15em] text-[#D4A373] relative z-0 bg-clip-text text-transparent bg-cover bg-center"
                            style={{ backgroundImage: `url(${ecosseBg})` }}>
                            WHY MATURATION <br /> MATTERS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left Column */}
                            <div className="relative flex flex-col items-center pr-0 md:pr-8">
                                {/* Top Label */}

                                {/* Barrel - overlaps into right column and onto "MATTERS" heading */}
                                <div className="relative w-[210px] sm:w-[250px] md:w-[400px] z-10 sm:-mt-18 md:-mt-18">
                                    <img src={barrelImg} alt="Whisky Barrel" className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] object-contain" />
                                </div>
                            </div>

                            {/* Right Column - text starts from top */}
                            <div className="relative flex flex-col justify-start mt-6 md:mt-0 pt-0">
                                <div className="text-[#E4DDCD] text-[20px] font-medium tracking-[0.1em] pr-0 font-thin mb-6">
                                    <p className="mb-8">
                                        Most commodities remain static after extraction.
                                    </p>
                                    <p className="mb-8">
                                        Single malt Scotch whisky evolves.<br />
                                        As whisky matures inside oak casks, evaporation ("angel's share"), oak extraction, oxidation, and time naturally refine the spirit while reducing supply. This creates measurable scarcity and long-term appreciation potential.
                                    </p>
                                    <p>
                                        ECOSSE converts this maturation cycle into a transparent digital asset structure backed by bonded Scottish whisky casks.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom grid lines: left line | vertical stub | right line */}

                    <div className="block md:hidden border-t border-[#3A3530] h-8"></div>

                    {/* Bottom cells with center divider */}
                    <div className="hidden md:grid grid-cols-2">
                        <div className="border-t border-[#FDE8D5] border-r h-[15vh]"></div>
                        <div className="border-t border-[#FDE8D5] h-[15vh]"></div>
                    </div>

                </div>

            </section>
            {/* Tokenomics & Features Grid Section */}
            <section className="w-full bg-[#FAFAFA] py-16 md:py-24">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Top Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-[#FDE8D5] rounded-[12px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm">
                            <h3 className="text-xl sm:text-2xl font-medium text-[#1E1E1E] tracking-[0.2em] mb-2">918.82B</h3>
                            <p className="text-sm sm:text-[15px] font-thin text-[#7A7067] tracking-[0.2em]">Max token supply</p>
                        </div>
                        <div className="bg-[#FDE8D5] rounded-[12px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm">
                            <h3 className="text-xl sm:text-2xl font-medium text-[#111111] tracking-[0.2em] mb-2">1,000</h3>
                            <p className="text-sm sm:text-[15px] font-thin text-[#7A7067] tracking-[0.2em]">Casks per year</p>
                        </div>
                        <div className="bg-[#FDE8D5] rounded-[12px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm">
                            <h3 className="text-xl sm:text-2xl font-medium text-[#111111] tracking-[0.2em] mb-2">10 yr</h3>
                            <p className="text-sm sm:text-[15px] font-thin text-[#7A7067] tracking-[0.2em]">Maturation cycle</p>
                        </div>
                        <div className="bg-[#FDE8D5] rounded-[12px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm">
                            <h3 className="text-xl sm:text-2xl font-medium text-[#111111] tracking-[0.2em] mb-2">HMRC</h3>
                            <p className="text-sm sm:text-[15px] font-thin text-[#7A7067] tracking-[0.2em]">Regulated custody</p>
                        </div>
                    </div>

                    {/* Features 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Card 1 */}
                        <div className="bg-[#FDE8D5] rounded-[12px] p-8 sm:p-12 shadow-sm flex flex-col">
                            <img src={featureIcon1} alt="Maturation Icon" className="w-[60px] sm:w-[75px] h-auto mb-8 sm:mb-12" />
                            <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold text-[#111111] leading-[1.25] tracking-[0.2em] mb-6">
                                Maturation <br className="hidden sm:block" /> Appreciation
                            </h3>
                            <p className="text-[#6B625B] text-[15px] sm:text-base leading-[1.8] font-medium tracking-[0.2em]">
                                Every cask matures over a 7-year cycle, increasing rarity, complexity, and value through time, evaporation, and oak interaction.                        </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#FDE8D5] rounded-[12px] p-8 sm:p-12 shadow-sm flex flex-col">
                            <img src={featureIcon2} alt="Burn Icon" className="w-[60px] sm:w-[75px] h-auto mb-8 sm:mb-12" />
                            <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold text-[#111111] leading-[1.25] tracking-[0.2em] mb-6">
                                Asset-Linked <br className="hidden sm:block" /> Burn Mechanism
                            </h3>
                            <p className="text-[#6B625B] text-[15px] sm:text-base leading-[1.8] font-medium tracking-[0.2em]">
                                Tokens are burned as mature casks are realized and ownership transfers occur, aligning digital supply with the physical whisky portfolio.                        </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#FDE8D5] rounded-[12px] p-8 sm:p-12 shadow-sm flex flex-col">
                            <img src={featureIcon3} alt="HMRC Icon" className="w-[60px] sm:w-[75px] h-auto mb-8 sm:mb-12" />
                            <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold text-[#111111] leading-[1.25] tracking-[0.2em] mb-6">
                                HMRC Bonded <br className="hidden sm:block" /> Warehousing
                            </h3>
                            <p className="text-[#6B625B] text-[15px] sm:text-base leading-[1.8] font-medium tracking-[0.2em]">
                                All casks are stored within licensed Scottish bonded warehouses under regulated custody and audited inventory controls.                        </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#FDE8D5] rounded-[12px] p-8 sm:p-12 shadow-sm flex flex-col">
                            <img src={featureIcon4} alt="Visibility Icon" className="w-[60px] sm:w-[75px] h-auto mb-8 sm:mb-12" />
                            <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold text-[#111111] leading-[1.25] tracking-[0.2em] mb-6">
                                On-Chain <br className="hidden sm:block" /> Asset Visibility
                            </h3>
                            <p className="text-[#6B625B] text-[15px] sm:text-base leading-[1.8] font-medium tracking-[0.2em]">
                                Cask records, maturation metrics, fill levels, and inventory data are integrated into a transparent and verifiable ecosystem.                        </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Ecosse Coin Banner Section */}
            <section
                className="w-full bg-[#f9f8f6] bg-cover bg-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
                style={{ backgroundImage: `url(${topBg})` }}
            >
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative z-10">

                    {/* Left Side Coin Video */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] xl:w-[500px] xl:h-[500px] rounded-full aspect-square drop-shadow-[0_20px_50px_rgba(140,90,60,0.3)] transition-transform hover:scale-[1.03] duration-500 overflow-hidden flex items-center justify-center">
                            <video
                                src={coinVideo}
                                poster={mainCoin}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>

                    {/* Right Side Text */}
                    <div className="flex flex-col justify-center text-center md:text-left pl-0 md:pl-8">
                        <h2 className="text-[48px] sm:text-[64px] lg:text-[80px] xl:text-[96px] text-[#1E1E1E] leading-[1.2] tracking-[0.2em] uppercase">
                            ECOSSE <br />
                            COIN
                        </h2>
                    </div>

                </div>
            </section>

            {/* Tokenomics Section */}
            <section id="tokenomics" className='tokenomics w-full bg-[#FAFAFA] px-6 py-16 md:py-24 text-[#111111]'>
                <div className="max-w-screen-xl mx-auto">

                    {/* Header */}
                    <div className="mb-12 max-w-[733px]">
                        <h2 className="text-[40px] sm:text-[48px] font-black tracking-[0.2em] mb-6">Tokenomics</h2>
                        <p className="text-[#1E1E1E] text-[20px] mb-4 font-medium tracking-[0.2em] font-thin">
                            This model combines realization of gains from mature casks with systematic reinvestment into early-stage casks, enabling portfolio compounding through both asset appreciation and ecosystem expansion.                        </p>
                        <p className="text-[#1E1E1E] text-[20px] font-medium tracking-[0.2em] font-thin">
                            All whisky assets are secured within licensed Scottish bonded warehouses.
                        </p>
                    </div>

                    {/* Small 3 Cards Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div className="bg-[#FDE8D5] rounded-[16px] p-4 flex items-center gap-4 shadow-sm">
                            <div className="p-1 bg-[#1E1E1E] w-10 h-10 flex items-center justify-center rounded-[8px]">
                                <img
                                    src={tokIcon}
                                    alt="Calculator"
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-[10px] text-[#9CA3AF] tracking-[0.1em]">Holders</span>
                                <h4 className="text-lg font-bold">18,742</h4>
                            </div>
                        </div>
                        <div className="bg-[#FDE8D5] rounded-[16px] p-4 flex items-center gap-4 shadow-sm">
                            <div className="p-1 bg-[#1E1E1E] w-10 h-10 flex items-center justify-center rounded-[8px]">
                                <img
                                    src={tokIcon1}
                                    alt="Calculator"
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-[10px] text-[#9CA3AF] tracking-[0.1em]">Circulating</span>
                                <h4 className="text-lg font-bold">390.00M</h4>
                            </div>
                        </div>
                        <div className="bg-[#FDE8D5] rounded-[16px] p-4 flex items-center gap-4 shadow-sm">
                            <div className="p-1 bg-[#1E1E1E] w-10 h-10 flex items-center justify-center rounded-[8px]">
                                <img
                                    src={tokIcon2}
                                    alt="Calculator"
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-[10px] text-[#9CA3AF] tracking-[0.1em]">Burns</span>
                                <h4 className="text-lg font-bold">10.30M</h4>
                            </div>
                        </div>
                    </div>

                    {/* 4 Cards Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
                        <div className="bg-[#FDE8D5] rounded-[16px] px-2 py-6 text-center shadow-sm flex flex-col items-center justify-center">
                            <h3 className="text-[22px] sm:text-[26px] xl:text-[30px] font-semibold mb-1 tracking-[0.1em] sm:tracking-[0.15em] xl:tracking-[0.2em]">
                                918.82B</h3>
                            <p className="text-[14px] sm:text-[16px] xl:text-[20px] text-[#595959] font-medium tracking-[0.1em]">Maximum Supply</p>
                        </div>
                        <div className="bg-[#FDE8D5] rounded-[16px] px-2 py-6 text-center shadow-sm flex flex-col items-center justify-center">
                            <h3 className="text-[22px] sm:text-[26px] xl:text-[30px] font-semibold mb-1 tracking-[0.1em] sm:tracking-[0.15em] xl:tracking-[0.2em]">1000</h3>
                            <p className="text-[14px] sm:text-[16px] xl:text-[20px] text-[#595959] font-medium tracking-[0.1em]">Initial Annual Casks</p>
                        </div>
                        <div className="bg-[#FDE8D5] rounded-[16px] px-2 py-6 text-center shadow-sm flex flex-col items-center justify-center">
                            <h3 className="text-[22px] sm:text-[26px] xl:text-[30px] font-semibold mb-1 tracking-[0.1em] sm:tracking-[0.15em] xl:tracking-[0.2em]">131.26M</h3>
                            <p className="text-[14px] sm:text-[16px] xl:text-[20px] text-[#595959] font-medium tracking-[0.1em]">Tokens per cask</p>
                        </div>
                        <div className="bg-[#FDE8D5] rounded-[16px] px-2 py-6 text-center shadow-sm flex flex-col items-center justify-center">
                            <h3 className="text-[22px] sm:text-[26px] xl:text-[30px] font-semibold mb-1 tracking-[0.1em] sm:tracking-[0.15em] xl:tracking-[0.2em]">Bonded Custody</h3>
                            <p className="text-[14px] sm:text-[16px] xl:text-[20px] text-[#595959] font-medium tracking-[0.1em]">HMRC</p>
                        </div>
                    </div>

                    {/* Huge Chart Card */}
                    <div className="bg-[#FDE8D5] rounded-[24px] p-8 mb-4 shadow-sm">
                        <div className="mb-10">
                            <span className="text-[13px] text-[#1E1E1E] tracking-[0.2em]">Total Supply</span>
                            <h3 className="text-3xl md:text-4xl font-black tracking-[0.05em] mt-1">1,000,000,000</h3>
                            <span className="text-[10px] text-[#9CA3AF] font-semibold uppercase tracking-[0.1em] block mt-2">Ecosse Coin</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Chart Image */}
                            <div className="flex justify-center">
                                <img src={pieChart} alt="Tokenomics Pie Chart" className="w-full max-w-[400px] h-auto mix-blend-multiply" />
                            </div>

                            {/* Allocations Table */}
                            <div>
                                <h4 className="text-[18px] text-[#1E1E1E] uppercase tracking-[0.2em] mb-6">Allocation</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm md:text-[15px]">
                                        <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#B88B6F]"></span><span className="font-medium text-[#111111] text-[18px]">Public Sale</span></div>
                                        <div className="flex items-center gap-6"><span className="text-[#1E1E1E] font-medium hidden sm:block text-[18px] tracking-[0.02em]">358,339,800,000 Tokens</span><span className="font-bold text-[#111111] w-12 text-right text-[18px]">(39%)</span></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm md:text-[15px]">
                                        <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#D4A386]"></span><span className="font-medium text-[#111111] text-[18px]">Private Investors</span></div>
                                        <div className="flex items-center gap-6"><span className="text-[#1E1E1E] font-medium hidden sm:block text-[18px] tracking-[0.02em]">183,764,000,000 Tokens</span><span className="font-bold text-[#111111] w-12 text-right text-[18px]">(20%)</span></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm md:text-[15px]">
                                        <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#8E6248]"></span><span className="font-medium text-[#111111] text-[18px]">Treasury</span></div>
                                        <div className="flex items-center gap-6"><span className="text-[#1E1E1E] font-medium hidden sm:block text-[18px] tracking-[0.02em]">91,882,000,000 Tokens</span><span className="font-bold text-[#111111] w-12 text-right text-[18px]">(10%)</span></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm md:text-[15px]">
                                        <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#5D4037]"></span><span className="font-medium text-[#111111] text-[18px]">Team</span></div>
                                        <div className="flex items-center gap-6"><span className="text-[#1E1E1E] font-medium hidden sm:block text-[18px] tracking-[0.02em]">91,882,000,000 Tokens</span><span className="font-bold text-[#111111] w-12 text-right text-[18px]">(10%)</span></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm md:text-[15px]">
                                        <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#4A4A4A]"></span><span className="font-medium text-[#111111] text-[18px]">Liquidity</span></div>
                                        <div className="flex items-center gap-6"><span className="text-[#1E1E1E] font-medium hidden sm:block text-[18px] tracking-[0.02em]">91,882,000,000 Tokens</span><span className="font-bold text-[#111111] w-12 text-right text-[18px]">(10%)</span></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm md:text-[15px]">
                                        <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#5E5E5E]"></span><span className="font-medium text-[#111111] text-[18px]">Ecosystem Growth</span></div>
                                        <div className="flex items-center gap-6"><span className="text-[#1E1E1E] font-medium hidden sm:block text-[18px] tracking-[0.02em]">45,941,000,000 Tokens</span><span className="font-bold text-[#111111] w-12 text-right text-[18px]">(5%)</span></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm md:text-[15px]">
                                        <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#868686]"></span><span className="font-medium text-[#111111] text-[18px]">Advisors</span></div>
                                        <div className="flex items-center gap-6"><span className="text-[#1E1E1E] font-medium hidden sm:block text-[18px] tracking-[0.02em]">27,564,600,000 Tokens</span><span className="font-bold text-[#111111] w-12 text-right text-[18px]">(3%)</span></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm md:text-[15px]">
                                        <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#AEAEAE]"></span><span className="font-medium text-[#111111] text-[18px]">Marketing</span></div>
                                        <div className="flex items-center gap-6"><span className="text-[#1E1E1E] font-medium hidden sm:block text-[18px] tracking-[0.02em]">18,376,400,000 Tokens</span><span className="font-bold text-[#111111] w-12 text-right text-[18px]">(2%)</span></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm md:text-[15px]">
                                        <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#CCCCCC]"></span><span className="font-medium text-[#111111] text-[18px]">Burn Reserve Wallet</span></div>
                                        <div className="flex items-center gap-6"><span className="text-[#1E1E1E] font-medium hidden sm:block text-[18px] tracking-[0.02em]">9,188,200,000 Tokens</span><span className="font-bold text-[#111111] w-12 text-right text-[18px]">(1%)</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Issuance ratios */}
                    <div className="bg-[#FDE8D5] rounded-[24px] p-8 mb-4 shadow-sm">
                        <div className="mb-10 flex flex-col items-start gap-4">
                            <div className="p-1 bg-[#1E1E1E] w-14 h-14 flex items-center justify-center rounded-[14px]">
                                <img
                                    src={tokIcon4}
                                    alt="Calculator"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h3 className="text-[32px] font-black tracking-[0.2em] text-[#1E1E1E]">Issuance ratios</h3>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center justify-between text-sm md:text-[15px]">
                                <div className="w-24 md:w-40 text-[#595959] text-[20px] tracking-[0.2em]">1 LPA</div>
                                <div className="flex-1 mx-4 md:mx-8 h-2.5 bg-[#EBD8C8] rounded-full overflow-hidden flex h-[16px]">
                                    <div className="h-full bg-[#1A1A1A] w-[15%]"></div>
                                </div>
                                <div className="w-32 md:w-40 text-right text-[#595959] font-medium tracking-[0.2em]">1M tokens</div>
                            </div>

                            <div className="flex items-center justify-between text-sm md:text-[15px]">
                                <div className="w-24 md:w-40 text-[#595959] text-[20px] tracking-[0.2em]">Per cask (exit)</div>
                                <div className="flex-1 mx-4 md:mx-8 h-2.5 bg-[#EBD8C8] rounded-full overflow-hidden flex h-[16px]">
                                    <div className="h-full bg-[#1A1A1A] w-[35%]"></div>
                                </div>
                                <div className="w-32 md:w-40 text-right text-[#595959] font-medium tracking-[0.2em]">131.26M tokens</div>
                            </div>

                            <div className="flex items-center justify-between text-sm md:text-[15px]">
                                <div className="w-24 md:w-40 text-[#595959] text-[20px] tracking-[0.2em]">1,000-cask<br />batch</div>
                                <div className="flex-1 mx-4 md:mx-8 h-2.5 bg-[#EBD8C8] rounded-full overflow-hidden flex h-[16px]">
                                    <div className="h-full bg-[#1A1A1A] w-[65%]"></div>
                                </div>
                                <div className="w-32 md:w-40 text-right text-[#595959] font-medium tracking-[0.2em]">131.26B tokens</div>
                            </div>

                            <div className="flex items-center justify-between text-sm md:text-[15px]">
                                <div className="w-24 md:w-40 text-[#595959] text-[20px] tracking-[0.2em]">Full cycle<br />(7,000)</div>
                                <div className="flex-1 mx-4 md:mx-8 h-2.5 bg-[#EBD8C8] rounded-full overflow-hidden flex h-[16px]">
                                    <div className="h-full bg-[#1A1A1A] w-[100%]"></div>
                                </div>
                                <div className="w-32 md:w-40 text-right text-[#595959] font-medium tracking-[0.2em]">918.82B tokens</div>
                            </div>
                        </div>
                    </div>

                    {/* Mint & burn mechanism */}
                    <div className="bg-[#FDE8D5] rounded-[24px] p-8 shadow-sm">
                        <div className="mb-10 flex flex-col items-start gap-6">
                            <div className="p-1 bg-[#1E1E1E] w-14 h-14 flex items-center justify-center rounded-[14px]">
                                <img
                                    src={tokIcon3}
                                    alt="Fire"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h3 className="text-[32px] font-black tracking-[0.2em] text-[#1E1E1E]">Mint & burn mechanism</h3>
                            <p className="text-[22px] text-[#595959] font-medium tracking-[0.2em]">
                                Tokens are minted only when new casks enter bonded storage and burned when casks are transferred to end buyers — no discretionary issuance ever.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mt-8 w-full">
                            <div className="bg-[#FEF5F0] rounded-[14px] py-5 px-6 flex-1 text-center font-bold w-full md:w-auto shadow-sm">
                                <div className="text-[18px] text-[#1E1E1E] mb-1 tracking-[0.2em]">New cask</div>
                                <div className="text-[16px] text-[#595959] font-medium tracking-[0.2em]">Age 3</div>
                            </div>
                            <div className="hidden md:block px-2"><i className="fa-solid fa-arrow-right"></i></div>
                            <div className="md:hidden text-gray-400 py-1"><i className="fa-solid fa-arrow-down"></i></div>

                            <div className="bg-[#1E1E1E] text-white rounded-[14px] py-5 px-6 flex-1 text-center font-bold w-full md:w-auto shadow-sm">
                                <div className="text-[18px] mb-1 tracking-[0.2em] text-[#E4DDCD]">Mint</div>
                                <div className="text-[16px] text-[#E4DDCD] font-medium tracking-[0.2em]">+131.26M</div>
                            </div>
                            <div className="hidden md:block px-2"><i className="fa-solid fa-arrow-right"></i></div>
                            <div className="md:hidden text-gray-400 py-1"><i className="fa-solid fa-arrow-down"></i></div>

                            <div className="bg-[#FEF5F0] rounded-[14px] py-5 px-6 flex-1 text-center font-bold w-full md:w-auto shadow-sm">
                                <div className="text-[18px] text-[#111111] mb-1 tracking-[0.2em]">Mature</div>
                                <div className="text-[16px] text-[#595959] font-medium tracking-[0.2em]">Age 3</div>
                            </div>
                            <div className="hidden md:block px-2"><i className="fa-solid fa-arrow-right"></i></div>
                            <div className="md:hidden text-gray-400 py-1"><i className="fa-solid fa-arrow-down"></i></div>

                            <div className="bg-[#1E1E1E] text-white rounded-[14px] py-5 px-6 flex-1 text-center font-bold w-full md:w-auto shadow-sm">
                                <div className="text-[18px] mb-1 tracking-[0.2em] text-[#E4DDCD]">Burn</div>
                                <div className="text-[16px] text-[#E4DDCD] font-medium tracking-[0.2em]">-131.26M</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id="roadmap" className="roadmap bg-black text-white w-full relative overflow-hidden">
                {/* Top header block - Separate background color is plain black */}
                <div className="bg-black p-12 sm:p-16 md:p-20 p-6 sm:p-8 md:p-10">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black leading-tight tracking-[0.1em] mb-3 md:mb-4 bg-clip-text text-transparent bg-cover bg-center"
                            style={{ backgroundImage: `url(${ecosseBg})` }}>
                            Token Lifecycle
                        </h2>
                        <p className="text-[#E4DDCD] text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed tracking-[0.1em] sm:tracking-[0.2em] font-medium font-thin">
                            How the rolling inventory model works
                        </p>
                    </div>
                </div>

                {/* Main Content Section - Background with token-cycle.svg pattern */}
                <div className="bg-black py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
                    {/* Subtle background pattern overlay */}
                    <div className="absolute inset-0 z-0 opacity-15"
                        style={{ backgroundImage: `url(${tokenCycleBg})`, backgroundPosition: 'center', backgroundRepeat: 'repeat' }}></div>
                    <div className="max-w-screen-xl mx-auto px-4 relative z-10">

                        {/* Timeline Container */}
                        <div className="relative w-full">

                            {/* Phase 1 */}
                            <div className="relative pl-12 sm:pl-14 md:pl-16 mb-12 sm:mb-16 md:mb-24">
                                {/* Sphere */}
                                <div className="absolute left-0 top-1 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center z-10">
                                    <img src={ellipse1} alt="Sphere" className="w-full h-full object-contain" />
                                </div>

                                {/* Connecting bar to Phase 2 */}
                                <div className="absolute left-[10px] sm:left-[12px] md:left-[15px] top-[32px] sm:top-[36px] md:top-[44px] bottom-[-48px] sm:bottom-[-64px] md:bottom-[-96px] w-[8px] sm:w-[9px] md:w-[10px] z-0">
                                    <img src={rectangle2} alt="Connecting Line" className="w-full h-full object-fill" />
                                </div>

                                <div className="mb-3 md:mb-4">
                                    <img src={phase1} alt="Phase 1" className="h-8 sm:h-9 md:h-10 w-auto object-contain" />
                                </div>

                                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-[#E4DDCD] mb-2 md:mb-3">
                                    Accumulation
                                </h3>

                                <p className="text-[#E4DDCD] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-[1.6] sm:leading-[1.8] tracking-[0.03em] md:tracking-[0.2em] font-medium font-thin">
                                    ECOSSE acquires and matures bonded 3-year-old single malt Scotch casks while building the foundational asset base.
                                </p>
                            </div>

                            {/* Phase 2 */}
                            <div className="relative pl-12 sm:pl-14 md:pl-16 mb-12 sm:mb-16 md:mb-24">
                                {/* Sphere */}
                                <div className="absolute left-0 top-1 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center z-10">
                                    <img src={ellipse1} alt="Sphere" className="w-full h-full object-contain" />
                                </div>

                                {/* Connecting bar to Phase 3 */}
                                <div className="absolute left-[10px] sm:left-[12px] md:left-[15px] top-[32px] sm:top-[36px] md:top-[44px] bottom-[-48px] sm:bottom-[-64px] md:bottom-[-96px] w-[8px] sm:w-[9px] md:w-[10px] z-0">
                                    <img src={rectangle2} alt="Connecting Line" className="w-full h-full object-fill" />
                                </div>

                                <div className="mb-3 md:mb-4">
                                    <img src={phase2} alt="Phase 2" className="h-8 sm:h-9 md:h-10 w-auto object-contain" />
                                </div>

                                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-[#E4DDCD] mb-2 md:mb-3">
                                    Maturation
                                </h3>

                                <p className="text-[#E4DDCD] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-[1.6] sm:leading-[1.8] tracking-[0.03em] md:tracking-[0.2em] font-medium font-thin">
                                    Over the 7-year maturation cycle, scarcity increases naturally through evaporation and aging while whisky quality and market valuation strengthen.
                                </p>
                            </div>

                            {/* Phase 3 */}
                            <div className="relative pl-12 sm:pl-14 md:pl-16">
                                {/* Sphere */}
                                <div className="absolute left-0 top-1 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center z-10">
                                    <img src={ellipse1} alt="Sphere" className="w-full h-full object-contain" />
                                </div>

                                <div className="mb-3 md:mb-4">
                                    <img src={phase3} alt="Phase 3" className="h-8 sm:h-9 md:h-10 w-auto object-contain" />
                                </div>

                                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-[#E4DDCD] mb-2 md:mb-3">
                                    Rolling Asset Cycle
                                </h3>

                                <p className="text-[#E4DDCD] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-[1.6] sm:leading-[1.8] tracking-[0.03em] md:tracking-[0.2em] font-medium font-thin">
                                    The sale of matured casks provides liquidity, with proceeds systematically reinvested into younger casks at attractive entry valuations, continuously expanding the cask ecosystem.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="why-trust-ecosse w-full bg-[#F5F0EB] py-16 sm:py-20 md:py-28 relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="mb-10 sm:mb-14 md:mb-16">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-black leading-tight tracking-[0.2em] text-[#1E1E1E] mb-3 md:mb-4">
                            Why trust<br />Ecosse Coin
                        </h2>
                        <p className="text-[#1E1E1E] text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed tracking-[0.2em] font-medium">
                            Regulatory, legal, and operational <br />assurances
                        </p>
                    </div>

                    {/* 2x2 Card Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-3">

                        {/* Card 1 - HMRC-Regulated Bonded Custody */}
                        <div className="bg-[#FDE8D5] rounded-2xl p-6 sm:p-8 md:p-10">
                            <div className="p-1 bg-[#1E1E1E] w-14 h-14 flex items-center justify-center rounded-[14px]">
                                <img
                                    src={trustIcon1}
                                    alt="Calculator"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold tracking-[0.1em] text-[#1E1E1E] my-4 md:my-8">
                                HMRC-Regulated Bonded Custody
                            </h3>
                            <p className="text-[#595959] text-[14px] sm:text-[15px] md:text-[20px] leading-[1.7] tracking-[0.2em] font-medium ">
                                All whisky casks are stored within licensed Scottish bonded warehouses operating under HMRC regulatory oversight.
                            </p>
                        </div>

                        {/* Card 2 - Insolvency-Remote Structure */}
                        <div className="bg-[#FDE8D5] rounded-2xl p-6 sm:p-8 md:p-10">
                            <div className="p-1 bg-[#1E1E1E] w-14 h-14 flex items-center justify-center rounded-[14px]">
                                <img
                                    src={trustIcon2}
                                    alt="Calculator"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold tracking-[0.1em] text-[#1E1E1E] my-4 md:my-8">
                                Insolvency-Remote Structure
                            </h3>
                            <p className="text-[#595959] text-[14px] sm:text-[15px] md:text-[20px] leading-[1.7] tracking-[0.2em] font-medium">
                                The underlying whisky assets remain segregated from operational accounts within protected bonded custody frameworks.
                            </p>
                        </div>

                        {/* Card 3 - Real-Time Whisky Analytics */}
                        <div className="bg-[#FDE8D5] rounded-2xl p-6 sm:p-8 md:p-10">
                            <div className="p-1 bg-[#1E1E1E] w-14 h-14 flex items-center justify-center rounded-[14px]">
                                <img
                                    src={trustIcon3}
                                    alt="Calculator"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold tracking-[0.1em] text-[#1E1E1E] my-4 md:my-8">
                                Real-Time Whisky <br /> Analytics
                            </h3>
                            <p className="text-[#595959] text-[14px] sm:text-[15px] md:text-[20px] leading-[1.7] tracking-[0.2em] font-medium">
                                Integrated monitoring systems track fill levels, ABV, evaporation loss, and cask maturation metrics.
                            </p>
                        </div>

                        {/* Card 4 - Incentive Alignment */}
                        <div className="bg-[#FDE8D5] rounded-2xl p-6 sm:p-8 md:p-10">
                            <div className="p-1 bg-[#1E1E1E] w-14 h-14 flex items-center justify-center rounded-[14px]">
                                <img
                                    src={trustIcon4}
                                    alt="Calculator"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold tracking-[0.1em] text-[#1E1E1E] my-4 md:my-8">
                                Incentive <br /> Alignment
                            </h3>
                            <p className="text-[#595959] text-[14px] sm:text-[15px] md:text-[20px] leading-[1.7] tracking-[0.2em] font-medium">
                                Warehouse operators, custodians, and ecosystem participants are aligned around long-term asset stewardship and maturation performance.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <section id="teams" className="teams w-full bg-[#141414] relative overflow-hidden py-12 sm:py-16 lg:py-20">

                {/* Top-left decorative ornament */}
                <img src={vectorDecor} alt="" className="absolute top-8 left-8 w-20 sm:w-24 md:w-32 opacity-80" />

                {/* Bottom-left decorative ornament */}
                <img src={vectorDecor} alt="" className="absolute bottom-8 left-8 w-20 sm:w-24 md:w-32 opacity-80 -scale-y-100" />

                <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                        {/* Left Side - Heading & Description */}
                        <div className="lg:col-span-5 mt-8 lg:mt-0">
                            <div className="mb-2 lg:mb-4 font-black leading-tight">
                                <div className="inline-block relative mb-3 sm:mb-4">
                                    <span className="block text-[36px] sm:text-[45px] md:text-[100px] tracking-[0.1em] bg-clip-text text-transparent bg-cover bg-center pb-1"
                                        style={{ backgroundImage: `url(${ecosseBg})` }}>
                                        Our
                                    </span>
                                </div>
                                <br />
                                <div className="inline-block relative">
                                    <span className="block text-[42px] sm:text-[55px] md:text-[100px] tracking-[0.1em] uppercase bg-clip-text text-transparent bg-cover bg-center pb-1"
                                        style={{ backgroundImage: `url(${ecosseBg})` }}>
                                        PEOPLE
                                    </span>
                                </div>
                            </div>
                            <p className="text-[#E4DDCD] text-[13px] sm:text-[14px] md:text-[20px] tracking-[0.1em] font-medium font-thin">
                                Ten-year casks have been realized, tokens have been burned, and new casks are continuously minted. We are perpetually adding new cycles. As the net asset value (NAV) grows, the token value increases without any inflation in supply.
                            </p>
                        </div>

                        {/* Right Side - Staggered Photo Grid matching Figma exactly */}
                        <div className="lg:col-span-7 relative w-full aspect-[4/5] max-w-[580px] mx-auto">

                            {/* ROW 1: Person 1 (top-center-left) + Knot + Person 2 (top-right) */}
                            {/* Person 1 - spiky hair guy, top */}
                            <div
                                className="absolute top-[-4%] left-[20%] w-[31%] rotate-[6deg] hover:rotate-0 transition-transform duration-700 ease-in-out z-10 group cursor-pointer"
                                onClick={() => setSelectedMember(teamMembers.rose_foster)}
                            >
                                {/* Top Outside Content */}
                                <div className="absolute -top-[40px] left-[45%] -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-5 transition-all duration-700 ease-in-out z-20">
                                    <h3 className="text-[#FDE8D5] text-[14px] md:text-[18px] tracking-[0.2em] whitespace-nowrap">
                                        Rose Foster
                                    </h3>
                                    <p className="text-[#FDE8D5] text-[12px] md:text-[14px] tracking-[0.1em] mt-1 whitespace-nowrap">
                                        Co-Founder / CFO
                                    </p>
                                </div>
                                {/* Image */}
                                <img
                                    src={people1}
                                    alt="Team Member"
                                    className="w-full h-auto object-cover rounded-lg sm:rounded-xl transition-all duration-700 ease-in-out group-hover:translate-y-10"
                                />
                            </div>

                            {/* Vector Knot - between person 1 and 2 */}
                            <img src={vectorKnot} alt="" className="absolute top-[8%] left-[50%] opacity-90 " />

                            {/* Person 2 - long hair, red tie, top-right */}
                            <div
                                className="absolute top-[7%] left-[68%] w-[31%] rotate-[6deg] hover:rotate-0 transition-transform duration-700 ease-in-out z-10 group cursor-pointer"
                                onClick={() => setSelectedMember(teamMembers.dean_thomson)}
                            >
                                <div className="absolute -top-[40px] left-[50%] -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-5 transition-all duration-700 ease-in-out z-20">
                                    <h3 className="text-[#FDE8D5] text-[14px] md:text-[18px] tracking-[0.2em] whitespace-nowrap">
                                        Dean Thomson
                                    </h3>
                                    <p className="text-[#FDE8D5] text-[12px] md:text-[14px] tracking-[0.1em] mt-1 whitespace-nowrap">
                                        Operations Director <br /> / Warehouse Manager
                                    </p>
                                </div>
                                <img src={people2} alt="Team Member" className="w-full h-auto object-cover rounded-lg sm:rounded-xl transition-all duration-700 ease-in-out group-hover:translate-y-10 mt-2" />
                            </div>

                            {/* ROW 2: Star + Person 3 (center) + Star2 */}
                            {/* Vector Star - left side */}
                            <img src={vectorStar} alt="" className="absolute top-[25%] left-[12%] opacity-90 z-[100]" />

                            {/* Person 3 - bald in blue jacket, CENTER */}
                            <div
                                className="absolute top-[25%] left-[40%] w-[31%] rotate-[6deg] hover:rotate-0 transition-transform duration-700 ease-in-out z-20 group cursor-pointer"
                                onClick={() => setSelectedMember(teamMembers.rose_blease)}
                            >
                                <div className="absolute -top-[40px] left-[45%] -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-5 transition-all duration-700 ease-in-out z-20">
                                    <h3 className="text-[#FDE8D5] text-[14px] md:text-[18px] tracking-[0.2em] whitespace-nowrap">
                                        Rose Blease
                                    </h3>
                                    <p className="text-[#FDE8D5] text-[12px] md:text-[14px] tracking-[0.1em] mt-1 whitespace-nowrap">
                                        expansion / site <br />delivery manager
                                    </p>
                                </div>
                                <img src={people5} alt="Team Member" className="w-full h-auto object-cover rounded-lg sm:rounded-xl transition-all duration-700 ease-in-out group-hover:translate-y-10 mt-2" />
                            </div>

                            {/* Vector Star 2 - 8-point star, right of center */}
                            <img src={vectorStar2} alt="" className="absolute top-[37%] left-[70%] opacity-90 z-[100]" />

                            {/* ROW 3: Person 5 (left) + Person 4 (right) */}
                            {/* Person 5 - bald mustache guy, left */}
                            <div
                                className="absolute top-[40%] left-[5%] w-[31%] rotate-[6deg] hover:rotate-0 transition-transform duration-700 ease-in-out z-30 group cursor-pointer"
                                onClick={() => setSelectedMember(teamMembers.mark_stenhouse)}
                            >
                                <div className="absolute -top-[40px] left-[55%] -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-5 transition-all duration-700 ease-in-out z-20">
                                    <h3 className="text-[#FDE8D5] text-[14px] md:text-[18px] tracking-[0.2em] whitespace-nowrap">
                                        Mark Stenhouse
                                    </h3>
                                    <p className="text-[#FDE8D5] text-[12px] md:text-[14px] tracking-[0.1em] mt-1 whitespace-nowrap">
                                        Finance Director
                                    </p>
                                </div>
                                <img src={people4} alt="Team Member" className="w-full h-auto object-cover rounded-lg sm:rounded-xl transition-all duration-700 ease-in-out group-hover:translate-y-10" />
                            </div>

                            {/* Person 4 - slim gray suit guy, right */}
                            <div
                                className="absolute top-[52%] left-[55%] w-[31%] rotate-[6deg] hover:rotate-0 transition-transform duration-700 ease-in-out z-30 group cursor-pointer"
                                onClick={() => setSelectedMember(teamMembers.charles_mcgregor)}
                            >
                                <div className="absolute -top-[40px] left-[48%] -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-5 transition-all duration-700 ease-in-out z-20">
                                    <h3 className="text-[#FDE8D5] text-[14px] md:text-[18px] tracking-[0.12em] whitespace-nowrap">
                                        Charles <br />McGregor
                                    </h3>
                                    <p className="text-[#FDE8D5] text-[12px] md:text-[14px] tracking-[0.15em] mt-1 whitespace-nowrap">
                                        Techinical Manager
                                    </p>
                                </div>
                                <img src={people3} alt="Team Member" className="w-full h-auto object-cover rounded-lg sm:rounded-xl transition-all duration-700 ease-in-out group-hover:translate-y-10 mt-6" />
                            </div>

                            {/* ROW 4: Person 1 duplicate (bottom-left-center) + Ornament (bottom-right) */}
                            {/* Person 1 duplicate - bottom */}
                            <div
                                className="absolute top-[70%] left-[23%] w-[31%] rotate-[6deg] hover:rotate-0 transition-transform duration-700 ease-in-out z-40 group cursor-pointer"
                                onClick={() => setSelectedMember(teamMembers.bek_massie)}
                            >
                                <div className="absolute -top-[40px] left-[58%] -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-5 transition-all duration-700 ease-in-out z-20">
                                    <h3 className="text-[#FDE8D5] text-[14px] md:text-[18px] tracking-[0.2em] whitespace-nowrap">
                                        Rebekah Massie
                                    </h3>
                                    <p className="text-[#FDE8D5] text-[12px] md:text-[14px] tracking-[0.1em] mt-1 whitespace-nowrap">
                                        Office Manager
                                    </p>
                                </div>
                                <img src={people6} alt="Team Member" className="w-full h-auto object-cover rounded-lg sm:rounded-xl transition-all duration-700 ease-in-out group-hover:translate-y-10" />
                            </div>

                            {/* Vector Ornament - bottom right */}
                            <img src={vectorOrnament} alt="" className="absolute bottom-[5%] right-0 opacity-80 z-[100]" />

                        </div>

                    </div>
                </div>
            </section>

            <section className="foster-whisky w-full py-16 sm:py-20 md:py-28 relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* 3x3 Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                            hoverImg1, hoverImg2, hoverImg3,
                            hoverImg4, hoverImg5, hoverImg6,
                            hoverImg7, hoverImg8, hoverImg9
                        ].map((img, index) => (
                            <div
                                key={index}
                                className="group relative rounded-xl overflow-hidden cursor-pointer"
                            >
                                {/* Image with zoom-in on hover */}
                                <img
                                    src={img}
                                    alt={`Foster Whisky ${index + 1}`}
                                    className="w-full transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Dark overlay that appears on hover */}
                                <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-md bg-black/0 transition-all duration-500 flex items-center justify-center">

                                    {/* Centered Text */}
                                    <span className="text-center text-[#FFFFFF] text-[18px] sm:text-[22px] md:text-[40px] font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
                                        Foster <br />
                                        Whisky
                                    </span>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section id="faq" className="faqs w-full py-16 sm:py-20 md:py-28 relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="mb-10 sm:mb-14 md:mb-16 px-[100px]">
                        <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-black leading-tight tracking-[0.12em] text-[#1E1E1E] mb-3 md:mb-4">
                            FAQs
                        </h2>
                        <p className="text-[#1E1E1E] text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed tracking-[0.2em] font-regular">
                            Common questions, clearly answered.
                        </p>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4 mb-16 md:mb-20 px-[100px]">
                        {[
                            {
                                q: 'What makes ECOSSE different from gold or other commodities?',
                                a: 'Most commodities do not improve with age. Single malt Scotch whisky matures over time, becoming increasingly scarce and potentially more valuable as quality develops and evaporation reduces available supply.'
                            },
                            {
                                q: 'How does ECOSSE generate long-term value?',
                                a: 'ECOSSE captures the economic effects of whisky maturation through regulated custody, fixed-supply token mechanics, and systematic reinvestment into younger casks.'
                            },
                            {
                                q: 'Why is the 7-year maturation cycle important?',
                                a: 'The maturation period allows whisky to develop increased rarity, complexity, and market value while supporting the ecosystem’s rolling reinvestment model.'
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl border transition-all duration-300 ${openFaq === index
                                    ? 'bg-[#FDE8D5] border-[#FDE8D5]'
                                    : 'bg-white border-[#FDE8D5]'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left cursor-pointer"
                                >
                                    <span className={`text-[15px] sm:text-[17px] md:text-[18px] tracking-[0.1em] ${openFaq === index ? 'text-[#181818]' : 'text-[#333333]'
                                        }`}>
                                        {faq.q}
                                    </span>
                                    <svg
                                        className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-[#0B0B0B] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="px-6 sm:px-8 pb-5 sm:pb-6 text-[#0B0B0B] text-[14px] sm:text-[15px] md:text-[18px] leading-[1.7] tracking-[0.1em] font-regular">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Bottom Image */}
                    <div className="w-full rounded-2xl overflow-hidden mb-6">
                        <img src={faqsImg} alt="Whisky Barrel Warehouse" className="w-full h-auto object-cover" />
                    </div>

                    {/* Social Icons Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        <a href="" className="bg-[#111111] rounded-full py-4 flex items-center justify-center hover:bg-[#222222] transition-colors duration-300">
                            <img src={socialIcon1} alt="X (Twitter)" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="" className="bg-[#111111] rounded-full py-4 flex items-center justify-center hover:bg-[#222222] transition-colors duration-300">
                            <img src={socialIcon2} alt="Discord" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="" className="bg-[#111111] rounded-full py-4 flex items-center justify-center hover:bg-[#222222] transition-colors duration-300">
                            <img src={socialIcon3} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="" className="bg-[#111111] rounded-full py-4 flex items-center justify-center hover:bg-[#222222] transition-colors duration-300">
                            <img src={socialIcon4} alt="Telegram" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                    </div>

                </div>
            </section>

            {selectedMember && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fade-in"
                    onClick={() => setSelectedMember(null)}
                >
                    {/* Modal Content container */}
                    <div
                        className="relative w-full max-w-lg bg-[#1A1A1A] border border-[#2D2D2D] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden text-white flex flex-col transform transition-all duration-300 scale-100 animate-scale-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button overlaying top right of the image */}
                        <button
                            className="absolute top-4 right-4 text-white hover:text-white transition-all cursor-pointer bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 rounded-full z-20 border border-white/10"
                            onClick={() => setSelectedMember(null)}
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Top: Image */}
                        <div className="w-full relative overflow-hidden flex justify-center items-center">
                            <img
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                className="w-full max-w-[250px] h-auto object-cover m-4"
                            />
                        </div>

                        {/* Bottom: Name, Role, Bio */}
                        <div className="w-full px-4 md:px-6 flex flex-col">
                            <div className="mb-2 text-center">
                                <h3 className="text-2xl md:text-3xl font-black tracking-wider text-[#FDE8D5] mt-1 uppercase">
                                    {selectedMember.name}
                                </h3>
                                <span
                                    className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] bg-clip-text text-transparent bg-cover bg-center"
                                    style={{ backgroundImage: `url(${ecosseBg})` }}
                                >
                                    {selectedMember.role}
                                </span>

                            </div>

                            <p className="text-center text-[#E4DDCD] text-sm leading-relaxed tracking-wider font-light mt-2">
                                {selectedMember.bio}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LandingHero;
