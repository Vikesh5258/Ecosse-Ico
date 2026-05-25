import React from 'react';

const LandingFooter = () => {
    return (
        <footer className="w-fullpy-6 sm:py-8">
            <div className="mx-auto px-4 sm:px-6 lg:px-[10rem]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Left - Copyright */}
                    <p className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium">
                        © 2026 ECOSSE. All rights reserved.
                    </p>

                    {/* Right - Links */}
                    <div className="flex items-center gap-6 sm:gap-8">
                        <a href="#" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Terms & Condition
                        </a>
                        <a href="#" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
