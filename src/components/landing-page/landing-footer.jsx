import React from 'react';

const LandingFooter = () => {
    return (
        <footer className="w-full py-6 sm:py-8">
            <div className="mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Left - Copyright */}
                    <p className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium">
                        © 2026 ECOSSE. All rights reserved.
                    </p>

                    {/* Right - Links */}
                    <div className="flex items-center gap-6 sm:gap-8">
                        <a href="/pdf-1" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Registration Certificate
                        </a>
                        <a href="/pdf-2" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Warehouse Approval
                        </a>
                        <a href="/privacy-policy" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="/terms-and-conditions" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Terms & Condition
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
