import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/pdf-1" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Registration Certificate
                        </Link>
                        <Link to="/pdf-2" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Warehouse Approval
                        </Link>
                        <Link to="/privacy-policy" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-and-conditions" className="text-[#1E1E1E] text-[13px] sm:text-[16px] tracking-[0.05em] font-medium hover:text-[#111111] transition-colors duration-300">
                            Terms & Condition
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
