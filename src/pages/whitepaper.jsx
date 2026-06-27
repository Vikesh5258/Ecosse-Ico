import { useState, useEffect } from 'react';
import LandingHeader from '../components/landing-page/landing-header';
import LandingFooter from '../components/landing-page/landing-footer';

import page1 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0001.jpg';
import page2 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0002.jpg';
import page3 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0003.jpg';
import page4 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0004.jpg';
import page5 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0005.jpg';
import page6 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0006.jpg';
import page7 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0007.jpg';
import page8 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0008.jpg';
import page9 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0009.jpg';
import page10 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0010.jpg';
import page11 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0011.jpg';
import page12 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0012.jpg';
import page13 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0013.jpg';
import page14 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0014.jpg';
import page15 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0015.jpg';
import page16 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0016.jpg';
import page17 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0017.jpg';
import page18 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0018.jpg';
import page19 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0019.jpg';
import page20 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0020.jpg';
import page21 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0021.jpg';
import page22 from '../assets/ecosse-whitepaper/Ecosse coin whitepaper_page-0022.jpg';

const pages = [
    page1, page2, page3, page4, page5, page6, page7, page8, page9, page10,
    page11, page12, page13, page14, page15, page16, page17, page18, page19, page20,
    page21, page22
];

const WhitepaperPage = () => {
    const [loadedImages, setLoadedImages] = useState(0);
    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        if (loadedImages >= pages.length) {
            setShowImages(true);
        }
    }, [loadedImages]);

    // Fallback: forcefully show images after 10 seconds to prevent hanging
    useEffect(() => {
        const timer = setTimeout(() => setShowImages(true), 10000);
        return () => clearTimeout(timer);
    }, []);

    const handleImageLoad = () => {
        setLoadedImages(prev => prev + 1);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f6f4f0]">
            <LandingHeader />

            <main className="bg-black flex-1 py-10 px-0 sm:px-6 lg:px-8 relative min-h-[60vh]">
                {!showImages && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-14 h-14 border-4 border-[#e8ddd4] border-t-[#B47B59] rounded-full animate-spin"></div>
                    </div>
                )}

                <div className={`max-w-5xl mx-auto shadow-2xl flex flex-col items-center transition-opacity duration-700 ${showImages ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                    {pages.map((imgSrc, index) => (
                        <img
                            key={index}
                            src={imgSrc}
                            alt={`Whitepaper Page ${index + 1}`}
                            className="w-full h-auto block pb-2"
                            onLoad={handleImageLoad}
                            onError={handleImageLoad}
                        />
                    ))}
                </div>
            </main>

            <LandingFooter />
        </div>
    );
};

export default WhitepaperPage;
